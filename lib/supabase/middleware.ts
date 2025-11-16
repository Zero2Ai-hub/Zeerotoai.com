import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(
  request: NextRequest, 
  response: NextResponse = NextResponse.next({ request })
) {
  let supabaseResponse = response

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refreshing the auth token
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protected routes - redirect to login if not authenticated
  // Check for locale-prefixed paths (e.g., /en/dashboard, /ar/dashboard)
  if (!user && (
    request.nextUrl.pathname.match(/^\/(en|ar)\/dashboard/) ||
    request.nextUrl.pathname.match(/^\/(en|ar)\/profile/)
  )) {
    const url = request.nextUrl.clone()
    const locale = request.nextUrl.pathname.split('/')[1] // Extract locale (en or ar)
    url.pathname = `/${locale}/login`
    url.searchParams.set('redirectTo', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users away from auth pages
  if (user && (
    request.nextUrl.pathname.match(/^\/(en|ar)\/login$/) ||
    request.nextUrl.pathname.match(/^\/(en|ar)\/signup$/)
  )) {
    const url = request.nextUrl.clone()
    const locale = request.nextUrl.pathname.split('/')[1] // Extract locale (en or ar)
    url.pathname = `/${locale}/dashboard`
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

