import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Prose from "@/components/Prose";
import { absoluteUrl } from "@/config/site";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About the Project",
  description:
    "CodeWinOptimizer is a free, open-source Windows optimizer built by OscarDev: local-first, portable, telemetry-free, with every tweak documented. Learn who is behind the project and why it exists.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About the Project | CodeWinOptimizer",
    description:
      "Why CodeWinOptimizer exists: a local-first, open-source Windows optimizer with no telemetry, built by OscarDev.",
    url: absoluteUrl("/about"),
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <Prose>
        <AboutContent />
      </Prose>
    </PageShell>
  );
}
