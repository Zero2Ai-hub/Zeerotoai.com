import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogListClient } from "./blog-list-client";
import { blogPosts } from "@/content/blog";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog — AI Automation Insights | Zeerotoai",
  description: "Practical guides on AI automation, e-commerce operations, and how UAE businesses are saving 40+ hours per week.",
  alternates: {
    canonical: `${site.brand.domain}/blog`,
  },
};

export default async function BlogPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <BlogListClient posts={blogPosts} isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}
