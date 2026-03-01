"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Sparkles,
  Zap,
  Target,
  Layers,
  CheckCircle2,
  Image as ImageIcon
} from "lucide-react";
import { useRef } from "react";
import { site } from "@/content/site";

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
  gallery?: string[];
  image: string;
}

interface ProjectDetailProps {
  project: Project;
  isArabic: boolean;
}

export function ProjectDetail({ project, isArabic }: ProjectDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Find previous and next projects
  const currentIndex = site.portfolio.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? site.portfolio[currentIndex - 1] : null;
  const nextProject = currentIndex < site.portfolio.length - 1 ? site.portfolio[currentIndex + 1] : null;

  // Check if demo URL is valid (not a placeholder)
  const hasValidDemoUrl = project.demoUrl && 
    project.demoUrl && project.demoUrl !== '/contact' && 
    !project.demoUrl.includes('demo-placeholder') &&
    project.demoUrl !== '#';

  // Determine gallery layout based on number of images
  const galleryImages = project.gallery || [];
  const imageCount = galleryImages.length;
  let galleryGridClass = "grid-cols-1 md:grid-cols-2"; // Default: 2 columns
  
  if (imageCount === 1) {
    galleryGridClass = "grid-cols-1"; // Single image: 1 column (full width)
  } else if (imageCount === 2) {
    galleryGridClass = "grid-cols-1 md:grid-cols-2"; // 2 images: 2 columns
  } else if (imageCount === 3) {
    galleryGridClass = "grid-cols-1 md:grid-cols-3"; // 3 images: 3 columns
  } else if (imageCount >= 4) {
    galleryGridClass = "grid-cols-1 md:grid-cols-2"; // 4+ images: 2 columns
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          <div className="circuit-pattern absolute inset-0 opacity-5" />
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                               linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: '4rem 4rem'
            }}
          />
        </div>

        <motion.div
          style={{ y }}
          className="container relative z-10 mx-auto px-4 text-center py-32"
        >
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>{isArabic ? "العودة إلى المشاريع" : "Back to Projects"}</span>
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-8 py-4 rounded-full bg-primary/20 text-primary border border-primary/40 mb-8 backdrop-blur-sm"
          >
            <span className="font-bold text-lg">
              {isArabic ? project.badge.ar : project.badge.en}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent leading-tight"
          >
            {isArabic ? project.title.ar : project.title.en}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
          >
            {isArabic ? project.summary.ar : project.summary.en}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {hasValidDemoUrl && (
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <span>{isArabic ? "مشاهدة العرض التوضيحي" : "View Demo"}</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              variant={hasValidDemoUrl ? "outline" : "default"}
              className={hasValidDemoUrl ? "border-primary/40 hover:border-primary hover:bg-primary/10 hover:text-primary" : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all"}
            >
              <Link href="/signup">
                {isArabic ? "احصل على هذا المشروع" : "Get This Project"}
              </Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
              <span className="text-xs uppercase tracking-wider">
                {isArabic ? "اسحب لأسفل" : "Scroll"}
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Key Metric Section */}
      <section className="relative py-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 backdrop-blur-sm">
              <Target className="w-6 h-6 text-primary" />
              <p className="text-2xl md:text-3xl font-bold">
                {isArabic ? project.metric.ar : project.metric.en}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="relative py-12 px-4">
        <div className="container relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">
                    {isArabic ? "نظرة تفصيلية" : "The Solution"}
                  </h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    {isArabic ? project.summary.ar : project.summary.en}
                  </p>
                  
                  <div className="my-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {isArabic ? "النتائج الرئيسية" : "Key Outcomes"}
                    </h3>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{isArabic ? project.metric.ar : project.metric.en}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>
                          {isArabic
                            ? "أتمتة كاملة للعمليات المتكررة"
                            : "Full automation of repetitive processes"}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>
                          {isArabic
                            ? "نتائج قابلة للقياس والتوسع"
                            : "Measurable and scalable results"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-base">
                    {isArabic
                      ? "تم بناء هذا الحل باستخدام أحدث تقنيات الذكاء الاصطناعي والأتمتة، مع التركيز على الموثوقية وسهولة الصيانة والقدرة على التوسع. كل مكون تم اختياره بعناية لضمان أفضل أداء ونتائج."
                      : "This solution was built using cutting-edge AI and automation technologies, with a focus on reliability, maintainability, and scalability. Every component was carefully selected to ensure optimal performance and results."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-12 px-4">
        
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {isArabic ? "التقنيات المستخدمة" : "Tech Stack"}
                  </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {project.tags.map((tag, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge
                        className="px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 hover:scale-110 transition-all cursor-default"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="relative py-12 px-4">
          <div className="container relative z-10 mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <ImageIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    {isArabic ? "معرض المشروع" : "Project Gallery"}
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  {isArabic ? "لقطات من المشروع" : "Screenshots from the project"}
                </p>
              </div>

              <div className={`grid ${galleryGridClass} gap-6`}>
                {galleryImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <Image
                          src={img}
                          alt={`${isArabic ? project.title.ar : project.title.en} - Screenshot ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              {isArabic ? "هل أنت مستعد لأتمتة عملك؟" : "Ready to Automate Your Workflow?"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {isArabic
                ? "احجز مكالمة اكتشافية مجانية ودعنا نناقش كيف يمكننا مساعدتك"
                : "Book a free discovery call and let's discuss how we can help you"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Link href="/signup">
                  {isArabic ? "احصل على هذا المشروع" : "Get This Project"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/40 hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href="/signup">
                  {isArabic ? "احجز مكالمة مجانية" : "Book a Free Call"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              {hasValidDemoUrl && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary/40 hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    {isArabic ? "مشاهدة العرض التوضيحي" : "Watch Demo"}
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation to Next/Previous Projects */}
      <section className="relative py-12 px-4 border-t border-primary/20">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Project */}
            {prevProject && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href={prevProject.href}
                  className="group block p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>{isArabic ? "المشروع السابق" : "Previous Project"}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {isArabic ? prevProject.title.ar : prevProject.title.en}
                  </h3>
                </Link>
              </motion.div>
            )}

            {/* Next Project */}
            {nextProject && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={!prevProject ? "md:col-start-2" : ""}
              >
                <Link
                  href={nextProject.href}
                  className="group block p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary/20 text-right"
                >
                  <div className="flex items-center justify-end gap-3 text-sm text-muted-foreground mb-2">
                    <span>{isArabic ? "المشروع التالي" : "Next Project"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {isArabic ? nextProject.title.ar : nextProject.title.en}
                  </h3>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

