"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/i18n";
import ScrollProgress from "./ScrollProgress";

const supportLinks = [
  {
    label: "PayPal",
    href: "https://paypal.me/botarctic",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.1 21h-3l3.2-18h7.2c3.2 0 5.2 1.9 4.7 4.8-.4 2.6-2.3 4.4-5.1 4.8l-.9.1c-.2 0-.4.2-.4.4L12 17.4H8.8l.7-4.1H8.2L7.1 21Zm3-10.6h2.7c1.6 0 2.8-.9 3-2.4.2-1.4-.7-2.2-2.4-2.2h-3.1l-.8 4.6h.6Z" />
      </svg>
    ),
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/c/oscar_dev/membership",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 3h4v18H4V3Zm11.4 0C12.2 3 9.6 5.6 9.6 8.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8S18.6 3 15.4 3Z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t.nav.docs, href: "/docs" },
    { label: t.nav.guides, href: "/blog" },
    { label: t.nav.about, href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="CodeWinOptimizer logo" width={40} height={40} className="rounded-full" />
          <span className="text-lg font-semibold tracking-tight">
            Code<span className="text-neon">Win</span>Optimizer
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-text-muted transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              {supportLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:border-neon hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="https://github.com/oscarxdev/CodeWinOptimizer-App"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-muted transition-all hover:border-neon hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {t.nav.starOnGitHub}
            </a>
            <a
              href="https://github.com/oscarxdev/CodeWinOptimizer-App/releases/latest"
              className="flex items-center gap-2 rounded-full bg-neon px-4 py-2 text-sm font-semibold text-bg-dark transition-all hover:bg-neon-dim"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.nav.download}
            </a>
          </div>

          <button
            onClick={setLocale}
            className="relative flex items-center h-7 w-14 rounded-full border border-border bg-bg-card transition-all hover:border-neon/40"
          >
            <span
              className={`absolute text-[10px] font-semibold transition-all duration-200 ${
                locale === "en" ? "left-2 text-neon" : "right-2 text-neon"
              }`}
            >
              {locale === "en" ? "EN" : "ES"}
            </span>
            <span
              className={`absolute text-[10px] font-semibold transition-all duration-200 text-text-muted ${
                locale === "en" ? "right-2" : "left-2"
              }`}
            >
              {locale === "en" ? "ES" : "EN"}
            </span>
            <span
              className={`absolute h-5 w-5 rounded-full bg-neon transition-all duration-200 ${
                locale === "en" ? "left-1" : "left-[calc(100%-1.5rem)]"
              }`}
            />
          </button>

          <button
            className="block md:hidden text-text-muted"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg-card px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2 text-sm text-text-muted hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {supportLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 py-2 text-sm text-text-muted hover:text-white"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/oscarxdev/CodeWinOptimizer-App"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 py-2 text-sm text-text-muted hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t.nav.starOnGitHub}
          </a>
          <a
            href="https://github.com/oscarxdev/CodeWinOptimizer-App/releases/latest"
            className="mt-2 flex items-center gap-2 py-2 text-sm text-neon hover:text-neon-dim"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t.nav.download}
          </a>
        </div>
      )}
      <ScrollProgress />
    </nav>
  );
}
