"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
  };
}

export function CalendlyEmbed({ url, prefill }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly stylesheet
    const existingLink = document.querySelector('link[href*="calendly"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Load Calendly widget script (data-url approach — most reliable)
    const existingScript = document.querySelector('script[src*="calendly"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Build full URL with query params
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    background_color: "0a0f1e",
    text_color: "ffffff",
    primary_color: "00d9ff",
  });

  if (prefill?.name) params.set("name", prefill.name);
  if (prefill?.email) params.set("email", prefill.email);

  const fullUrl = `${url}?${params.toString()}`;

  return (
    <div
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      data-url={fullUrl}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
