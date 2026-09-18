import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Prose from "@/components/Prose";
import { absoluteUrl } from "@/config/site";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CodeWinOptimizer handles your data: no accounts, no first-party tracking cookies, no telemetry in the desktop app. Learn about Google AdSense advertising cookies and your privacy rights.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | CodeWinOptimizer",
    description:
      "No accounts, no tracking scripts, no telemetry in the app. How CodeWinOptimizer and its advertising partners handle data.",
    url: absoluteUrl("/privacy"),
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <Prose>
        <PrivacyContent />
      </Prose>
    </PageShell>
  );
}
