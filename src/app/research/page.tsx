import type { Metadata } from "next";
import { FileText, Lightbulb, Shield } from "lucide-react";
import { innovationHighlights, researchItems } from "@/data/research";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = createPageMetadata({
  title: "Research & Innovation",
  description: `Research paper and patent in preparation by ${siteConfig.name} — AI fraud detection and hybrid risk scoring.`,
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <SectionHeader
            eyebrow="Innovation"
            title="Research & Innovation"
            description="Research-driven engineering with ongoing publication and patent development in AI fraud detection."
          />

          <StaggerContainer className="grid gap-6 lg:grid-cols-2">
            {researchItems.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      {item.type === "Research Paper" ? (
                        <FileText className="h-5 w-5 text-blue-400" />
                      ) : (
                        <Shield className="h-5 w-5 text-purple-400" />
                      )}
                      <Badge variant="accent">{item.type}</Badge>
                      <Badge variant="secondary">{item.status}</Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="text-sm text-muted">Related: {item.relatedProject}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.focusAreas.map((area) => (
                        <Badge key={area} variant="secondary" className="text-xs">{area}</Badge>
                      ))}
                    </div>

                    <div className="mt-6 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Timeline
                      </p>
                      {item.timeline.map((phase) => (
                        <div key={phase.phase} className="flex items-center justify-between gap-4 text-sm">
                          <span className="text-muted">{phase.phase}</span>
                          <Badge
                            variant={
                              phase.status === "Completed"
                                ? "default"
                                : phase.status === "In Progress"
                                  ? "accent"
                                  : "secondary"
                            }
                            className="shrink-0 text-xs"
                          >
                            {phase.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section className="border-t border-white/5 bg-white/[0.02] pb-20">
        <Container>
          <FadeIn>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-400" />
                  <CardTitle>Innovation Highlights</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {innovationHighlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
