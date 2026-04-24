import { headers } from "next/headers";
import axios from "axios";
import { profileDemoList } from "./profileDemoData";

/**
 * When `GET_PROFILES` is missing or fails, fall back to `profileDemoList` (all environments) unless
 * `NEXT_PUBLIC_PROFILE_MOCK=0` — then return []. If `GET_PROFILES` is set and succeeds, the API response is used.
 */
function shouldUseProfileMock() {
  if (process.env.NEXT_PUBLIC_PROFILE_MOCK === "0") {
    return false;
  }
  return true;
}

const FETCH_TIMEOUT_MS = 12_000;
const JSON_READ_MS = 10_000;
const GET_DATA_TOTAL_CAP_MS = 10_000;

/** Same as getData — some upstreams reject default `node` fetch (no / minimal User-Agent). */
const PS_FETCH_UA = "Mozilla/5.0 (compatible; ProfileSuite/1.0; +https://www.profilesuite.com)";

function getFallbackData(domain) {
  return {
    data: {
      title: "",
      description: "Build your professional profile in minutes with ProfileSuite.",
      keywords: "",
      author: "",
      domainName: domain || "localhost",
      background_url: null,
      twitter: "",
      fb: "",
      linkedin: "",
      logo: null,
      piwikId: null,
      accountGA: null,
      adsenseClientId: null,
    },
  };
}

export function getDomain() {
  const headersList = headers();
  const host = headersList.get("host") || "";
  if (host.includes("localhost") || host.startsWith("127.0.0.1")) {
    return process.env.NEXT_PUBLIC_VERCEL_URL || host || "localhost";
  }
  return host.replace(/^www\./, "");
}

/** Avoid hanging forever on a slow or never-ending response body. */
function readJsonWithTimeout(res, ms) {
  return Promise.race([
    res.json(),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Response JSON read timed out")), ms)
    ),
  ]);
}

async function getDataFromNetwork() {
  const domain = getDomain();
  const base = process.env.CONTRIB_API1;
  if (!base) {
    if (process.env.NODE_ENV === "development") {
      console.warn("CONTRIB_API1 is not set; using local fallback so the app can load.");
    }
    return getFallbackData(domain);
  }

  const url = `${base}&domain=${encodeURIComponent(domain || "")}`;

  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) {
    console.warn("getData: response not ok", res.status, "— using fallback data.");
    return getFallbackData(domain);
  }
  return readJsonWithTimeout(res, JSON_READ_MS);
}

export async function getData() {
  const domain = getDomain();
  try {
    return await Promise.race([
      getDataFromNetwork(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("getData total time cap exceeded")), GET_DATA_TOTAL_CAP_MS)
      ),
    ]);
  } catch (e) {
    console.warn("getData failed or capped:", e?.message || e);
    return getFallbackData(domain);
  }
}

export async function getTopsites() {
  const domain = getDomain();
  const base = process.env.CONTRIB_API1_TOPSITES;
  if (!base) {
    return { topsites: [] };
  }
  const url = `${base}&domain=${encodeURIComponent(domain || "")}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    console.warn("getTopsites failed:", e?.message || e);
    return { topsites: [] };
  }
}

export async function getScript(url) {
  try {
    const res = await axios.get(url, { timeout: 12_000 });
    return res.data?.data?.content ?? { error: "getScript: empty" };
  } catch (e) {
    console.warn("getScript", e?.message || e);
    return { error: "error getScript" };
  }
}

export async function getBlogs() {
  const domain = getDomain();
  const base = process.env.GET_BLOGS;
  if (!base) {
    throw new Error("GET_BLOGS is not configured");
  }
  const url = `${base}&domain=${encodeURIComponent(domain || "")}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProfiles() {
  const url = process.env.GET_PROFILES;
  if (!url) {
    throw new Error("GET_PROFILES is not configured");
  }
  // `cache: "no-store"` so production always reads fresh data from the upstream (no Data Cache).
  const res = await fetch(url, {
    cache: "no-store",
    headers: { "User-Agent": PS_FETCH_UA },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  if (!res.ok) {
    throw new Error(`GET_PROFILES failed: HTTP ${res.status}`);
  }

  return readJsonWithTimeout(res, JSON_READ_MS);
}

/**
 * Normalizes the upstream Getprofiles (and similar) payloads to a list of profile objects.
 * Supports: { data: { profiles: [] } }, { data: [] }, { profiles: [] }, and plain arrays.
 */
export function coalesceProfileListResponse(j) {
  if (!j) return [];
  if (Array.isArray(j)) return j;
  if (Array.isArray(j.profiles)) return j.profiles;
  if (j.data) {
    if (Array.isArray(j.data.profiles)) return j.data.profiles;
    if (Array.isArray(j.data)) return j.data;
  }
  return [];
}

/**
 * For /api/profiles: never throw — the client should always get a quick JSON body.
 */
export async function getProfilesList() {
  if (!process.env.GET_PROFILES) {
    if (shouldUseProfileMock()) {
      return profileDemoList;
    }
    if (process.env.NODE_ENV === "development") {
      console.warn("GET_PROFILES is not set and mock is off; /api/profiles returns [].");
    } else {
      console.warn("GET_PROFILES is not set and NEXT_PUBLIC_PROFILE_MOCK=0; /api/profiles returns an empty list.");
    }
    return [];
  }
  try {
    const j = await getProfiles();
    return coalesceProfileListResponse(j);
  } catch (e) {
    console.warn("getProfilesList:", e?.message || e);
    if (process.env.NODE_ENV === "production" && !shouldUseProfileMock()) {
      console.error(
        "Featured profiles: upstream GET_PROFILES request failed. Check the URL, API key, upstream status, and server logs above."
      );
    }
    if (shouldUseProfileMock()) {
      return profileDemoList;
    }
    return [];
  }
}
