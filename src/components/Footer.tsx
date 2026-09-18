"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n";
import { siteConfig } from "@/config/site";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const columns: Array<{ title: string; links: FooterLink[] }> = [
    {
      title: f.product,
      links: [
        { label: f.docs, href: "/docs" },
        { label: f.guides, href: "/blog" },
        { label: f.about, href: "/about" },
      ],
    },
    {
      title: f.resources,
      links: [
        { label: f.github, href: siteConfig.repository, external: true },
        { label: f.releases, href: siteConfig.releases, external: true },
        {
          label: f.license,
          href: `${siteConfig.repository}/blob/main/LICENSE`,
          external: true,
        },
      ],
    },
    {
      title: f.legal,
      links: [
        { label: f.privacy, href: "/privacy" },
        { label: f.terms, href: "/terms" },
        { label: f.contact, href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="CodeWinOptimizer"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium">
                Code<span className="text-neon">Win</span>Optimizer
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-text-muted leading-relaxed">
              {f.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-text-muted leading-relaxed">{f.disclaimer}</p>
          <p className="mt-4 text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {f.website} · CodeWinOptimizer
          </p>
        </div>
      </div>
    </footer>
  );
}
