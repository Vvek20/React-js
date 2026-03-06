import { CategoryCards } from "@/components/CategoryCards";
import { FeaturedPlaces } from "@/components/FeaturedPlaces";
import { Hero } from "@/components/Hero";
import { QuickNav } from "@/components/QuickNav";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickNav />
      <CategoryCards />
      <FeaturedPlaces />
    </main>
  );
}
