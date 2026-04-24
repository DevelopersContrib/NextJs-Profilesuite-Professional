/**
 * Dev fallback for “Explore featured profiles” when GET_PROFILES is missing or fails.
 * Shaped like live API items: id, name, intro, image, domain, socials.
 * In production, real data is always used (see getProfilesList in data.jsx).
 *
 * Avatars: deterministic faces via pravatar (non-identifying stock photos for UI demo only).
 */
export const profileDemoList = [
  {
    id: "mock-1",
    domain: "sarah-ellis.profilesuite.com",
    name: "Sarah Ellis",
    intro: "Product marketing lead — turning positioning into clear stories customers remember.",
    image: "https://i.pravatar.cc/300?u=profilesuite-sarah-1",
    socials: { linkedin: "https://www.linkedin.com/", twitter: "https://twitter.com/" },
  },
  {
    id: "mock-2",
    domain: "james-okoro.profilesuite.com",
    name: "James Okoro",
    intro: "Engineering manager focused on shipping reliable systems and growing strong teams.",
    image: "https://i.pravatar.cc/300?u=profilesuite-james-2",
    socials: { linkedin: "https://www.linkedin.com/" },
  },
  {
    id: "mock-3",
    domain: "elena-vasquez.profilesuite.com",
    name: "Elena Vásquez",
    intro: "Design director — brand, UX, and craft that still works under real constraints.",
    image: "https://i.pravatar.cc/300?u=profilesuite-elena-3",
    socials: { instagram: "https://www.instagram.com/" },
  },
  {
    id: "mock-4",
    domain: "amir-hassan.profilesuite.com",
    name: "Amir Hassan",
    intro: "Data & strategy consultant — from messy spreadsheets to decisions leadership trusts.",
    image: "https://i.pravatar.cc/300?u=profilesuite-amir-4",
    socials: { twitter: "https://twitter.com/" },
  },
  {
    id: "mock-5",
    domain: "rachel-kim.profilesuite.com",
    name: "Rachel Kim",
    intro: "Fractional COO for growing startups — process, people, and runway you can read at a glance.",
    image: "https://i.pravatar.cc/300?u=profilesuite-rachel-5",
    socials: { linkedin: "https://www.linkedin.com/", facebook: "https://www.facebook.com/" },
  },
  {
    id: "mock-6",
    domain: "dmitri-volkov.profilesuite.com",
    name: "Dmitri Volkov",
    intro: "Independent security advisor — threat modeling, reviews, and pragmatic hardening.",
    image: "https://i.pravatar.cc/300?u=profilesuite-dmitri-6",
    socials: {},
  },
  {
    id: "mock-7",
    domain: "priya-nair.profilesuite.com",
    name: "Priya Nair",
    intro: "Customer success leader — renewals, advocacy, and onboarding that actually sticks.",
    image: "https://i.pravatar.cc/300?u=profilesuite-priya-7",
    socials: { linkedin: "https://www.linkedin.com/", youtube: "https://www.youtube.com/" },
  },
  {
    id: "mock-8",
    domain: "michael-torres.profilesuite.com",
    name: "Michael Torres",
    intro: "Commercial counsel — clear contracts, faster closes, and fewer surprises late in the deal.",
    image: "https://i.pravatar.cc/300?u=profilesuite-michael-8",
    socials: { linkedin: "https://www.linkedin.com/" },
  },
];
