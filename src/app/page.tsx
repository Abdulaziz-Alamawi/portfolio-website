import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/projects/project-card";
import { SkillsPreview, StatsSection } from "@/components/home/stats";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <SkillsPreview />
      <FeaturedProjects />

      <Section className="pb-28">
        <Container>
          <FadeIn>
            <div className="glass gradient-border relative overflow-hidden rounded-3xl p-8 text-center md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Let&apos;s Build Something Intelligent
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted">
                  Open to software engineering, AI engineering, and cloud roles
                  with leading organizations in Saudi Arabia and beyond.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Get In Touch
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/about">
                      Learn More About Me
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
