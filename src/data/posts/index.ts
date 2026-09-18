import type { BlogPost } from "./types";
import { disableTelemetry } from "./disable-windows-11-telemetry";
import { speedUpBoot } from "./speed-up-windows-11-boot";
import { removeBloatware } from "./windows-11-bloatware-safe-to-remove";
import { gamingOptimization } from "./windows-11-gaming-optimization";

export const posts: BlogPost[] = [
  disableTelemetry,
  speedUpBoot,
  removeBloatware,
  gamingOptimization,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export type { BlogPost };
