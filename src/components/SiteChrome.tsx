"use client";

import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-14">{children}</div>
      <Footer />
    </>
  );
}
