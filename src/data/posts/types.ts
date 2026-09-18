import type { RichBlock } from "@/components/RichText";

export type PostLocale = "en" | "es";

export type BlogPost = {
  slug: string;
  /** ISO date, e.g. "2026-09-10" */
  date: string;
  /** Estimated reading time in minutes */
  readingTime: number;
  category: Record<PostLocale, string>;
  title: Record<PostLocale, string>;
  description: Record<PostLocale, string>;
  content: Record<PostLocale, RichBlock[]>;
};
