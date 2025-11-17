"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import * as Icons from "lucide-react";

export function ServicesPreview() {
  const locale = useLocale();
  const isArabic = locale === "ar";

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      {/* Floating orbs - Optimized for performance */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
      
      {/* Top cyan glowing border */}
      <div 
        className="absolute top-0 left-0 right-0 h-px bg-primary/30"
        style={{
          boxShadow: "0 0 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.2), 0 0 60px rgba(0, 217, 255, 0.1)"
        }}
      />
      
      {/* Bottom cyan glowing border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px bg-primary/30"
        style={{
          boxShadow: "0 0 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.2), 0 0 60px rgba(0, 217, 255, 0.1)"
        }}
      />
      
      {/* Gradient overlays for smooth section transitions */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, hsl(220, 32%, 11%) 0%, hsla(220, 25%, 15%, 0.8) 30%, transparent 60%)"
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 217, 255, 0.05) 0%, rgba(0, 217, 255, 0.02) 50%, transparent 100%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, hsl(220, 32%, 11%) 0%, hsla(220, 25%, 15%, 0.8) 30%, transparent 60%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, rgba(0, 217, 255, 0.05) 0%, rgba(0, 217, 255, 0.02) 50%, transparent 100%)"
        }}
      />
      
      <div className="container relative z-50 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-12 relative z-50">
            <span className="px-8 py-4 rounded-full bg-primary/40 text-white border-2 border-primary/60 text-xl font-black backdrop-blur-xl shadow-2xl shadow-primary/30 relative z-50">
              {isArabic ? "خدماتنا" : "Our Services"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent relative z-20" style={{
            textShadow: "0 0 40px rgba(0, 217, 255, 0.2)"
          }}>
            {isArabic ? "ما نقدمه" : "What We Offer"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed relative z-20">
            {isArabic
              ? "حلول أتمتة شاملة مصممة خصيصًا لسير عملك"
              : "End-to-end automation solutions tailored to your workflow"}
          </p>
        </div>

        <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12"
        >
          {/* All services in 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {site.services.map((service) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              
              return (
                <motion.div key={service.id} variants={item}>
                <Link href={`/services#${service.id}`} className="block h-full">
                    <Card className="h-full group relative overflow-hidden border-2 border-primary/30 hover:border-primary/60 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 flex flex-col cursor-pointer">
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
                          <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40">
                            {IconComponent && <IconComponent className="h-7 w-7 text-background" />}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10 flex-1 flex flex-col">
                        <p className="text-base leading-relaxed text-muted-foreground/90 group-hover:text-foreground/80 transition-colors duration-300 mb-5">
                          {isArabic ? service.description.ar : service.description.en}
                        </p>
                        
                        {/* Feature bullets - pushed to bottom */}
                        <ul className="mt-auto space-y-2">
                          {service.bullets?.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                              <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      {/* Bottom glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Card>
                </Link>
              </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center relative"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:via-primary hover:to-primary/70 transition-all font-bold text-lg shadow-[0_8px_30px_rgb(0,217,255,0.3)] hover:shadow-[0_12px_40px_rgb(0,217,255,0.5)] hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
            style={{ transform: "perspective(1000px)" }}
          >
            <span className="relative z-10">{isArabic ? "استكشف جميع الخدمات" : "Explore All Services"}</span>
            <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Link>
          {/* Bottom glow for 3D effect */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-primary/30 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

