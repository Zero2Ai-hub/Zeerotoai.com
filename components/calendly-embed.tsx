"use client";

import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
  };
}

export function CalendlyEmbed({ url, prefill }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget script
    const existingScript = document.querySelector('script[src*="calendly"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Init inline widget after script loads
    const initWidget = () => {
      if (typeof (window as any).Calendly !== "undefined" && containerRef.current) {
        (window as any).Calendly.initInlineWidget({
          url: `${url}?hide_gdpr_banner=1&background_color=0a0f1e&text_color=ffffff&primary_color=00d9ff`,
          parentElement: containerRef.current,
          prefill: prefill || {},
        });
      }
    };

    // If script already loaded
    if (typeof (window as any).Calendly !== "undefined") {
      initWidget();
    } else {
      const script = document.querySelector('script[src*="calendly"]');
      if (script) {
        script.addEventListener("load", initWidget);
        return () => script.removeEventListener("load", initWidget);
      }
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
