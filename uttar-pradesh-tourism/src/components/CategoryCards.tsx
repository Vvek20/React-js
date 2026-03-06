"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories, categoryOrder } from "@/data/tourismData";

export function CategoryCards() {
  return (
    <section className="section container">
      <div className="section-title-wrap">
        <h2>Popular Categories</h2>
        <p>Curated experiences inspired by your reference layout.</p>
      </div>

      <div className="stats-grid">
        {categoryOrder.map((key, index) => {
          const category = categories[key];
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Link href={`/${category.id}`} className="stat-card">
                <div className="icon-box">{category.icon}</div>
                <h3>{category.count}</h3>
                <p className="muted">PLACES</p>
                <h4>{category.label}</h4>
                <p className="updated">🕒 {category.updatedOn}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
