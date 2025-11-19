import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Gift, FileText, Inbox, Sparkles, ArrowRight, User, Mail, Crown, Hash, Image as ImageIcon, Target, Zap, MessageSquare, Database, Plug, Video, Bot } from "lucide-react";
import { getLocale } from "next-intl/server";
import { RequestWorkflowForm } from "./request-workflow-form";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getTotalUserCount } from "@/lib/supabase/admin-functions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const userName = user.user_metadata?.full_name || "User";
  const userEmail = user.email || "";
  
  // Get real member count from Supabase Edge Function
  const totalUsers = await getTotalUserCount();
  
  // Calculate member since date
  const memberSince = new Date(user.created_at);
  
  // User type (from metadata or default to free)
  const userType = user.user_metadata?.subscription_tier || "free";

  // Quick jump navigation items
  const navItems = [
    { id: "profile", icon: User, label: isArabic ? "الملف الشخصي" : "Profile" },
    { id: "requests", icon: Inbox, label: isArabic ? "الطلبات" : "Requests" },
    { id: "resources", icon: Gift, label: isArabic ? "الموارد" : "Resources" },
    { id: "workflow-form", icon: FileText, label: isArabic ? "طلب جديد" : "New Request" },
    { id: "booking", icon: Calendar, label: isArabic ? "احجز مكالمة" : "Book Call" },
    { id: "newsletter", icon: Mail, label: isArabic ? "النشرة الإخبارية" : "Newsletter" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 px-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        {/* Quick Jump Navigation */}
        <nav className="fixed left-8 top-1/3 z-40 hidden xl:block">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isFormIcon = item.id === "workflow-form";
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group flex items-center justify-center p-3 rounded-lg backdrop-blur-sm border transition-all w-12 hover:w-auto hover:justify-start hover:gap-3 relative ${
                    isFormIcon 
                      ? "bg-gradient-to-br from-primary/30 to-primary/20 border-primary/60 hover:border-primary shadow-lg shadow-primary/30 animate-pulse" 
                      : "bg-card/50 border-primary/20 hover:border-primary/50 hover:bg-card/80"
                  }`}
                >
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <item.icon className={`${isFormIcon ? "w-6 h-6" : "w-5 h-5"} text-primary`} />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-300 overflow-hidden">
                    {item.label}
                  </span>
                  {isFormIcon && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-background shadow-lg">
                      ✨
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header - Redesigned */}
          <div className="text-center mb-12">
            <Badge className="mb-4 px-8 py-3 text-lg font-bold bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 border-2 border-primary/50 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-2 inline" />
              {isArabic ? "جاهز لأتمتة عملك؟" : "Ready to Automate Your Business?"}
              <Sparkles className="w-5 h-5 ml-2 inline" />
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {isArabic ? `مرحبًا، ${userName}!` : `Welcome back, ${userName}!`}
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="space-y-8">
            {/* Row 1: Profile Info + Your Requests */}
            <div id="profile" className="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-mt-24">
              {/* Profile Info Card */}
              <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40">
                      <User className="w-7 h-7 text-background" />
                    </div>
                    <CardTitle className="text-2xl">
                      {isArabic ? "معلوماتك الشخصية" : "Your Profile"}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  {/* Avatar placeholder */}
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center border-4 border-primary/30">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  
                  {/* User details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {isArabic ? "الاسم" : "Name"}
                      </span>
                      <span className="font-medium">{userName}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {isArabic ? "البريد الإلكتروني" : "Email"}
                      </span>
                      <span className="font-medium text-sm">{userEmail}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Hash className="w-4 h-4" />
                        {isArabic ? "رقم العضو" : "Member"}
                      </span>
                      <Badge variant="secondary" className="font-bold">
                        {totalUsers}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Crown className="w-4 h-4" />
                        {isArabic ? "نوع العضوية" : "Subscription"}
                      </span>
                      <Badge 
                        variant="outline"
                        className={`font-bold border-2 ${
                          userType === 'premium' || userType === 'enterprise' 
                            ? 'border-amber-500 text-amber-400'
                            : 'border-primary text-primary'
                        }`}
                      >
                        {userType.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {isArabic ? "عضو منذ" : "Member Since"}
                      </span>
                      <span className="font-medium text-sm">
                        {memberSince.toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Profile actions */}
                  <div className="pt-4 border-t border-primary/20">
                    <Button variant="outline" className="w-full flex items-center justify-center" disabled>
                      <ImageIcon className="mr-2 h-4 w-4" />
                      {isArabic ? "تحديث الصورة الشخصية (قريبًا)" : "Upload Profile Picture (Coming Soon)"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Your Requests */}
              <Card id="requests" className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden relative flex flex-col scroll-mt-24">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40">
                      <Inbox className="w-7 h-7 text-background" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        {isArabic ? "طلباتك" : "Your Requests"}
                      </CardTitle>
                      <CardDescription>
                        {isArabic ? "تتبع طلبات سير العمل الخاصة بك" : "Track your workflow requests"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 flex-1 flex flex-col">
                  <div className="flex flex-col items-center justify-center py-12 text-center flex-1">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Inbox className="w-10 h-10 text-primary/50" />
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {isArabic ? "لا توجد طلبات بعد" : "No requests yet"}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {isArabic 
                        ? "عندما تقوم بإرسال طلب سير عمل، سيظهر هنا"
                        : "When you submit a workflow request, it will appear here"}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="text-xs" asChild>
                      <a href="#workflow-form" className="flex items-center justify-center">
                        {isArabic ? "إنشاء طلبك الأول" : "Create Your First Request"}
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>

                  <div className="border-t border-primary/20 pt-6 mt-auto">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {isArabic ? "وقت الاستجابة المتوقع" : "Expected Response Time"}
                      </span>
                      <span className="font-medium text-primary">
                        {isArabic ? "خلال 48 ساعة" : "Within 48 hours"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Row 2: Free Resources - Full Width */}
            <Card id="resources" className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-card/80 backdrop-blur-sm overflow-hidden relative scroll-mt-24">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <CardHeader className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40">
                      <Gift className="w-7 h-7 text-background" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-amber-500/20 text-amber-300 border-amber-500/40">
                        <Crown className="w-4 h-4 mr-1" />
                        {isArabic ? "عرض حصري!" : "Exclusive Offer!"}
                      </Badge>
                      <CardTitle className="text-2xl">
                        {isArabic ? "🎁 موارد مجانية - عرض محدود" : "🎁 Free Resources - Limited Offer"}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {isArabic 
                          ? "أول 25 عضو يحصلون على جميع الموارد مجانًا!"
                          : "First 25 members get all resources absolutely FREE!"}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent">
                      {totalUsers}/25
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {isArabic ? "أنت واحد من أوائل الأعضاء!" : "You're an early member!"}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: Target, text: isArabic ? "قوالب سير عمل n8n" : "n8n Workflow Templates", desc: isArabic ? "+5 قوالب" : "5+ templates" },
                    { icon: Zap, text: isArabic ? "مخططات Make.com" : "Make.com Blueprints", desc: isArabic ? "+5 مخططات" : "5+ blueprints" },
                    { icon: FileText, text: isArabic ? "قالب Notion لبدء الوكالة" : "Agency Starter Notion Template", desc: isArabic ? "نظام شامل" : "Complete system" },
                    { icon: Mail, text: isArabic ? "نشرة إخبارية بالذكاء الاصطناعي" : "AI Newsletter", desc: isArabic ? "أسبوعيًا" : "Weekly insights" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-colors text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 mx-auto">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{item.text}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <form action="https://forms.gle/your-google-form-id" method="post" target="_blank">
                  <Button className="w-full group flex items-center justify-center" size="lg">
                    <Sparkles className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      {isArabic ? "انضم إلى قائمة الانتظار - احصل على إشعار عند الإطلاق!" : "Join Waitlist - Get Notified When We Launch!"}
                    </span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </form>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  {isArabic 
                    ? "🚀 الإطلاق في ديسمبر 2025 - سنرسل لك بريدًا إلكترونيًا بمجرد توفرها!"
                    : "🚀 Launching December 2025 - we'll email you as soon as they're ready!"}
                </p>
              </CardContent>
            </Card>

            {/* Row 3: Form + Calendly Side by Side */}
            <div id="workflow-form" className="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-mt-24">
              {/* Request a Workflow Form */}
              <div>
                <RequestWorkflowForm 
                  userEmail={userEmail} 
                  userName={userName}
                  isArabic={isArabic}
                />
              </div>

                  {/* Calendly Section */}
                  <Card id="booking" className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden relative scroll-mt-24">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40">
                      <Calendar className="w-7 h-7 text-background" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        {isArabic ? "احجز مكالمة استراتيجية مجانية" : "Book Your Free Strategy Call"}
                      </CardTitle>
                      <CardDescription>
                        {isArabic 
                          ? "دعنا نناقش أهداف الأتمتة الخاصة بك - بدون التزام"
                          : "Let's discuss your automation goals - no commitment required"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="bg-background/50 rounded-lg border border-primary/20 overflow-hidden" style={{ height: "600px" }}>
                    <iframe
                      src="https://calendly.com/zeero-to-ai/website"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      title={isArabic ? "احجز مكالمة" : "Book a Call"}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    {isArabic 
                      ? "💡 نصيحة: املأ نموذج الطلب قبل المكالمة حتى نكون مستعدين بشكل أفضل!"
                      : "💡 Tip: Fill out the request form before the call so we're better prepared!"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Row 4: AI Newsletter - Coming Soon */}
            <Card id="newsletter" className="border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-primary/5 to-card/80 backdrop-blur-sm overflow-hidden relative group hover:border-amber-500/50 transition-all scroll-mt-24">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
              
              <CardContent className="relative z-10 py-12">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Suspenseful badge */}
                  <Badge className="mb-6 px-6 py-2 text-sm font-bold bg-gradient-to-r from-amber-900/80 via-amber-800/90 to-amber-900/80 border-2 border-amber-500/60 backdrop-blur-sm animate-pulse shadow-lg shadow-amber-500/20">
                    <Sparkles className="w-4 h-4 mr-2 inline animate-spin text-amber-300" style={{ animationDuration: '3s' }} />
                    <span className="text-amber-300">{isArabic ? "قريبًا جدًا..." : "Coming Very Soon..."}</span>
                    <Sparkles className="w-4 h-4 ml-2 inline animate-spin text-amber-300" style={{ animationDuration: '3s' }} />
                  </Badge>

                  {/* Main title */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/30 to-amber-600/30 flex items-center justify-center shadow-lg shadow-amber-500/30 border-2 border-amber-500/40">
                      <Mail className="w-8 h-8 text-amber-300" />
                    </div>
                    <h3 className="text-4xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-primary bg-clip-text text-transparent">
                      {isArabic ? "نشرة Zero2AI" : "Zero2AI Newsletter"}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    {isArabic 
                      ? "احصل على أحدث اتجاهات الذكاء الاصطناعي، قوالب الأتمتة الحصرية، ونصائح الخبراء يتم إرسالها مباشرة إلى صندوق بريدك الإلكتروني كل أسبوع."
                      : "Get the latest AI trends, exclusive automation templates, and expert tips delivered straight to your inbox every week."}
                  </p>

                  {/* Features grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                      { 
                        icon: Zap, 
                        title: isArabic ? "رؤى أسبوعية" : "Weekly Insights",
                        desc: isArabic ? "اتجاهات وأخبار الذكاء الاصطناعي" : "AI trends & news"
                      },
                      { 
                        icon: Gift, 
                        title: isArabic ? "قوالب حصرية" : "Exclusive Templates",
                        desc: isArabic ? "أتمتة جاهزة للاستخدام" : "Ready-to-use automations"
                      },
                      { 
                        icon: Target, 
                        title: isArabic ? "نصائح الخبراء" : "Expert Tips",
                        desc: isArabic ? "دروس وأفضل الممارسات" : "Tutorials & best practices"
                      },
                    ].map((feature, index) => (
                      <div 
                        key={index} 
                        className="p-4 rounded-xl bg-background/50 border border-amber-500/20 hover:border-amber-500/40 transition-all hover:scale-105"
                      >
                        <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 mx-auto">
                          <feature.icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col items-center gap-4">
                    <Button 
                      size="lg" 
                      className="px-8 py-6 text-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-2 border-amber-400/50 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 transition-all hover:scale-105 flex items-center justify-center"
                      disabled
                    >
                      <Mail className="mr-3 h-6 w-6" />
                      {isArabic ? "اشترك في النشرة (قريبًا)" : "Subscribe to Newsletter (Soon)"}
                      <Sparkles className="ml-3 h-6 w-6" />
                    </Button>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-amber-400 font-medium">
                        {isArabic ? "الإطلاق في ديسمبر 2025" : "Launching December 2025"}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    </div>

                    <p className="text-xs text-muted-foreground italic">
                      {isArabic 
                        ? "💡 سيحصل أول 100 عضو على وصول مجاني مدى الحياة!"
                        : "💡 First 100 members get lifetime free access!"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

