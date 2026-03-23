"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + "?" + searchParams.toString();

    window.gtag?.("config", "G-T9TP3FX9XB", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}