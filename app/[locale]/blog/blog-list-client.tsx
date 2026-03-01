"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/content/blog";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogListClientProps {
  posts: BlogPost[];
  isArabic: boolean;
}

export function BlogListClient({ posts, isArabic }: BlogListClientProps) {
  return (
    <div className="relative z-10 pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold mb-6">
            {isArabic ? "المدونة" : "Blog"}
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
            {isArabic ? "رؤى أتمتة الذكاء الاصطناعي" : "AI Automation Insights"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isArabic
              ? "أدلة عملية حول كيفية توفير الشركات 40+ ساعة أسبوعياً باستخدام الأتمتة الذكية"
              : "Practical guides on how businesses save 40+ hours per week with smart automation"}
          </p>
        </motion.div>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <Card className="border-2 border-primary/20 hover:border-primary/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-primary" />
                        {new Date(post.date).toLocaleDateString(isArabic ? "ar-AE" : "en-AE", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        {isArabic ? `${post.readingTime} دقائق` : `${post.readingTime} min read`}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                      {isArabic ? post.title.ar : post.title.en}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {isArabic ? post.excerpt.ar : post.excerpt.en}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        {isArabic ? "اقرأ المزيد" : "Read more"}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
