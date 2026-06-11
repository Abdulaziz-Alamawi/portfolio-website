import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} — Software Engineer & AI Engineer based in Saudi Arabia.`,
  path: "/contact",
});

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "abdulaziz-alamawi",
    href: siteConfig.linkedin,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "Abdulaziz-Alamawi",
    href: siteConfig.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <Section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let's Connect"
          description="Open to software engineering, AI engineering, and cloud roles. Reach out for collaborations, opportunities, or technical discussions."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {contactMethods.map((method, i) => (
            <FadeIn key={method.label} delay={i * 0.08}>
              <Card className="h-full transition-all hover:border-blue-500/30">
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium transition-colors hover:text-blue-400"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="font-medium">{method.value}</p>
                    )}
                  </div>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mx-auto mt-12 max-w-2xl text-center">
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold">Ready to collaborate?</h3>
              <p className="mt-2 text-muted">
                I&apos;m actively seeking opportunities with leading organizations in Saudi Arabia and internationally.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </Container>
    </Section>
  );
}
