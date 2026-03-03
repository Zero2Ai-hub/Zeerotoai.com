"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

const ACCENT_COLORS = [
  { border: "rgba(0,217,255,0.5)",  glow: "rgba(0,217,255,0.15)",  text: "rgb(0,217,255)"   },
  { border: "rgba(168,85,247,0.5)", glow: "rgba(168,85,247,0.12)", text: "rgb(168,85,247)"  },
  { border: "rgba(34,197,94,0.5)",  glow: "rgba(34,197,94,0.12)",  text: "rgb(34,197,94)"   },
];

interface Metric { label: string; value: string }

interface Project {
  slug: string;
  id: string;
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  summary: { en: string; ar: string };
  metric: { en: string; ar: string };
  metrics?: Metric[];
  tags: string[];
  href: string;
  demoUrl: string;
  image: string;
}

interface PortfolioGridProps {
  projects: Project[];
  isArabic: boolean;
}

export function PortfolioGrid({ projects, isArabic }: PortfolioGridProps) {
  return (
    <section className="relative z-10 pb-20 px-4">
      <div className="container mx-auto max-w-5xl space-y-6">

        {projects.map((project, i) => {
          const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
          const primaryMetric = project.metrics?.[0];

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div
                className="relative rounded-2xl overflow-hidden border bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ borderColor: color.border, boxShadow: `0 0 0 0 ${color.glow}` }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 40px ${color.glow}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${color.glow}`)}
              >
                <div className="flex flex-col md:flex-row">

                  {/* Left — stat panel */}
                  <div
                    className="md:w-52 flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 border-b md:border-b-0 md:border-r"
                    style={{ borderColor: color.border, background: `linear-gradient(135deg, ${color.glow} 0%, transparent 100%)` }}
                  >
                    <div
                      className="text-4xl md:text-5xl font-black mb-1 leading-none"
                      style={{ color: color.text, textShadow: `0 0 20px ${color.text}` }}
                    >
                      {primaryMetric?.value ?? "✓"}
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-center mt-1" style={{ color: color.text, opacity: 0.6 }}>
                      {primaryMetric?.label ?? "Live"}
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="flex-1 p-7 flex flex-col gap-4">
                    {/* Badge + number */}
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full border"
                        style={{ color: color.text, borderColor: color.border, background: color.glow }}
                      >
                        {isArabic ? project.badge.ar : project.badge.en}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">#{String(i + 1).padStart(2, "0")}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                      {isArabic ? project.title.ar : project.title.en}
                    </h3>

                    {/* Summary — first sentence only */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {(isArabic ? project.summary.ar : project.summary.en).split('.')[0] + '.'}
                    </p>

                    {/* Secondary metrics row */}
                    {project.metrics && project.metrics.length > 1 && (
                      <div className="flex flex-wrap gap-4">
                        {project.metrics.slice(1).map(m => (
                          <div key={m.label} className="flex items-center gap-1.5">
                            <span className="text-sm font-black" style={{ color: color.text }}>{m.value}</span>
                            <span className="text-xs text-muted-foreground">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags + CTA row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-2 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.filter(Boolean).slice(0, 5).map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded border border-white/10 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/book`}
                          className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-all hover:scale-105"
                          style={{ background: color.glow, color: color.text, border: `1px solid ${color.border}` }}
                        >
                          <Zap className="w-3 h-3" />
                          {isArabic ? "احصل على هذا" : "Get This"}
                        </Link>
                        <Link
                          href={project.href}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          {isArabic ? "التفاصيل" : "Details"}
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${color.text}, transparent)` }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center pt-8"
        >
          <p className="text-muted-foreground text-sm mb-5">
            {isArabic ? "لديك مشروع مشابه؟" : "Have a similar project in mind?"}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-background font-black text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/30"
          >
            {isArabic ? "احجز مكالمة مجانية" : "Book a Free Audit"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
