"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/lib/site-config";
import { previewSkills } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/section";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge variant="accent" className="mb-6 gap-1.5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Available for Software Engineering & AI Roles
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {siteConfig.roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <Badge variant="secondary" className="text-sm">
                  {role}
                </Badge>
              </motion.span>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted leading-relaxed md:text-xl">
            Building intelligent, scalable digital systems across AI, cloud,
            cybersecurity, and smart city domains — aligned with{" "}
            <span className="text-foreground">Saudi Vision 2030</span>.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={siteConfig.cvPath} download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-16"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
              Core Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {previewSkills.map((skill) => (
                <span
                  key={skill}
                  className="glass rounded-lg px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-8 w-5 rounded-full border border-white/20 p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
