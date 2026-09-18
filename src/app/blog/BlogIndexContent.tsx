"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n";
import { posts } from "@/data/posts";

const labels = {
  en: {
    title: "Guides & Tutorials",
    subtitle:
      "Practical, no-hype guides for Windows 10 and 11 — written by the team behind CodeWinOptimizer and linked to the exact tweaks and commands involved in every step.",
    minRead: "min read",
    read: "Read guide",
  },
  es: {
    title: "Guías y Tutoriales",
    subtitle:
      "Guías prácticas y sin hype para Windows 10 y 11 — escritas por el equipo detrás de CodeWinOptimizer y enlazadas a los tweaks y comandos exactos de cada paso.",
    minRead: "min de lectura",
    read: "Leer guía",
  },
};

export default function BlogIndexContent() {
  const { locale } = useLanguage();
  const l = labels[locale as "en" | "es"] || labels.en;
  const dateLocale = locale === "es" ? "es-ES" : "en-US";

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">{l.title}</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-text-muted">
        {l.subtitle}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-neon/40 hover:bg-bg-card-hover"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider">
              <span className="rounded-full border border-neon/20 bg-neon/10 px-2.5 py-0.5 text-neon">
                {post.category[locale as "en" | "es"]}
              </span>
              <span className="text-text-muted">
                {post.readingTime} {l.minRead}
              </span>
            </div>
            <h2 className="text-base font-semibold leading-snug group-hover:text-neon transition-colors">
              {post.title[locale as "en" | "es"]}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
              {post.description[locale as "en" | "es"]}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(dateLocale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="font-medium text-neon opacity-0 transition-opacity group-hover:opacity-100">
                {l.read} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
