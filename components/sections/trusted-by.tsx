"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Tech1Mart", label: "UAE E-commerce", featured: true },
  { name: "Client B", label: "GCC Retailer", featured: false },
  { name: "Client C", label: "UAE Brand", featured: false },
  { name: "Client D", label: "GCC Agency", featured: false },
  { name: "Client E", label: "UAE Store", featured: false },
];

export function TrustedBy() {
  return (
    <section className="w-full py-8 border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-white/30 mb-6 font-mono">
          Trusted by UAE/GCC E-commerce Brands
        </p>

        {/* Mobile: horizontal scroll; Desktop: flex row centered */}
        <div className="flex overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center gap-8 pb-1 scrollbar-none">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: client.featured ? 0.7 : 0.4 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="flex-shrink-0 flex flex-col items-center gap-1 cursor-default"
            >
              <span
                className={`font-mono font-bold text-white grayscale tracking-tight ${
                  client.featured ? "text-lg" : "text-base"
                }`}
              >
                {client.name}
              </span>
              <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">
                {client.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
