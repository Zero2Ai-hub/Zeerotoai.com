import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './lib/routing';
import { updateSession } from './lib/supabase/middleware';
import { type NextRequest } from 'next/server';

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  // First, handle i18n
  const response = intlMiddleware(request);
  
  // Then, handle Supabase auth with the i18n response
  return await updateSession(request, response);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    // - … tiktok verification files
    '/((?!api|_next|_vercel|tiktok-developers-site-verification|.*\\..*).*)'
  ],
};
