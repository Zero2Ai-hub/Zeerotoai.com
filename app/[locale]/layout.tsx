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
    default: site.brand.name,
    template: "%s | Zeerotoai",
  },
  description:
    "We build governed AI systems for UAE & GCC businesses that replace expensive SaaS stacks — owned by you, live in weeks.",
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
  verification: {
    other: {
      "tiktok-developers-site-verification": "Gll3Yhx07amARhGgiLlY0JzandqvbMPD",
    },
  },
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
    title: `${site.brand.name} - AI Systems That Replace Your SaaS Stack — Built for UAE & GCC Businesses.`,
    description:
      "We build governed AI systems for UAE & GCC businesses that replace expensive SaaS stacks — owned by you, live in weeks.",
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
    title: `${site.brand.name} - AI Systems That Replace Your SaaS Stack — Built for UAE & GCC Businesses.`,
    description:
      "We build governed AI systems for UAE & GCC businesses that replace expensive SaaS stacks — owned by you, live in weeks.",
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
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": site.brand.name,
    "url": site.brand.domain,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${site.brand.domain}/en/portfolio?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation Consulting",
    "provider": { "@type": "Organization", "name": site.brand.name, "url": site.brand.domain },
    "areaServed": ["AE", "SA", "QA", "KW", "BH", "OM", "EG"],
    "description": "Custom AI automation systems for UAE and GCC businesses — replacing manual workflows, SaaS stacks, and repetitive ops with governed AI agents.",
    "offers": [
      { "@type": "Offer", "name": "Starter Automation", "priceCurrency": "AED", "price": "3000", "description": "Single workflow automation — deployed in 2 weeks." },
      { "@type": "Offer", "name": "Growth Stack", "priceCurrency": "AED", "price": "8000", "description": "Full operations automation stack — custom built and owned by you." },
      { "@type": "Offer", "name": "Enterprise", "priceCurrency": "AED", "price": "0", "description": "Custom scope, custom pricing. Book a free strategy call." }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How long does it take to deploy an AI automation system?", "acceptedAnswer": { "@type": "Answer", "text": "Most projects go live in 2 weeks. Complex multi-system integrations take 4-6 weeks. We always set a clear deadline before starting." } },
      { "@type": "Question", "name": "Do I own the system you build?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100%. You own the code, the workflows, and the infrastructure. No monthly licensing fees, no vendor lock-in." } },
      { "@type": "Question", "name": "What businesses do you work with in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "E-commerce brands, service businesses, agencies, real estate, and any SMB currently paying for 3+ SaaS tools that AI can replace." } },
      { "@type": "Question", "name": "Do you support Arabic workflows?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All our systems are bilingual (Arabic/English) by default. We understand GCC compliance, WhatsApp-first communication, and local payment rails." } },
      { "@type": "Question", "name": "How is this different from hiring a developer?", "acceptedAnswer": { "@type": "Answer", "text": "We build AI systems with governed autonomy — audit logs, rejection logging, and guardrails. You get a system that works without babysitting, not just code that needs maintenance." } }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.brand.name,
    "description": "AI Automation Solutions - We build governed AI systems for UAE & GCC businesses that replace expensive SaaS stacks — owned by you, live in weeks.",
    "url": site.brand.domain,
    "logo": `${site.brand.domain}/Logo-2.png`,
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
      "Business Process Automation",
      "UAE AI Automation",
      "GCC Digital Transformation",
      "MCP Protocol",
      "OpenClaw"
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
        <meta name="tiktok-developers-site-verification" content="Gll3Yhx07amARhGgiLlY0JzandqvbMPD" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        
        {/* DNS Prefetch for faster resource loading (GLOBAL) */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

