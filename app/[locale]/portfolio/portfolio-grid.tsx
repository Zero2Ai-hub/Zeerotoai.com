"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlowingBorder } from "@/components/glowing-border";

interface Project {
  slug: string;
  id: string;
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  summary: { en: string; ar: string };
  metric: { en: string; ar: string };
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
    <section className="relative z-10 pt-8 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8"
        >
          {projects.map((project, index) => {
            // Special case: Last project (Zero2AI website) spans full width
            const isLastProject = index === projects.length - 1;
            
            // Masonry pattern repeating every 6 cards:
            // Row 1: [Wide Left (6 cols)] [Regular Right (4 cols)] = 60% / 40%
            // Row 2: [Equal (5 cols)] [Equal (5 cols)] = 50% / 50%
            // Row 3: [Regular Left (4 cols)] [Wide Right (6 cols)] = 40% / 60%
            const position = index % 6;
            let cardClass = "";
            
            if (isLastProject) {
              // Full width for last project (100%)
              cardClass = "md:col-span-2 lg:col-span-10";
            } else if (position === 0) {
              // Wide left (row 1) - 60%
              cardClass = "md:col-span-2 lg:col-span-6";
            } else if (position === 1) {
              // Regular right (row 1) - 40%
              cardClass = "md:col-span-2 lg:col-span-4";
            } else if (position === 2 || position === 3) {
              // Equal cards (row 2) - 50% each
              cardClass = "md:col-span-1 lg:col-span-5";
            } else if (position === 4) {
              // Regular left (row 3) - 40%
              cardClass = "md:col-span-2 lg:col-span-4";
            } else if (position === 5) {
              // Wide right (row 3) - 60%
              cardClass = "md:col-span-2 lg:col-span-6";
            }

            return (
              <motion.div key={project.id} variants={item} className={cardClass}>
                <GlowingBorder>
                  <Card className="h-full relative overflow-hidden border-2 border-primary/30 hover:border-primary/60 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 flex flex-col">
                    {/* Sparkle effect */}
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-5 h-5 text-primary/40" />
                    </div>

                    <CardHeader className="relative z-10 space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <Badge className="bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 font-bold text-xs px-3 py-1">
                          {isArabic ? project.badge.ar : project.badge.en}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold leading-tight">
                        {isArabic ? project.title.ar : project.title.en}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative z-10 flex-1 flex flex-col pb-4">
                      <div className="space-y-4 flex-grow">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {isArabic ? project.summary.ar : project.summary.en}
                        </p>

                        {/* Metric highlight */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                          <div className="w-1 h-4 bg-primary rounded-full" />
                          <span>{isArabic ? project.metric.ar : project.metric.en}</span>
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs border-primary/40 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 4 && (
                            <Badge
                              variant="outline"
                              className="text-xs border-primary/40 text-muted-foreground"
                            >
                              +{project.tags.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4">
                        <Button asChild variant="outline" className="flex-1 group">
                          <Link href={project.href}>
                            {isArabic ? "استكشف المشروع" : "Explore Project"}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link href="/signup">
                            {isArabic ? "احصل على هذا المشروع" : "Get This Project"}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>

                    {/* Bottom glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
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
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-3">
              {isArabic ? "هل لديك مشروع في ذهنك؟" : "Have a project in mind?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {isArabic
                ? "دعنا نحول فكرتك إلى أتمتة عاملة"
                : "Let's turn your idea into working automation"}
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isArabic ? "احجز مكالمة مجانية" : "Book a Free Call"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

