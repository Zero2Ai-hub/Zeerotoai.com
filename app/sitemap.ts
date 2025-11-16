import { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.brand.domain;

  // Main routes
  const routes = ['', '/services', '/portfolio', '/about', '/contact', '/legal/privacy', '/legal/terms'];

  const mainPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Portfolio project pages
  const projectPages = site.portfolio.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Combine all pages
  return [...mainPages, ...projectPages];
}

