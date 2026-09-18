import type { MetadataRoute } from "next";
import tweaksData from "@/data/tweaks.json";
import { posts } from "@/data/posts";
import { absoluteUrl } from "@/config/site";

type TweakCategory = {
  tweaks: Array<{ id: string }>;
};

type RouteInfo = {
  route: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticRoutes: RouteInfo[] = [
  { route: "", changeFrequency: "weekly", priority: 1 },
  { route: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { route: "/docs", changeFrequency: "weekly", priority: 0.8 },
  { route: "/docs/apps", changeFrequency: "monthly", priority: 0.8 },
  { route: "/docs/tweaks", changeFrequency: "monthly", priority: 0.8 },
  { route: "/docs/features", changeFrequency: "monthly", priority: 0.8 },
  { route: "/docs/startup", changeFrequency: "monthly", priority: 0.8 },
  { route: "/docs/monitor", changeFrequency: "monthly", priority: 0.8 },
  { route: "/docs/cleanup", changeFrequency: "monthly", priority: 0.8 },
  { route: "/docs/profiles", changeFrequency: "monthly", priority: 0.8 },
  { route: "/docs/restore", changeFrequency: "monthly", priority: 0.8 },
  { route: "/about", changeFrequency: "monthly", priority: 0.6 },
  { route: "/contact", changeFrequency: "yearly", priority: 0.4 },
  { route: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { route: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const postRoutes: RouteInfo[] = posts.map((post) => ({
    route: `/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tweakRoutes: RouteInfo[] = (tweaksData as TweakCategory[]).flatMap(
    (category) =>
      category.tweaks.map((tweak) => ({
        route: `/docs/tweaks/${tweak.id}`,
        changeFrequency: "monthly",
        priority: 0.55,
      })),
  );

  return [...staticRoutes, ...postRoutes, ...tweakRoutes].map((entry) => ({
    url: absoluteUrl(entry.route),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
