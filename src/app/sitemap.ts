import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/projects",
    "/skills",
    "/certifications",
    "/leadership",
    "/research",
    "/contact",
  ];

  const projectPages = getPublishedProjects().map((p) => `/projects/${p.slug}`);

  return [...staticPages, ...projectPages].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/projects/") ? 0.8 : 0.7,
  }));
}
