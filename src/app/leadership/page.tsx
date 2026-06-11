import type { Metadata } from "next";
import { Award, Flag, Heart, Trophy, Users } from "lucide-react";
import { hackathons, leadershipItems, volunteerStats } from "@/data/leadership";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = createPageMetadata({
  title: "Leadership & Activities",
  description: `Leadership, Formula 1 operations, community roles, and volunteer work by ${siteConfig.name}.`,
  path: "/leadership",
});

const iconMap = {
  flag: Flag,
  users: Users,
  award: Award,
};

export default function LeadershipPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="Leadership & Activities"
            description="Formula 1 operations, developer community leadership, ACM organizing, and national hackathon participation."
          />

          <StaggerContainer className="space-y-6">
            {leadershipItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Users;
              return (
                <StaggerItem key={item.title}>
                  <Card className={item.highlight ? "border-blue-500/30" : ""}>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle>{item.title}</CardTitle>
                            <p className="mt-1 text-sm text-blue-400">{item.role}</p>
                            <p className="text-sm text-muted">{item.organization}</p>
                          </div>
                        </div>
                        <Badge variant="accent">{item.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted leading-relaxed">{item.description}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {item.achievements.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>

      <Section className="border-t border-white/5 bg-white/[0.02]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-400" />
                    <CardTitle>Hackathons</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {hackathons.map((h) => (
                    <div key={h.name} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <span className="font-medium">{h.name}</span>
                      <Badge variant={h.result === "Finalist" ? "default" : "secondary"}>
                        {h.result}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose-400" />
                    <CardTitle>Volunteer Work</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold gradient-text">{volunteerStats.hours}</p>
                  <p className="mt-1 font-medium">{volunteerStats.label}</p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {volunteerStats.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
