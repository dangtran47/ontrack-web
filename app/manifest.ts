import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "On Track Guru",
    short_name: "On Track Guru",
    description: "A focused family of apps to help you stay on track.",
    start_url: "/",
    display: "standalone",
    background_color: "#fef9ee",
    theme_color: "#fef9ee",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
