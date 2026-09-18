import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Prose from "@/components/Prose";
import { absoluteUrl } from "@/config/site";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the CodeWinOptimizer team: email for general and privacy questions, GitHub Issues for bug reports, and GitHub for contributions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | CodeWinOptimizer",
    description:
      "Questions, bug reports, or feature ideas? Here is how to reach the CodeWinOptimizer project.",
    url: absoluteUrl("/contact"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <Prose>
        <ContactContent />
      </Prose>
    </PageShell>
  );
}
