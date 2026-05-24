import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://ontrack.guru", lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: "https://ontrack.guru/gym", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
