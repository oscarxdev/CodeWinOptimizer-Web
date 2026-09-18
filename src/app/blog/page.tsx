import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { absoluteUrl } from "@/config/site";
import BlogIndexContent from "./BlogIndexContent";

export const metadata: Metadata = {
  title: "Guides & Tutorials",
  description:
    "Step-by-step Windows 11 guides: disable telemetry, speed up boot times, remove bloatware safely, and tune your PC for gaming. Written and maintained with the CodeWinOptimizer documentation.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Guides & Tutorials | CodeWinOptimizer",
    description:
      "Practical, no-hype Windows 11 guides: privacy, performance, debloat and gaming.",
    url: absoluteUrl("/blog"),
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <PageShell wide>
      <BlogIndexContent />
    </PageShell>
  );
}
