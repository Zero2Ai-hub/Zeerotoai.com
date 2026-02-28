import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Zeerotoai services and website.",
};

export default async function PrivacyPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link href="/">
              <ArrowLeft className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
              {isArabic ? "العودة إلى الرئيسية" : "Back to Home"}
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-4">
            {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isArabic ? "آخر تحديث: " : "Last updated: "}
            {new Date().toLocaleDateString(isArabic ? "ar-SA" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "1. المعلومات التي نجمعها" : "1. Information We Collect"}
              </h2>
              <p>
                {isArabic
                  ? "نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدماتنا، بما في ذلك عندما تقوم بإنشاء حساب، أو الاتصال بنا، أو استخدام خدمات الأتمتة الخاصة بنا."
                  : "We collect information you provide directly to us when using our services, including when you create an account, contact us, or use our automation services."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "2. كيف نستخدم معلوماتك" : "2. How We Use Your Information"}
              </h2>
              <p>
                {isArabic
                  ? "نستخدم المعلومات التي نجمعها لتوفير وتحسين وتخصيص خدماتنا، والتواصل معك، ومعالجة طلباتك، وإرسال معلومات تقنية وتحديثات."
                  : "We use the information we collect to provide, improve, and personalize our services, communicate with you, process your requests, and send technical information and updates."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "3. مشاركة المعلومات" : "3. Information Sharing"}
              </h2>
              <p>
                {isArabic
                  ? "لن نشارك معلوماتك الشخصية مع أطراف ثالثة إلا بموافقتك، أو عند الضرورة لتقديم خدماتنا، أو كما هو مطلوب بموجب القانون."
                  : "We will not share your personal information with third parties except with your consent, as necessary to provide our services, or as required by law."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "4. أمن البيانات" : "4. Data Security"}
              </h2>
              <p>
                {isArabic
                  ? "نتخذ تدابير معقولة لحماية معلوماتك من الوصول غير المصرح به، والكشف، والتعديل، والتدمير."
                  : "We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "5. حقوقك" : "5. Your Rights"}
              </h2>
              <p>
                {isArabic
                  ? "لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها وحذفها. للاستفسارات المتعلقة بالخصوصية، يرجى الاتصال بنا على hello@zeero2ai.com."
                  : "You have the right to access, correct, and delete your personal information. For privacy inquiries, please contact us at hello@zeero2ai.com."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "6. ملفات تعريف الارتباط" : "6. Cookies"}
              </h2>
              <p>
                {isArabic
                  ? "نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربتك، وتحليل الاستخدام، وتخصيص المحتوى."
                  : "We use cookies and similar technologies to improve your experience, analyze usage, and personalize content."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "7. التغييرات على هذه السياسة" : "7. Changes to This Policy"}
              </h2>
              <p>
                {isArabic
                  ? "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة."
                  : "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "8. اتصل بنا" : "8. Contact Us"}
              </h2>
              <p>
                {isArabic
                  ? "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:"
                  : "If you have any questions about this privacy policy, please contact us at:"}
              </p>
              <p className="mt-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@zeero2ai.com" className="text-primary hover:underline">
                  hello@zeero2ai.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

