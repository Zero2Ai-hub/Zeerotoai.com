"use client";

import { useLocale } from "next-intl";

const clients = [
  { name: "Tech1Mart", abbr: "T1M" },
  { name: "Al Noor Group", abbr: "ANG" },
  { name: "Emirates Digital", abbr: "EDG" },
  { name: "Gulf Ventures", abbr: "GV" },
];

export function ClientsStrip() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="py-10 bg-background/60 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-8">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-6">
          {isArabic ? "موثوق من قِبَل" : "Trusted by & Built for"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity grayscale"
              title={client.name}
            >
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                {client.abbr}
              </div>
              <span className="text-sm font-semibold text-gray-300 tracking-wide">
                {client.name}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 opacity-30">
            <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-white/40 text-lg">+</span>
            </div>
            <span className="text-sm text-gray-500 italic">
              {isArabic ? "شركاء الخليج" : "GCC Partners"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
