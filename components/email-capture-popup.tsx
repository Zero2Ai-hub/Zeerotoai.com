"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Sparkles, Gift, Zap } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useLocale } from "next-intl";

export function EmailCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const locale = useLocale();
  const isArabic = locale === "ar";

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("emailPopupShown");
    if (hasSeenPopup) {
      setHasShown(true);
      return;
    }

    // Track mouse movement to detect exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("emailPopupShown", "true");
      }
    };

    // Also show after 30 seconds if user hasn't left yet
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("emailPopupShown", "true");
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabase = createClient();
      
      // Store email in Supabase
      const { error } = await supabase
        .from("email_subscribers")
        .insert([
          {
            email: email.toLowerCase().trim(),
            name: name.trim() || null,
            source: "exit_intent_popup",
            subscribed_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        console.error("Error saving email:", error);
        // If duplicate email, still show success (user already subscribed)
        if (error.code === "23505") {
          setIsSubmitted(true);
        } else {
          alert(isArabic ? "حدث خطأ. الرجاء المحاولة مرة أخرى." : "Something went wrong. Please try again.");
        }
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(isArabic ? "حدث خطأ. الرجاء المحاولة مرة أخرى." : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Simplified for performance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 z-[999] cursor-pointer"
          />

          {/* Popup - Optimized animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none"
          >
            <Card className="relative w-full max-w-lg border-2 border-primary/40 bg-card shadow-lg pointer-events-auto overflow-hidden">
              {/* Gradient overlay - Behind content */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-50 z-0" />

              {/* Close button - Fixed z-index to be on top */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
                type="button"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>

              <CardContent className="relative z-10 p-8 md:p-12">
                {!isSubmitted ? (
                  <>
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/40">
                      <Gift className="w-8 h-8 text-background" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {isArabic ? "انتظر! لا تفوت هذا" : "Wait! Don't Miss This"}
                    </h2>

                    {/* Description */}
                    <p className="text-center text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
                      {isArabic
                        ? "احصل على دليل الأتمتة المجاني الخاص بنا + 5 قوالب سير عمل جاهزة للاستخدام توفر 10+ ساعات في الأسبوع"
                        : "Get our free Automation Playbook + 5 ready-to-use workflow templates that save 10+ hours/week"}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      {[
                        { en: "15 proven automation ideas", ar: "15 فكرة أتمتة مثبتة" },
                        { en: "ROI calculator spreadsheet", ar: "جدول حساب عائد الاستثمار" },
                        { en: "Priority access to new templates", ar: "وصول مبكر للقوالب الجديدة" },
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/80">
                            {isArabic ? benefit.ar : benefit.en}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="text"
                        placeholder={isArabic ? "اسمك (اختياري)" : "Your name (optional)"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-primary/30 focus:border-primary bg-background/50"
                      />
                      <Input
                        type="email"
                        placeholder={isArabic ? "بريدك الإلكتروني" : "Your email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-primary/30 focus:border-primary bg-background/50"
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40 text-lg py-6"
                        size="lg"
                      >
                        {isSubmitting
                          ? (isArabic ? "جاري الإرسال..." : "Sending...")
                          : (isArabic ? "احصل على الدليل المجاني" : "Get Free Playbook")
                        }
                      </Button>
                    </form>

                    {/* Trust */}
                    <p className="text-xs text-center text-muted-foreground mt-6">
                      {isArabic
                        ? "🔒 لن نرسل رسائل غير مرغوب فيها. يمكنك إلغاء الاشتراك في أي وقت."
                        : "🔒 No spam. Unsubscribe anytime. Your data is secure."}
                    </p>
                  </>
                ) : (
                  <>
                    {/* Success state */}
                    <div className="text-center py-8">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                        <Sparkles className="w-10 h-10 text-primary" />
                      </div>
                      <h2 className="text-3xl font-black mb-4">
                        {isArabic ? "🎉 رائع! تحقق من بريدك الإلكتروني" : "🎉 Awesome! Check Your Email"}
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        {isArabic
                          ? "لقد أرسلنا لك دليل الأتمتة + القوالب. إذا لم تره، تحقق من البريد العشوائي."
                          : "We've sent you the Automation Playbook + templates. If you don't see it, check your spam folder."}
                      </p>
                      <Button
                        onClick={handleClose}
                        variant="outline"
                        className="border-primary/40 hover:border-primary hover:bg-primary/10"
                      >
                        {isArabic ? "إغلاق" : "Close"}
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

