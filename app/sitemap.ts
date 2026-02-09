import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://poysdorf-zentrum.at",
      lastModified: new Date(),
    },
  ];
}