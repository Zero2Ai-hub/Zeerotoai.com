import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Zero2AI services.",
};

export default async function TermsPage() {
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
            {isArabic ? "شروط الخدمة" : "Terms of Service"}
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
                {isArabic ? "1. قبول الشروط" : "1. Acceptance of Terms"}
              </h2>
              <p>
                {isArabic
                  ? "من خلال الوصول إلى واستخدام خدمات Zero2AI، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا."
                  : "By accessing and using Zero2AI services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "2. وصف الخدمات" : "2. Description of Services"}
              </h2>
              <p>
                {isArabic
                  ? "تقدم Zero2AI خدمات أتمتة الذكاء الاصطناعي بما في ذلك على سبيل المثال لا الحصر: أتمتة توليد العملاء المحتملين، وروبوتات الدردشة الذكية، وسير العمل الوكيل، وأتمتة الفيديو، وخطوط أنابيب البيانات، والتكاملات."
                  : "Zero2AI provides AI automation services including but not limited to: lead generation automation, AI chatbots, agentic workflows, video automation, data pipelines, and integrations."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "3. مسؤوليات المستخدم" : "3. User Responsibilities"}
              </h2>
              <p>
                {isArabic
                  ? "أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك، وجميع الأنشطة التي تحدث في حسابك، واستخدام خدماتنا بطريقة قانونية وأخلاقية."
                  : "You are responsible for maintaining the confidentiality of your account credentials, all activities that occur under your account, and using our services in a lawful and ethical manner."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "4. الملكية الفكرية" : "4. Intellectual Property"}
              </h2>
              <p>
                {isArabic
                  ? "جميع حقوق الملكية الفكرية في خدماتنا ومحتواها محفوظة لـ Zero2AI. لا يجوز لك نسخ أو تعديل أو توزيع أو بيع أي جزء من خدماتنا دون إذن كتابي صريح."
                  : "All intellectual property rights in our services and content are reserved by Zero2AI. You may not copy, modify, distribute, or sell any part of our services without explicit written permission."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "5. الدفع والفواتير" : "5. Payment and Billing"}
              </h2>
              <p>
                {isArabic
                  ? "ستتم مناقشة شروط الدفع والفواتير في العقود الفردية مع كل عميل. يتم تحديد جميع الرسوم وشروط الدفع في عقد الخدمة."
                  : "Payment and billing terms will be discussed in individual contracts with each client. All fees and payment terms are specified in the service agreement."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "6. الضمانات وإخلاء المسؤولية" : "6. Warranties and Disclaimers"}
              </h2>
              <p>
                {isArabic
                  ? "نبذل قصارى جهدنا لتقديم خدمات عالية الجودة، لكن خدماتنا يتم توفيرها 'كما هي' دون ضمانات من أي نوع. لا نضمن أن خدماتنا ستكون خالية من الأخطاء أو دون انقطاع."
                  : "We strive to provide high-quality services, but our services are provided 'as is' without warranties of any kind. We do not guarantee that our services will be error-free or uninterrupted."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "7. تحديد المسؤولية" : "7. Limitation of Liability"}
              </h2>
              <p>
                {isArabic
                  ? "لن تكون Zero2AI مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام خدماتنا."
                  : "Zero2AI shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "8. الإنهاء" : "8. Termination"}
              </h2>
              <p>
                {isArabic
                  ? "نحتفظ بالحق في تعليق أو إنهاء وصولك إلى خدماتنا في أي وقت ولأي سبب، دون إشعار مسبق."
                  : "We reserve the right to suspend or terminate your access to our services at any time, for any reason, without prior notice."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "9. التغييرات على الشروط" : "9. Changes to Terms"}
              </h2>
              <p>
                {isArabic
                  ? "قد نقوم بتحديث شروط الخدمة هذه من وقت لآخر. سيكون استمرارك في استخدام خدماتنا بعد هذه التغييرات يشكل موافقتك على الشروط الجديدة."
                  : "We may update these Terms of Service from time to time. Your continued use of our services after such changes constitutes your acceptance of the new terms."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "10. القانون الحاكم" : "10. Governing Law"}
              </h2>
              <p>
                {isArabic
                  ? "تخضع شروط الخدمة هذه وتفسر وفقًا لقوانين [الولاية القضائية]، دون النظر إلى مبادئ تنازع القوانين."
                  : "These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles."}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {isArabic ? "11. اتصل بنا" : "11. Contact Us"}
              </h2>
              <p>
                {isArabic
                  ? "إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على:"
                  : "If you have any questions about these Terms of Service, please contact us at:"}
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

