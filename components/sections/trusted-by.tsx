"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const integrations = [
  { name: "WooCommerce",         category: "Storefront"      },
  { name: "Amazon SP-API",       category: "Marketplace"     },
  { name: "TikTok Ads",          category: "Social Commerce" },
  { name: "CJ Dropshipping",     category: "Fulfillment"     },
  { name: "n8n",                 category: "Automation"      },
  { name: "OpenAI",              category: "AI"              },
  { name: "Supabase",            category: "Database"        },
  { name: "MoonPay",             category: "Payments"        },
  { name: "Coinbase Commerce",   category: "Web3"            },
  { name: "Vercel",              category: "Infrastructure"  },
  { name: "Claude",              category: "AI"              },
  { name: "Veo 3",               category: "Video AI"        },
];

export function TrustedBy() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="w-full py-8 border-t border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-white/30 mb-6 font-mono">
          {isArabic ? "يعمل على" : "Runs on"}
        </p>

        <div className="flex overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center gap-x-8 gap-y-4 pb-1 scrollbar-none">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 0.55 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="flex-shrink-0 flex flex-col items-center gap-0.5 cursor-default group"
            >
              <span className="font-mono font-bold text-white text-sm tracking-tight group-hover:text-primary transition-colors duration-200">
                {item.name}
              </span>
              <span className="text-[9px] text-white/25 font-mono uppercase tracking-widest group-hover:text-primary/50 transition-colors duration-200">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
