"use client";

import { useState } from "react";
import {
  Brain,
  Cloud,
  Code,
  Database,
  Layers,
  Layout,
  Server,
  Users,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "@/components/ui/section";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  server: Server,
  layout: Layout,
  brain: Brain,
  cloud: Cloud,
  database: Database,
  layers: Layers,
  users: Users,
};

export function SkillsContent() {
  const [active, setActive] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === active)!;
  const ActiveIcon = iconMap[activeCategory.icon] ?? Code;

  return (
    <>
      <Section className="pt-28">
        <Container>
          <SectionHeader
            eyebrow="Expertise"
            title="Technical Skills"
            description="Interactive skill categories spanning programming, AI, cloud, databases, and professional competencies."
          />

          <div className="grid gap-8 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <div className="flex flex-col gap-2">
                {skillCategories.map((cat) => {
                  const Icon = iconMap[cat.icon] ?? Code;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActive(cat.id)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all",
                        active === cat.id
                          ? "glass gradient-border bg-white/5 text-foreground"
                          : "text-muted hover:bg-white/5 hover:text-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {cat.title}
                    </button>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-8">
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                  <CardTitle>{activeCategory.title}</CardTitle>
                  <CardDescription>{activeCategory.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5 bg-white/[0.02] pb-20">
        <Container>
          <SectionHeader
            eyebrow="All Skills"
            title="Complete Skill Matrix"
            align="center"
          />
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon] ?? Code;
              return (
                <StaggerItem key={cat.id}>
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <Icon className="h-5 w-5 text-blue-400" />
                      <CardTitle className="text-base">{cat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted">{cat.skills.length} skills</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}
