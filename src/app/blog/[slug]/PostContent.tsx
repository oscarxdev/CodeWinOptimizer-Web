"use client";

import Link from "next/link";
import RichText from "@/components/RichText";
import { useLanguage } from "@/i18n";
import type { BlogPost } from "@/data/posts";

const labels = {
  en: {
    back: "All guides",
    minRead: "min read",
    updated: "Published",
    ctaTitle: "CodeWinOptimizer is free and open source",
    ctaText:
      "Portable, local-first, and telemetry-free. Every tweak in this guide is documented with its exact commands and can be reverted from the app.",
    ctaDownload: "Download for Windows",
    ctaDocs: "Read the docs",
  },
  es: {
    back: "Todas las guías",
    minRead: "min de lectura",
    updated: "Publicado",
    ctaTitle: "CodeWinOptimizer es gratis y de código abierto",
    ctaText:
      "Portátil, local y sin telemetría. Cada tweak de esta guía está documentado con sus comandos exactos y se puede revertir desde la app.",
    ctaDownload: "Descargar para Windows",
    ctaDocs: "Leer la documentación",
  },
};

export default function PostContent({ post }: { post: BlogPost }) {
  const { locale } = useLanguage();
  const l = labels[locale as "en" | "es"] || labels.en;
  const dateLocale = locale === "es" ? "es-ES" : "en-US";

  return (
    <>
      <div className="mb-6">
        <Link href="/blog" className="text-xs text-text-muted hover:text-neon transition-colors">
          &larr; <span className="hover:underline">{l.back}</span>
        </Link>
      </div>

      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider">
          <span className="rounded-full border border-neon/20 bg-neon/10 px-2.5 py-0.5 text-neon">
            {post.category[locale as "en" | "es"]}
          </span>
          <span className="text-text-muted">
            {post.readingTime} {l.minRead}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
          {post.title[locale as "en" | "es"]}
        </h1>
        <p className="mt-3 text-sm text-text-muted">
          {l.updated}{" "}
          {new Date(post.date).toLocaleDateString(dateLocale, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <RichText blocks={post.content[locale as "en" | "es"]} />

      <div className="mt-12 rounded-xl border border-border bg-bg-card p-6">
        <h2 className="text-base font-semibold text-white">{l.ctaTitle}</h2>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{l.ctaText}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://github.com/oscarxdev/CodeWinOptimizer-App/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-neon px-4 py-2 text-xs font-semibold text-bg-dark transition-all hover:bg-neon-dim"
          >
            {l.ctaDownload}
          </a>
          <Link
            href="/docs"
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-text-muted transition-all hover:border-neon/40 hover:text-white"
          >
            {l.ctaDocs}
          </Link>
        </div>
      </div>
    </>
  );
}
