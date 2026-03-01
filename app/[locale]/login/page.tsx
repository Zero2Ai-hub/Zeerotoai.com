"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { site } from "@/content/site";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      router.push(redirectTo);
      router.refresh();
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-20 px-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.05) 0%, transparent 50%)"
          }}
        />

        <div className="w-full max-w-md relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex flex-col items-center gap-3 group">
              <Image
                src="/Logo-2.png"
                alt={site.brand.name}
                width={60}
                height={60}
                className="h-15 w-15 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary/70 group-hover:scale-105 transition-all"
              />
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
          </div>

          {/* Login Card */}
          <div className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 rounded-lg p-8 shadow-xl shadow-primary/10">
            <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
            <p className="text-muted-foreground text-center mb-8">
              Sign in to your account to continue
            </p>

            {error && (
              <div className="bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-primary/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-primary/30 focus:border-primary pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline font-semibold">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

