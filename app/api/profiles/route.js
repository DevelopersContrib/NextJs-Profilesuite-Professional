import { getProfilesList } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  const profiles = await getProfilesList();
  return Response.json({ status: true, profiles }, { status: 200 });
}
