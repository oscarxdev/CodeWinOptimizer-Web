import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Prose from "@/components/Prose";
import { absoluteUrl } from "@/config/site";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the CodeWinOptimizer website: acceptable use, software licensing (MIT), third-party links and advertising, disclaimers, and liability.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | CodeWinOptimizer",
    description:
      "The rules that govern the use of the CodeWinOptimizer website and its documentation.",
    url: absoluteUrl("/terms"),
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <PageShell>
      <Prose>
        <TermsContent />
      </Prose>
    </PageShell>
  );
}
