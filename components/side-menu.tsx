"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  Home, 
  Briefcase, 
  FolderOpen, 
  User, 
  Mail,
  X,
  LogOut,
  LayoutDashboard,
  DollarSign,
  HelpCircle
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

export function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
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
    setIsExpanded(false);
    router.push(`/${locale}`);
    router.refresh();
  };

  const menuItems = [
    { 
      icon: Home, 
      label: { en: "Home", ar: "الرئيسية" }, 
      href: `/${locale}` 
    },
    { 
      icon: Briefcase, 
      label: { en: "Services", ar: "الخدمات" }, 
      href: `/${locale}/services` 
    },
    { 
      icon: FolderOpen, 
      label: { en: "Portfolio", ar: "الأعمال" }, 
      href: `/${locale}/portfolio` 
    },
    { 
      icon: DollarSign, 
      label: { en: "Pricing", ar: "التسعير" }, 
      href: `/${locale}/pricing` 
    },
    { 
      icon: User, 
      label: { en: "About", ar: "من نحن" }, 
      href: `/${locale}/about` 
    },
    { 
      icon: HelpCircle, 
      label: { en: "FAQ", ar: "الأسئلة" }, 
      href: `/${locale}/faq` 
    },
    { 
      icon: Mail, 
      label: { en: "Contact", ar: "تواصل" }, 
      href: `/${locale}/contact` 
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Toggle Button - Fixed Position */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "fixed top-24 z-[90] flex items-center justify-center w-10 h-10 bg-card border-2 border-primary/30 rounded-r-lg shadow-lg hover:border-primary/50 transition-all group",
          isArabic ? "right-0 rounded-r-lg rounded-l-none" : "left-0 rounded-l-lg rounded-r-none"
        )}
        style={{
          [isArabic ? "right" : "left"]: 0,
        }}
        whileHover={{ 
          [isArabic ? "x" : "x"]: isArabic ? -4 : 4,
          boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)"
        }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? (isArabic ? -180 : 180) : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className={cn(
            "h-5 w-5 text-primary",
            isArabic && "rotate-180"
          )} />
        </motion.div>
      </motion.button>

      {/* Side Menu */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ 
                [isArabic ? "right" : "left"]: "-100%",
                opacity: 0 
              }}
              animate={{ 
                [isArabic ? "right" : "left"]: 0,
                opacity: 1 
              }}
              exit={{ 
                [isArabic ? "right" : "left"]: "-100%",
                opacity: 0 
              }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed inset-y-0 w-72 bg-card/95 backdrop-blur-xl border-primary/30 z-[110] shadow-2xl shadow-primary/20",
                isArabic ? "right-0 border-l-2" : "left-0 border-r-2"
              )}
            >
              {/* Glowing edge effect */}
              <div className={cn(
                "absolute top-0 bottom-0 w-0.5 pointer-events-none",
                isArabic ? "left-0" : "right-0"
              )}>
                <motion.div
                  className="absolute top-0 w-full h-32"
                  style={{
                    background: "linear-gradient(180deg, rgba(0, 217, 255, 0.8) 0%, transparent 100%)",
                    filter: "blur(4px)",
                    boxShadow: "0 0 20px rgba(0, 217, 255, 0.8)"
                  }}
                  animate={{
                    y: [0, "calc(100vh - 8rem)"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-primary/20">
                <div className="flex items-center gap-3">
                  <div
                className="h-12 w-12 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,217,255,0.15), rgba(0,217,255,0.05))' }}
              >
                <span style={{ color: 'rgb(0,217,255)', fontSize: '22px', fontWeight: 900, letterSpacing: '-0.05em' }}>Z</span>
              </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {site.brand.name}
                  </span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-primary" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsExpanded(false)}
                    >
                      <motion.div
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative overflow-hidden group",
                          active 
                            ? "bg-primary/10 border-2 border-primary/50 shadow-lg shadow-primary/20" 
                            : "hover:bg-primary/5 border-2 border-transparent hover:border-primary/30"
                        )}
                        whileHover={{ x: isArabic ? -4 : 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Active indicator */}
                        {active && (
                          <motion.div
                            layoutId="activeIndicator"
                            className={cn(
                              "absolute top-0 bottom-0 w-1 bg-primary",
                              isArabic ? "right-0" : "left-0"
                            )}
                            style={{
                              boxShadow: "0 0 10px rgba(0, 217, 255, 0.8)"
                            }}
                          />
                        )}
                        
                        <Icon className={cn(
                          "h-5 w-5 transition-colors",
                          active ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        )} />
                        
                        <span className={cn(
                          "font-medium transition-colors",
                          active ? "text-primary" : "text-foreground group-hover:text-primary"
                        )}>
                          {isArabic ? item.label.ar : item.label.en}
                        </span>
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>

              {/* Auth Buttons */}
              {!loading && (
                <div className="absolute bottom-16 left-0 right-0 px-4 pb-4 border-t border-primary/20 pt-4 bg-gradient-to-t from-background/80">
                  <div className="flex flex-col gap-2">
                    {user ? (
                      // Authenticated: Show Dashboard & Sign Out
                      <>
                        <Button asChild variant="outline" className="w-full">
                          <Link href="/dashboard" onClick={() => setIsExpanded(false)}>
                            <LayoutDashboard className="h-4 w-4 mr-2" />
                            Dashboard
                          </Link>
                        </Button>
                        <Button 
                          variant="secondary" 
                          className="w-full"
                          onClick={handleSignOut}
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                      </>
                    ) : (
                      // Not authenticated: Show Login & Sign Up
                      <>
                        <Button asChild variant="outline" className="w-full">
                          <Link href="/login" onClick={() => setIsExpanded(false)}>
                            Login
                          </Link>
                        </Button>
                        <Button asChild className="w-full">
                          <Link href="/signup" onClick={() => setIsExpanded(false)}>
                            Sign Up
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary/20 bg-gradient-to-t from-background/50">
                <p className="text-xs text-center text-muted-foreground">
                  © 2024 {site.brand.name}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

