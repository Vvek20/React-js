"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categoryOrder, categories } from "@/data/tourismData";

export function QuickNav() {
  return (
    <section className="section container quick-nav-wrap">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="quick-nav"
      >
        {categoryOrder.map((key, index) => (
          <Link key={key} href={`/${key}`} className="quick-item">
            <span>{String(index + 2).padStart(2, "0")}</span>
            {categories[key].label}
          </Link>
        ))}
      </motion.div>
      <div className="watermark">UTTAR PRADESH</div>
    </section>
  );
}
