"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { categoryOrder, categories } from "@/data/tourismData";

const featured = categoryOrder.flatMap((key) => categories[key].places.slice(0, 1));

export function FeaturedPlaces() {
  return (
    <section className="section container">
      <div className="section-title-wrap">
        <h2>Featured Places</h2>
        <p>Animated tourism cards built with Framer Motion.</p>
      </div>
      <div className="place-grid">
        {featured.map((place, index) => (
          <motion.article
            key={place.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="place-card"
          >
            <div className="image-wrap">
              <Image src={place.image} alt={place.name} fill sizes="(max-width:768px) 100vw, 33vw" />
            </div>
            <div className="place-body">
              <h3>{place.name}</h3>
              <p className="location">{place.location}</p>
              <p>{place.shortDescription}</p>
              <Link href="#" className="discover-link">
                DISCOVER MORE →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
