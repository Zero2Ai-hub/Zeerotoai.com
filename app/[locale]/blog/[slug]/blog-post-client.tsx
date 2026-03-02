"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/content/blog";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPostClientProps {
  post: BlogPost;
  isArabic: boolean;
}

// Minimal markdown renderer (bold, headers, lists, hr, links)
function renderContent(md: string): React.ReactNode[] {
  const blocks = md.split("\n\n");
  return blocks.map((block, i) => {
    if (block.startsWith("---")) {
      return <hr key={i} className="border-primary/20 my-8" />;
    }
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-black text-foreground mt-10 mb-4">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("# ")) {
      return (
        <h1 key={i} className="text-3xl font-black text-foreground mt-10 mb-4">
          {block.slice(2)}
        </h1>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="list-none space-y-2 mb-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">▸</span>
              <span dangerouslySetInnerHTML={{ __html: parseInline(item.slice(2)) }} />
            </li>
          ))}
        </ul>
      );
    }
    // Paragraph
    return (
      <p key={i} className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: parseInline(block) }} />
    );
  });
}

function parseInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-primary/10 text-primary px-1 rounded text-sm">$1</code>');
}

export function BlogPostClient({ post, isArabic }: BlogPostClientProps) {
  const title = isArabic ? post.title.ar : post.title.en;
  const excerpt = isArabic ? post.excerpt.ar : post.excerpt.en;

  return (
    <div className="relative z-10 pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {isArabic ? "العودة إلى المدونة" : "Back to Blog"}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">{excerpt}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-primary/20 pt-4">
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
              {isArabic ? `${post.readingTime} دقائق قراءة` : `${post.readingTime} min read`}
            </span>
            <span className="text-muted-foreground/50">Zeerotoai</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose-custom"
        >
          {renderContent(post.content.en)}
        </motion.article>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center"
        >
          <h3 className="text-2xl font-black text-foreground mb-3">
            {isArabic ? "اعرف أتمتتك الأعلى عائداً" : "Find your highest-ROI automation"}
          </h3>
          <p className="text-muted-foreground mb-6">
            {isArabic
              ? "جلسة مجانية مدتها 30 دقيقة. نحدد أكثر عملية تستنزف وقتك — وكيف نؤتمتها خلال 30 يوماً."
              : "Free 30-minute session. We identify the task draining your team most — and how to automate it in 30 days."}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all"
          >
            <Link href="/book">
              {isArabic ? "احجز تدقيق مجاني →" : "Book a Free Audit →"}
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
