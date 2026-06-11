import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { SkillsContent } from "@/components/skills/skills-content";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description: `Technical skills of ${siteConfig.name} — AI, cloud, full-stack engineering, and professional competencies.`,
  path: "/skills",
});

export default function SkillsPage() {
  return <SkillsContent />;
}
