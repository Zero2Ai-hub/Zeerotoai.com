import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogPostClient } from "./blog-post-client";
import { blogPosts } from "@/content/blog";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { site } from "@/content/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title.en} | Zeerotoai Blog`,
    description: post.excerpt.en,
    alternates: { canonical: `${site.brand.domain}/blog/${slug}` },
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <BlogPostClient post={post} isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}
