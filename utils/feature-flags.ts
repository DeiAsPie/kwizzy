import { createClient } from "@vercel/edge-config";
import { env } from "@/env";

export const mockFlags = {
  enableLogin: true,
  enableExplore: true,
  enableTracks: true,
  enableEarlyAccess: false,
  enableInChallengeTrack: true,
};

export async function getAllFlags() {
  const allFeatureFlag = env.EDGE_CONFIG
    ? await createClient(env.EDGE_CONFIG).getAll<typeof mockFlags>()
    : mockFlags;
  return allFeatureFlag;
}
