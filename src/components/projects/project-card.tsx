"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "@/components/ui/section";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Production-grade AI platforms and intelligent systems across fintech, cybersecurity, smart cities, and career intelligence."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <Card className="group flex h-full flex-col hover:shadow-xl hover:shadow-blue-500/5">
                <CardHeader>
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <Badge variant="accent">{project.domain}</Badge>
                    {project.metrics?.[0] && (
                      <Badge variant="default">{project.metrics[0].value}</Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2 pt-6">
                    <Button variant="secondary" size="sm" className="flex-1" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    {project.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}

export function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="group flex h-full flex-col hover:shadow-xl hover:shadow-blue-500/5">
      <CardHeader>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.domain}</Badge>
          <Badge variant="secondary">{project.period}</Badge>
        </div>
        <CardTitle className="group-hover:text-blue-300 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.subtitle}</CardDescription>
        <p className="text-xs text-blue-400">{project.role}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm text-muted leading-relaxed">{project.overview}</p>
        {project.highlights && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.highlights.map((h) => (
              <Badge key={h} variant="default">{h}</Badge>
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <Button variant="secondary" className="w-full" asChild>
            <Link href={`/projects/${project.slug}`}>
              Explore Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
