import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/section";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createPageMetadata({
    title: `${project.title} — ${project.subtitle}`,
    description: project.overview,
    path: `/projects/${slug}`,
  });
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </FadeIn>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Section className="pt-28 pb-20">
      <Container>
        <FadeIn>
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </FadeIn>

        <FadeIn>
          <div className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="accent">{project.domain}</Badge>
              <Badge variant="secondary">{project.period}</Badge>
              {project.status && <Badge variant="default">{project.status}</Badge>}
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>
            <p className="mt-2 text-xl text-muted">{project.subtitle}</p>
            <p className="mt-2 text-sm text-blue-400">{project.role}</p>

            {project.metrics && (
              <div className="mt-6 flex flex-wrap gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="glass rounded-xl px-6 py-4 text-center">
                    <p className="text-2xl font-bold gradient-text">{m.value}</p>
                    <p className="text-xs text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <Button variant="secondary" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Screenshot placeholder section */}
        <FadeIn>
          <div className="glass gradient-border mb-10 overflow-hidden rounded-2xl">
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10">
              <div className="text-center p-8">
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="mt-2 text-sm text-muted">
                  Project screenshots — add images to /public/projects/{project.slug}/
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          <DetailSection title="Overview">
            <p className="text-muted leading-relaxed">{project.overview}</p>
          </DetailSection>

          <DetailSection title="Problem Statement">
            <p className="text-muted leading-relaxed">{project.problem}</p>
          </DetailSection>

          <DetailSection title="Solution">
            <p className="text-muted leading-relaxed">{project.solution}</p>
          </DetailSection>

          <DetailSection title="Architecture">
            <p className="text-muted leading-relaxed">{project.architecture}</p>
          </DetailSection>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <DetailSection title="Features">
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {f}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Challenges">
            <ul className="space-y-2">
              {project.challenges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {c}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Results">
            <ul className="space-y-2">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {r}
                </li>
              ))}
            </ul>
          </DetailSection>
        </div>

        <FadeIn>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </Container>
    </Section>
  );
}
