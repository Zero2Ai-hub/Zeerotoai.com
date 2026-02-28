import { getLocale } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
import { notFound } from "next/navigation";
import { ProjectDetail } from "./project-detail";

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return site.portfolio.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = site.portfolio.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Zeerotoai",
    };
  }

  return {
    title: `${project.title.en} | Zeerotoai Portfolio`,
    description: project.summary.en,
    alternates: {
      canonical: `${site.brand.domain}/portfolio/${slug}`,
      languages: {
        'en': `${site.brand.domain}/en/portfolio/${slug}`,
        'ar': `${site.brand.domain}/ar/portfolio/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const project = site.portfolio.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ProjectDetail project={project} isArabic={isArabic} />
      <Footer />
    </>
  );
}

