"use client";

import { Brain, Flag, FlaskConical, Heart, Trophy } from "lucide-react";
import { homeStats } from "@/data/profile";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Container, Section } from "@/components/ui/section";

const iconMap = {
  brain: Brain,
  trophy: Trophy,
  flag: Flag,
  heart: Heart,
  flask: FlaskConical,
};

export function StatsSection() {
  return (
    <Section className="py-16">
      <Container>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {homeStats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <StaggerItem key={stat.label}>
                <div className="glass gradient-border group rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export function SkillsPreview() {
  return (
    <Section className="border-y border-white/5 bg-white/[0.02]">
      <Container>
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
              Technical Expertise
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Engineering Across the Full Stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              From AI model development to cloud infrastructure — delivering
              production-grade systems for fintech, cybersecurity, IoT, and smart cities.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "AI & Machine Learning",
              items: ["Fraud Detection", "Behavioral Analytics", "Risk Scoring", "Explainable AI"],
            },
            {
              title: "Full-Stack Engineering",
              items: ["Next.js & React", "FastAPI & Node.js", "PostgreSQL & Prisma", "Real-Time Systems"],
            },
            {
              title: "Cloud & Infrastructure",
              items: ["Azure & AWS", "Docker", "IoT Integration", "System Architecture"],
            },
          ].map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.1}>
              <div className="glass gradient-border h-full rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
