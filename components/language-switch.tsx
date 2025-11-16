"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const currentPath = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">
        {locale === "en" ? "العربية" : "English"}
      </span>
    </Button>
  );
}

