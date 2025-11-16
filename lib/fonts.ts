import { Inter, IBM_Plex_Sans_Arabic, Space_Grotesk } from 'next/font/google';

// Modern geometric sans-serif for headings
export const inter = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

// Using Google Fonts for Arabic - no local files needed!
export const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});

