"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { site } from "@/content/site";
import { GlowingTextBorder } from "@/components/glowing-text-border";
import { Youtube, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <footer className="border-t border-primary/10 bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6 flex flex-col items-center">
            <Link href="/" className="block group">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative flex items-center justify-center mx-auto">
                  <Image
                    src="/Logo-2.webp"
                    alt={site.brand.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-primary/40 group-hover:ring-primary/70 group-hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30 mx-auto"
                  />
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/25 blur-2xl transition-all duration-300 pointer-events-none" />
                  <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/40 blur-3xl transition-all duration-300 pointer-events-none scale-125" />
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 0 40px rgba(0, 217, 255, 0.6), 0 0 80px rgba(0, 217, 255, 0.4)',
                    }}
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <GlowingTextBorder>
                    <span 
                      className="text-3xl font-black tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 relative z-10"
                      style={{
                        WebkitTextStroke: '1.5px #1e2540',
                        filter: 'drop-shadow(0 0 6px rgba(0, 217, 255, 0.3)) drop-shadow(0 0 2px rgba(0, 217, 255, 0.4))',
                        paintOrder: 'stroke fill'
                      } as React.CSSProperties}
                    >
                      {site.brand.name}
                    </span>
                  </GlowingTextBorder>
                  <span className="text-xs font-medium text-primary/70 uppercase tracking-widest text-center group-hover:scale-105 transition-transform duration-300">
                    AI Automation
                  </span>
                </div>
              </div>
            </Link>
            <div className="flex items-center justify-center gap-4">
              <a
                href={site.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {isArabic
                ? site.footer.quickLinks.title.ar
                : site.footer.quickLinks.title.en}
            </h3>
            <ul className="space-y-2">
              {site.nav.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.slug}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isArabic ? item.ar : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">
              {isArabic
                ? site.footer.legal.title.ar
                : site.footer.legal.title.en}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {isArabic
                    ? site.footer.legal.privacy.ar
                    : site.footer.legal.privacy.en}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {isArabic
                    ? site.footer.legal.terms.ar
                    : site.footer.legal.terms.en}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">
              {isArabic ? "تواصل معنا" : "Contact"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${site.brand.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {site.brand.email}
                </a>
              </li>
              <li>
                <a
                  href={site.brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          {isArabic ? site.footer.copyright.ar : site.footer.copyright.en}
        </div>
      </div>
    </footer>
  );
}

