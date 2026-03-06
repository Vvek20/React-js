import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryOrder, categories, CategoryKey } from "@/data/tourismData";

type PageProps = {
  params: {
    category: string;
  };
};

export function generateStaticParams() {
  return categoryOrder.map((category) => ({ category }));
}

export default function CategoryPage({ params }: PageProps) {
  const key = params.category as CategoryKey;
  const category = categories[key];

  if (!category) {
    notFound();
  }

  return (
    <main className="container category-page">
      <header className="category-header">
        <Link href="/" className="back-link">
          ← Back to home
        </Link>
        <h1>{category.heroTitle}</h1>
        <p>{category.heroSubtitle}</p>
      </header>

      <section className="place-grid">
        {category.places.map((place) => (
          <article key={place.name} className="place-card">
            <div className="image-wrap">
              <Image src={place.image} alt={place.name} fill sizes="(max-width:768px) 100vw, 33vw" />
            </div>
            <div className="place-body">
              <h3>{place.name}</h3>
              <p className="location">{place.location}</p>
              <p>{place.shortDescription}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
