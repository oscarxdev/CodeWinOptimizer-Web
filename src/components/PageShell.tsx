import { type ReactNode } from "react";
import SiteChrome from "@/components/SiteChrome";

export default function PageShell({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <SiteChrome>
      <main
        className={`mx-auto ${wide ? "max-w-5xl" : "max-w-3xl"} px-6 py-14`}
      >
        {children}
      </main>
    </SiteChrome>
  );
}
