import type { Metadata } from "next";
import { GraduationCap, MapPin, Target } from "lucide-react";
import {
  areasOfInterest,
  careerGoals,
  education,
  professionalSummary,
  timeline,
} from "@/data/profile";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: `Learn about ${siteConfig.name} — Software Engineering graduate specializing in AI, cloud computing, and enterprise software solutions.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <SectionHeader
            eyebrow="About Me"
            title="Engineering Intelligent Systems"
            description="Software Engineer with a passion for AI, cloud infrastructure, and building scalable digital platforms."
          />

          <FadeIn>
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-muted leading-relaxed">
                  {professionalSummary}
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold">{education.degree}</p>
                    <p className="text-sm text-muted">{education.university}</p>
                    <p className="text-sm text-muted">{education.location}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">GPA: {education.gpa}</Badge>
                    <Badge variant="accent">{education.honors}</Badge>
                    <Badge variant="secondary">Graduation: {education.graduation}</Badge>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <CardTitle>Location & Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted">{siteConfig.location}</p>
                  <div className="space-y-2">
                    {siteConfig.languages.map((lang) => (
                      <div key={lang.name} className="flex items-center justify-between text-sm">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-muted">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5 bg-white/[0.02]">
        <Container>
          <SectionHeader eyebrow="Journey" title="Professional Timeline" />
          <StaggerContainer className="relative space-y-0">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent md:left-8 md:block" />
            {timeline.map((item) => (
              <StaggerItem key={item.year}>
                <div className="relative flex gap-6 pb-10 md:gap-10">
                  <div className="hidden md:flex md:w-16 md:shrink-0 md:justify-center">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 ring-4 ring-background mt-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <Badge variant="accent" className="mb-3">{item.year}</Badge>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-400" />
                  <h2 className="text-2xl font-bold">Career Goals</h2>
                </div>
                <ul className="space-y-3">
                  {careerGoals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Areas of Interest</h2>
                <div className="flex flex-wrap gap-2">
                  {areasOfInterest.map((area) => (
                    <Badge key={area} variant="secondary" className="text-sm px-4 py-2">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
