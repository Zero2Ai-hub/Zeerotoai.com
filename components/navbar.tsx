"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { LanguageSwitch } from "@/components/language-switch";
// import { ThemeToggle } from "@/components/theme-toggle";
import { CircularGlowingBorder } from "@/components/circular-glowing-border";
import { site } from "@/content/site";
import { Menu, X, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

export function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isArabic = locale === "ar";
  const supabase = createClient();

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push(`/${locale}`);
    router.refresh();
  };

  const getLinkText = (navItem: (typeof site.nav)[number]) => {
    return isArabic ? navItem.ar : navItem.en;
  };

  const isActive = (slug: string) => {
    const cleanPath = pathname.replace(`/${locale}`, "") || "/";
    return cleanPath === slug;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (isActive(slug)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-primary/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-lg shadow-primary/5 relative">
      {/* Bottom cyan glow gradient for blending with hero */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none translate-y-full"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 217, 255, 0.15) 0%, rgba(0, 217, 255, 0.08) 30%, rgba(0, 217, 255, 0.03) 60%, transparent 100%)",
          filter: "blur(8px)"
        }}
      />
      <div className="w-full px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <CircularGlowingBorder className="w-12 h-12">
              <Image
                src="/Logo-2.webp"
                alt={site.brand.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
              />
            </CircularGlowingBorder>
            <span 
              className="text-2xl font-black relative transition-all duration-300 group-hover:scale-110"
              style={{
                color: 'rgb(0, 217, 255)',
                textShadow: '0 0 20px rgba(0, 217, 255, 0.3), 0 0 2px rgba(0, 217, 255, 0.8)',
                letterSpacing: '-0.02em'
              }}
            >
              {/* Background glow */}
              <span 
                className="absolute inset-0 rounded-lg transition-all duration-300 -z-10"
                style={{
                  background: 'rgba(0, 217, 255, 0.08)',
                  filter: 'blur(16px)',
                  transform: 'scale(1.2)',
                }}
              />
              <span 
                className="absolute inset-0 rounded-lg transition-all duration-300 group-hover:opacity-100 opacity-60 -z-10"
                style={{
                  background: 'rgba(0, 217, 255, 0.15)',
                  filter: 'blur(24px)',
                  transform: 'scale(1.4)',
                }}
              />
              {site.brand.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8 absolute left-1/2 -translate-x-1/2">
            {site.nav.map((item) => (
              <Link
                key={item.slug}
                href={item.slug}
                onClick={(e) => handleNavClick(e, item.slug)}
                className={cn(
                  "text-base font-semibold px-3 py-2 rounded-md transition-all hover:text-primary hover:bg-primary/5 whitespace-nowrap",
                  isActive(item.slug)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                )}
              >
                {getLinkText(item)}
              </Link>
            ))}
          </div>

          {/* Auth & CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3 shrink-0">
            {/* <ThemeToggle /> */}
            {/* <LanguageSwitch /> */}
            
            {!loading && (
              <>
                {user ? (
                  // Authenticated: Show Dashboard & Sign Out
                  <>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/dashboard">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleSignOut}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  // Not authenticated: Show Login, Sign Up & Book Call
                  <>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/login">
                        Login
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/signup">
                        Sign Up
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href={site.cta.primary.href}>
                        {isArabic
                          ? site.cta.primary.label.ar
                          : site.cta.primary.label.en}
                      </Link>
                    </Button>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 space-y-3">
            {site.nav.map((item) => (
              <Link
                key={item.slug}
                href={item.slug}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors",
                  isActive(item.slug)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={(e) => handleNavClick(e, item.slug)}
              >
                {getLinkText(item)}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-3 border-t">
              {/* <div className="flex gap-2">
                <ThemeToggle />
                <LanguageSwitch />
              </div> */}
              
              {!loading && (
                <>
                  {user ? (
                    // Authenticated: Show Dashboard & Sign Out
                    <>
                      <Button asChild variant="ghost" className="w-full">
                        <Link href="/dashboard">
                          <User className="h-4 w-4 mr-2" />
                          Dashboard
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleSignOut}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    // Not authenticated: Show Login, Sign Up & Book Call
                    <>
                      <div className="flex gap-2">
                        <Button asChild variant="ghost" className="flex-1">
                          <Link href="/login">
                            Login
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link href="/signup">
                            Sign Up
                          </Link>
                        </Button>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={site.cta.primary.href}>
                          {isArabic
                            ? site.cta.primary.label.ar
                            : site.cta.primary.label.en}
                        </Link>
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

