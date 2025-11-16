"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  isArabic: boolean;
}

export function ContactForm({ isArabic }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        // Handle rate limiting (429) specifically
        if (response.status === 429) {
          const data = await response.json();
          console.error("Rate limit exceeded:", data);
          alert("Too many requests. Please try again later.");
        }
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">
            {isArabic ? "اسمك" : "Your Name"} *
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder={isArabic ? "أحمد محمد" : "John Doe"}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            {isArabic ? "عنوان البريد الإلكتروني" : "Email Address"} *
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder={isArabic ? "ahmad@example.com" : "john@example.com"}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company">
            {isArabic ? "الشركة (اختياري)" : "Company (Optional)"}
          </Label>
          <Input
            id="company"
            {...register("company")}
            placeholder={isArabic ? "شركتك" : "Your Company"}
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">
            {isArabic ? "أخبرنا عن مشروعك" : "Tell us about your project"} *
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            rows={6}
            placeholder={
              isArabic
                ? "أخبرنا عن احتياجات الأتمتة الخاصة بك..."
                : "Tell us about your automation needs..."
            }
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting
            ? isArabic
              ? "جاري الإرسال..."
              : "Sending..."
            : isArabic
            ? "إرسال الرسالة"
            : "Send Message"}
        </Button>
      </form>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800">
          <p className="text-green-800 dark:text-green-200 text-sm">
            {isArabic
              ? "تم إرسال الرسالة! سنعود إليك خلال 24 ساعة."
              : "Message sent! We'll get back to you within 24 hours."}
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800">
          <p className="text-red-800 dark:text-red-200 text-sm">
            {isArabic
              ? "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة."
              : "Something went wrong. Please try again or email us directly."}
          </p>
        </div>
      )}
    </div>
  );
}

