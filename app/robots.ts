import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ontrack.guru/sitemap.xml",
    host: "https://ontrack.guru",
  };
}
