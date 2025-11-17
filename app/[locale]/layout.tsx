import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/routing';
import { ThemeProvider } from '@/components/theme-provider';
import { SideMenu } from '@/components/side-menu';
import { ScrollToTop } from '@/components/scroll-to-top';
import { EmailCapturePopup } from '@/components/email-capture-popup';
import { Analytics } from '@vercel/analytics/react';
import { inter, ibmPlexArabic } from '@/lib/fonts';
import { site } from '@/content/site';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.domain),
  title: {
    default: "ZeroToAI",
    template: "%s | ZeroToAI",
  },
  description:
    "We design and deploy AI-powered workflows that save hours, eliminate busywork, and unlock growth. Expert automation with n8n, Voiceflow, Make.com, and more.",
  keywords: [
    "AI automation",
    "workflow automation",
    "n8n",
    "Voiceflow",
    "chatbots",
    "AI agents",
    "business automation",
    "no-code automation",
  ],
  authors: [{ name: site.brand.name }],
  creator: site.brand.name,
  alternates: {
    canonical: site.brand.domain,
    languages: {
      'en': `${site.brand.domain}/en`,
      'ar': `${site.brand.domain}/ar`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: site.brand.domain,
    title: `${site.brand.name} - Build clever automations. Ship faster.`,
    description:
      "We design and deploy AI-powered workflows that save hours, eliminate busywork, and unlock growth.",
    siteName: site.brand.name,
    images: [
      {
        url: "/brand-banner.png",
        width: 1200,
        height: 630,
        alt: site.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand.name} - Build clever automations. Ship faster.`,
    description:
      "We design and deploy AI-powered workflows that save hours, eliminate busywork, and unlock growth.",
    images: ["/brand-banner.png"],
      creator: "@zero2ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();
  
  const isArabic = locale === 'ar';

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.brand.name,
    "description": "AI Automation Solutions - We design and deploy AI-powered workflows that save hours, eliminate busywork, and unlock growth.",
    "url": site.brand.domain,
    "logo": `${site.brand.domain}/Logo-2.webp`,
    "email": site.brand.email,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971503385859",
      "contactType": "Customer Service",
      "email": site.brand.email,
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      site.socials.x,
      site.socials.linkedin,
      site.socials.youtube
    ],
    "areaServed": "Worldwide",
    "knowsAbout": [
      "AI Automation",
      "Workflow Automation",
      "Chatbot Development",
      "n8n",
      "Voiceflow",
      "Make.com",
      "Business Process Automation"
    ]
  };

  return (
    <html
      lang={locale}
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${ibmPlexArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicon - Explicit links for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        
        {/* DNS Prefetch for faster resource loading (GLOBAL) */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages} locale={locale}>
              <SideMenu />
              <ScrollToTop />
              <EmailCapturePopup />
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

