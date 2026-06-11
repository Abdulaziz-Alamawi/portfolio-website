import type { Metadata } from "next";
import { Award, Brain, Cloud, Wrench } from "lucide-react";
import { certifications } from "@/data/certifications";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = createPageMetadata({
  title: "Certifications",
  description: `Professional certifications and training of ${siteConfig.name} — SDAIA, IBM, and more.`,
  path: "/certifications",
});

const categoryIcon = {
  AI: Brain,
  Cloud: Cloud,
  Management: Award,
  Engineering: Wrench,
};

const categoryColor = {
  AI: "text-purple-400 bg-purple-500/10",
  Cloud: "text-cyan-400 bg-cyan-500/10",
  Management: "text-amber-400 bg-amber-500/10",
  Engineering: "text-emerald-400 bg-emerald-500/10",
};

export default function CertificationsPage() {
  return (
    <Section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & Training"
          description="Professional certifications from SDAIA, IBM, and industry-leading training programs."
        />

        <StaggerContainer className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => {
            const Icon = categoryIcon[cert.category];
            const color = categoryColor[cert.category];
            return (
              <StaggerItem key={cert.title}>
                <Card className="group h-full transition-all hover:shadow-lg hover:shadow-blue-500/5">
                  <CardHeader className="flex-row items-start gap-4 space-y-0">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">{cert.category}</Badge>
                      <CardTitle className="text-base leading-snug group-hover:text-blue-300 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                    </div>
                  </CardHeader>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
