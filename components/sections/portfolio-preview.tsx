"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/content/site";
import { ArrowRight } from "lucide-react";

export function PortfolioPreview() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Floating orbs - Optimized for performance */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
      
      {/* Gradient overlays for smooth section transitions */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 217, 255, 0.04) 0%, rgba(0, 217, 255, 0.02) 50%, transparent 100%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, hsl(220, 32%, 11%) 0%, hsla(220, 30%, 13%, 0.8) 30%, transparent 60%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, rgba(0, 217, 255, 0.05) 0%, rgba(0, 217, 255, 0.02) 50%, transparent 100%)"
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-12 relative z-30">
            <span className="px-8 py-4 rounded-full bg-primary/40 text-white border-2 border-primary/60 text-xl font-black shadow-lg shadow-primary/30 relative">
              {isArabic ? "أعمالنا" : "Our Portfolio"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent relative z-20" style={{
            textShadow: "0 0 40px rgba(0, 217, 255, 0.2)"
          }}>
            {isArabic ? "ما نبنيه" : "What We Build"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed relative z-20">
            {isArabic ? "مشاريع حقيقية، نتائج حقيقية" : "Real projects, real results"}
          </p>
        </div>

        <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12"
        >
          {/* First 3 projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {site.portfolio
              .filter((project) => project.id !== "ecommerce-presale-chatbot")
              .slice(0, 3)
              .map((project) => (
              <motion.div key={project.id} variants={item}>
                  <Link href={project.href} className="block h-full">
                    <Card className="h-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 bg-card flex flex-col cursor-pointer group">
                      <CardHeader>
                        <div className="mb-3">
                          <Badge variant="secondary" className="text-xs font-bold">
                            {isArabic ? project.metric.ar : project.metric.en}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {isArabic ? project.title.ar : project.title.en}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        <CardDescription className="text-base flex-1">
                          {isArabic ? project.summary.ar : project.summary.en}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
              </motion.div>
            ))}
          </div>

          {/* Last 2 projects - centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:max-w-[calc(66.666%+0.75rem)] mx-auto">
            {site.portfolio
              .filter((project) => project.id !== "ecommerce-presale-chatbot")
              .slice(3, 5)
              .map((project) => (
              <motion.div key={project.id} variants={item}>
                  <Link href={project.href} className="block h-full">
                    <Card className="h-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border-2 border-primary/30 hover:border-primary/50 bg-card flex flex-col cursor-pointer group">
                      <CardHeader>
                        <div className="mb-3">
                          <Badge variant="secondary" className="text-xs font-bold">
                            {isArabic ? project.metric.ar : project.metric.en}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {isArabic ? project.title.ar : project.title.en}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        <CardDescription className="text-base flex-1">
                          {isArabic ? project.summary.ar : project.summary.en}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
              </motion.div>
            ))}
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
            href="/portfolio"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:via-primary hover:to-primary/70 transition-all font-bold text-lg shadow-[0_8px_30px_rgb(0,217,255,0.3)] hover:shadow-[0_12px_40px_rgb(0,217,255,0.5)] hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
            style={{ transform: "perspective(1000px)" }}
          >
            <span className="relative z-10">{isArabic ? "استكشف المزيد من المشاريع" : "Explore More Projects"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Link>
          {/* Bottom glow for 3D effect */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-primary/30 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

