import { type ReactNode } from "react";

/**
 * Shared typography wrapper for long-form content pages
 * (guides, legal pages, about, contact).
 */
export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="text-sm leading-relaxed text-text-muted [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-white [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_li]:leading-relaxed [&_a]:text-neon [&_a]:transition-opacity [&_a:hover]:opacity-80 [&_strong]:text-white [&_strong]:font-semibold"
    >
      {children}
    </div>
  );
}
