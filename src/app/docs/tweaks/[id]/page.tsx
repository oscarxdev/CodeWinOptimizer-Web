import type { Metadata } from "next";
import { notFound } from "next/navigation";
import tweaksData from "@/data/tweaks.json";
import TweakDetailClient from "./TweakDetailClient";
import { absoluteUrl } from "@/config/site";

type TweakEntry = {
  id: string;
  name: { en: string; es: string };
  description: { en: string; es: string };
  benefit: { en: string; es: string };
  impact: string;
  commands: string[];
  warnings: { en: string[]; es: string[] };
};

type TweakCategory = {
  id: string;
  name: { en: string; es: string };
  icon: string;
  tweaks: TweakEntry[];
};

function findTweak(id: string): { tweak: TweakEntry; category: TweakCategory } | null {
  const cats = tweaksData as TweakCategory[];
  for (const cat of cats) {
    const t = cat.tweaks.find((t) => t.id === id);
    if (t) return { tweak: t, category: cat };
  }
  return null;
}

export async function generateStaticParams() {
  const cats = tweaksData as TweakCategory[];
  return cats.flatMap((c) => c.tweaks.map((t) => ({ id: t.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const found = findTweak(id);
  if (!found) return { title: "Not Found" };
  const { tweak, category } = found;
  const impact = `Impact level: ${tweak.impact}.`;
  const cleanName = tweak.name.en.replace(
    /^[\p{Emoji_Presentation}\p{Extended_Pictographic}‍️]+\s*/u,
    "",
  );
  return {
    title: `${cleanName} — Windows ${category.name.en} Tweak | CodeWinOptimizer Docs`,
    description: `${tweak.description.en} ${tweak.benefit.en} ${impact}`,
    keywords: [
      cleanName,
      "windows tweak",
      "windows registry tweak",
      category.name.en,
      ...(tweak.warnings.en.length ? ["windows tweak warning"] : []),
    ],
    alternates: {
      canonical: `/docs/tweaks/${tweak.id}`,
    },
    openGraph: {
      title: `${cleanName} — Windows ${category.name.en} Tweak | CodeWinOptimizer Docs`,
      description: tweak.description.en,
      type: "article",
      url: absoluteUrl(`/docs/tweaks/${tweak.id}`),
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
    },
  };
}

export default async function TweakDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const found = findTweak(id);
  if (!found) notFound();

  const related = (tweaksData as TweakCategory[])
    .find((c) => c.id === found.category.id)
    ?.tweaks.filter((t) => t.id !== found.tweak.id)
    .slice(0, 4)
    .map((t) => ({ id: t.id, name: t.name })) ?? [];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Documentation",
        item: absoluteUrl("/docs"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "System Tweaks",
        item: absoluteUrl("/docs/tweaks"),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: found.tweak.name.en,
        item: absoluteUrl(`/docs/tweaks/${found.tweak.id}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <TweakDetailClient
        tweak={found.tweak}
        category={found.category}
        related={related}
      />
    </>
  );
}
