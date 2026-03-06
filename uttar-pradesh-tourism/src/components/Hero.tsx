"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <p className="tag">THE HEARTLAND OF INDIA</p>
        <h1>
          Explore <span>Uttar Pradesh</span>
        </h1>
        <p className="sub">
          Discover forts, sacred cities, wildlife reserves, and timeless culture.
        </p>
        <div className="cta-row">
          <Link href="/forts" className="btn primary">
            Start Exploring
          </Link>
          <Link href="/religious" className="btn ghost">
            Spiritual Circuit
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
