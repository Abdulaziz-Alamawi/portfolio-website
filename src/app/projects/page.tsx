import type { Metadata } from "next";
import { getPublishedProjects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { ProjectCard } from "@/components/projects/project-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Container, Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description: `Explore AI, smart city, cybersecurity, and full-stack projects by ${siteConfig.name}.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Section className="pt-28">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects & Experience"
          description="Production-grade platforms spanning fraud detection, identity intelligence, smart cities, IoT, and career AI."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {getPublishedProjects().map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
