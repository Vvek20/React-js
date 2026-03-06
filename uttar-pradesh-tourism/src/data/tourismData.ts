export type CategoryKey =
  | "beaches"
  | "hill-stations"
  | "forts"
  | "wildlife"
  | "religious"
  | "culture";

export type Place = {
  name: string;
  location: string;
  shortDescription: string;
  image: string;
};

export type Category = {
  id: CategoryKey;
  label: string;
  icon: string;
  count: number;
  updatedOn: string;
  heroTitle: string;
  heroSubtitle: string;
  places: Place[];
};

export const categoryOrder: CategoryKey[] = [
  "beaches",
  "hill-stations",
  "forts",
  "wildlife",
  "religious",
  "culture"
];

export const categories: Record<CategoryKey, Category> = {
  beaches: {
    id: "beaches",
    label: "Riverfront & Water Escapes",
    icon: "🏖️",
    count: 12,
    updatedOn: "Updated 10 Mar",
    heroTitle: "Waterfront Uttar Pradesh",
    heroSubtitle: "Ghats, wetlands, and calm riverside sunsets",
    places: [
      {
        name: "Sangam Riverfront",
        location: "Prayagraj",
        shortDescription: "Sacred confluence, boat rides, and evening aarti views.",
        image:
          "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Varanasi Ghats",
        location: "Varanasi",
        shortDescription: "Historic ghats, spiritual chants, and golden sunrise scenes.",
        image:
          "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Nawabganj Bird Sanctuary Lake",
        location: "Unnao",
        shortDescription: "Quiet waters with migratory birds and nature trails.",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  "hill-stations": {
    id: "hill-stations",
    label: "Hill Stations",
    icon: "⛰️",
    count: 9,
    updatedOn: "Updated 10 Mar",
    heroTitle: "Cool Escapes",
    heroSubtitle: "Forested walks and elevated viewpoints near UP",
    places: [
      {
        name: "Vindham Fall Ridge",
        location: "Mirzapur",
        shortDescription: "Green valleys, monsoon waterfalls, and short hikes.",
        image:
          "https://images.unsplash.com/photo-1508261303786-588f63f8a4b2?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Sonbhadra Highlands",
        location: "Sonbhadra",
        shortDescription: "Rocky plateaus and panoramic sunset points.",
        image:
          "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Chunar Fort Viewpoint",
        location: "Chunar",
        shortDescription: "River-facing heights with heritage fort atmosphere.",
        image:
          "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  forts: {
    id: "forts",
    label: "Forts",
    icon: "🏰",
    count: 18,
    updatedOn: "Updated 10 Mar",
    heroTitle: "Royal Heritage of UP",
    heroSubtitle: "Mughal architecture and centuries of history",
    places: [
      {
        name: "Agra Fort",
        location: "Agra",
        shortDescription: "UNESCO red sandstone fort with imperial halls.",
        image:
          "https://images.unsplash.com/photo-1539650116574-75c0c6d73f7e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Allahabad Fort",
        location: "Prayagraj",
        shortDescription: "Historic riverside fort built by Akbar.",
        image:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Jhansi Fort",
        location: "Jhansi",
        shortDescription: "Iconic stronghold linked to Rani Lakshmibai.",
        image:
          "https://images.unsplash.com/photo-1596276020587-bd4e7f2c620b?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  wildlife: {
    id: "wildlife",
    label: "Wildlife",
    icon: "🐅",
    count: 11,
    updatedOn: "Updated 10 Mar",
    heroTitle: "Into the Wild",
    heroSubtitle: "Tiger reserves, wetlands, and rare birds",
    places: [
      {
        name: "Dudhwa National Park",
        location: "Lakhimpur Kheri",
        shortDescription: "Tigers, rhinos, swamp deer, and dense grasslands.",
        image:
          "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Pilibhit Tiger Reserve",
        location: "Pilibhit",
        shortDescription: "Sal forests, river systems, and safari adventures.",
        image:
          "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Chambal Sanctuary",
        location: "Etawah",
        shortDescription: "Dolphins, gharials, and rich river biodiversity.",
        image:
          "https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  religious: {
    id: "religious",
    label: "Religious",
    icon: "🛕",
    count: 40,
    updatedOn: "Updated 10 Mar",
    heroTitle: "Spiritual Uttar Pradesh",
    heroSubtitle: "Temples, ghats, and timeless rituals",
    places: [
      {
        name: "Kashi Vishwanath Corridor",
        location: "Varanasi",
        shortDescription: "One of the most sacred Shiva temples in India.",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Ram Janmabhoomi",
        location: "Ayodhya",
        shortDescription: "Grand temple complex and rich devotional legacy.",
        image:
          "https://images.unsplash.com/photo-1703574763199-01758409c89f?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Mathura-Vrindavan Circuit",
        location: "Mathura",
        shortDescription: "Krishna temples, festivals, and devotional music.",
        image:
          "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  culture: {
    id: "culture",
    label: "Culture",
    icon: "🎭",
    count: 23,
    updatedOn: "Updated 10 Mar",
    heroTitle: "Art, Craft & Cuisine",
    heroSubtitle: "Nawabi elegance, weaving traditions, and festivals",
    places: [
      {
        name: "Lucknow Heritage Walk",
        location: "Lucknow",
        shortDescription: "Imambaras, kebabs, and Awadhi architecture.",
        image:
          "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Banarasi Weaving Hub",
        location: "Varanasi",
        shortDescription: "Silk craftsmanship and handloom storytelling.",
        image:
          "https://images.unsplash.com/photo-1603271892890-5fbd4ff9f2b3?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Taj Mahotsav",
        location: "Agra",
        shortDescription: "Art fair celebrating music, crafts, and cuisine.",
        image:
          "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  }
};
