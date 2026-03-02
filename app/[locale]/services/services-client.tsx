"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlowingBorder } from "@/components/glowing-border";
import { Sparkles } from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  blurb?: { en: string; ar: string };
  bullets?: { en: string[]; ar: string[] };
  tags?: string[];
}

interface ServicesClientProps {
  services: Service[];
  isArabic: boolean;
}

export function ServicesClient({ services, isArabic }: ServicesClientProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="relative z-10 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            // Make every 4th card larger
            const isLarge = index % 4 === 3;
            const cardClass = isLarge ? "md:col-span-2" : "md:col-span-1";
            
            return (
              <motion.div key={service.id} variants={item} className={cardClass}>
                <GlowingBorder>
                  <Card className="h-full group relative overflow-hidden border-2 border-primary/30 hover:border-primary/60 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 flex flex-col">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <CardHeader className="relative z-10">
                      {/* Title and Icon on the same line */}
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <CardTitle className="text-2xl font-black leading-tight text-white group-hover:text-primary transition-all duration-300 flex-1 pl-2">
                          <span className="group-hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.6)] transition-all duration-300">
                            {isArabic ? service.title.ar : service.title.en}
                          </span>
                        </CardTitle>
                        <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-primary/60 transition-all duration-300">
                          {IconComponent && <IconComponent className="h-8 w-8 text-background" />}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 flex-1 flex flex-col">
                      <p className="text-base leading-relaxed text-muted-foreground/90 group-hover:text-foreground/80 transition-colors duration-300 mb-5">
                        {isArabic ? service.description.ar : service.description.en}
                      </p>
                      
                      {/* Feature bullets - pushed to bottom */}
                      {service.bullets && (
                        <ul className="mt-auto space-y-2">
                          {(isArabic ? service.bullets.ar : service.bullets.en).map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                              <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>

                    {/* Bottom glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Card>
                </GlowingBorder>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-3">
              {isArabic ? "هل أنت مستعد للبدء؟" : "Ready to Get Started?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {isArabic
                ? "دعنا نناقش كيف يمكننا مساعدتك في أتمتة عملك"
                : "Let's discuss how we can help automate your workflow"}
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isArabic ? "احجز مكالمة مجانية" : "Book a Free Call"}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

