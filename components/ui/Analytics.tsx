// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useRef } from "react";

// const GA_MEASUREMENT_ID = "G-T9TP3FX9XB";


// export default function GoogleAnalytics() {
//   const pathname = usePathname();
//   const prevPath = useRef<string | null>(""); // Accepts string or null

//   useEffect(() => {
//     if (typeof window.gtag !== "function") return;

//     if (prevPath.current !== pathname) {
//       window.gtag("config", GA_MEASUREMENT_ID, {
//         page_path: pathname,
//       });
//       prevPath.current = pathname;
//     }
//   }, [pathname]);

//   return null;
// }












// components/ui/Analytics.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const GA_MEASUREMENT_ID = "G-T9TP3FX9XB";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    // Check if gtag is available
    if (typeof window.gtag !== "function") {
      console.warn("gtag not available");
      return;
    }

    // Build full URL with search params
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    
    // Only track if pathname actually changed
    if (prevPath.current !== pathname) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title,
        send_page_view: true,
      });
      prevPath.current = pathname;
    }
  }, [pathname, searchParams]);

  return null;
}