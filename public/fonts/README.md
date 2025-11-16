# Arabic Fonts

Place IBM Plex Sans Arabic font files here for proper Arabic text rendering.

## Required Files

- IBMPlexSansArabic-Regular.woff2
- IBMPlexSansArabic-Medium.woff2
- IBMPlexSansArabic-SemiBold.woff2
- IBMPlexSansArabic-Bold.woff2

## Download

1. Go to: https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic
2. Click "Download family"
3. Convert TTF to WOFF2 using: https://cloudconvert.com/ttf-to-woff2
4. Place files in this folder

## Why WOFF2?

WOFF2 provides:
- Better compression (30% smaller than WOFF)
- Faster load times
- Better browser support
- Optimal web performance

## Alternative: Use CDN

If you prefer not to self-host fonts, you can update `lib/fonts.ts` to use Google Fonts CDN instead. However, self-hosting is recommended for:
- Better performance
- Privacy compliance
- No external dependencies

