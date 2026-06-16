"use client";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
  ExternalLink,
  Code2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/portfolio/Reveal";
import { resume } from "@/data/resume";

export function Hero() {
  const [firstName, ...rest] = resume.name.split(" ");
  return (
    <section
      id="about"
      className="section-anchor relative overflow-hidden rounded-2xl border bg-card"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="blob h-72 w-72 bg-primary/30"
        style={{ top: "-4rem", right: "-4rem" }}
      />
      <div
        aria-hidden
        className="blob h-64 w-64 bg-primary/20"
        style={{ bottom: "-5rem", left: "-3rem", animationDelay: "-4s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="relative flex flex-col gap-7 p-8 md:p-14">
        <Reveal>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <span className="pulse-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            Available for opportunities
          </div>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={80}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Portfolio / 2026
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              <span className="shimmer-name">{firstName}</span>
              <br />
              <span className="text-foreground/90">{rest.join(" ")}</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {resume.title}. {resume.tagline}
            </p>
          </Reveal>
        </div>

        <Reveal delay={340}>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" /> {resume.location}
            </span>
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5 text-primary" /> {resume.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              className="amber-glow group rounded-full bg-primary px-6 font-medium text-primary-foreground transition-transform hover:bg-primary/90 hover:scale-[1.03]"
            >
              <a href="#projects">
                See my work
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="group rounded-full border-border/60 bg-transparent px-6 hover:bg-card"
            >
              <a href={resume.socials.github} target="_blank" rel="noreferrer">
                <Code2 className="mr-1.5 h-4 w-4 transition-transform group-hover:rotate-12" />
                GitHub
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <div className="mt-4 grid gap-4 border-t border-border/60 pt-8 text-[0.95rem] leading-relaxed text-foreground/75 md:grid-cols-2 md:gap-8">
            {resume.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-anchor">
      <SectionHeader
        eyebrow="02"
        title="Skills"
        subtitle="The toolkit I build and learn with."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(resume.skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 80}>
            <Card className="group lift relative h-full overflow-hidden border-border/60 bg-card hover:lift-hover hover:border-primary/30">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <CardHeader className="pb-3">
                <CardTitle className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  / {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="rounded-md border border-border/60 bg-secondary/60 font-mono text-xs font-normal text-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-anchor">
      <SectionHeader
        eyebrow="03"
        title="Selected work"
        subtitle="Things I've designed and shipped while learning."
      />
      <div className="grid gap-3">
        {resume.projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <Card className="group lift relative overflow-hidden border-border/60 bg-card hover:lift-hover hover:border-primary/30 hover:bg-card/80">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-start md:gap-8 md:p-8">
                <div className="shrink-0 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary md:w-12 md:pt-1">
                  0{i + 1}
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {p.name}
                    </h3>
                    <Sparkles className="h-3.5 w-3.5 text-primary opacity-0 transition-all duration-300 group-hover:rotate-12 group-hover:opacity-100" />
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 gap-2 md:flex-col md:items-end">
                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="rounded-full text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                  >
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      <Code2 className="mr-1.5 h-3.5 w-3.5" /> Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="group/btn rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={p.link} target="_blank" rel="noreferrer">
                      Live
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section-anchor">
      <SectionHeader
        eyebrow="04"
        title="Education"
        subtitle="Where I learned the fundamentals."
      />
      <div className="space-y-3">
        {resume.education.map((e, i) => (
          <Reveal key={e.school} delay={i * 80}>
            <Card className="lift border-border/60 bg-card hover:lift-hover hover:border-primary/30">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {e.school}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-medium text-primary">
                  {e.degree}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {e.detail}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}

        <Reveal delay={160}>
          <Card className="border-border/60 bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                / Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5 text-sm text-foreground/80">
                {resume.certifications.map((c) => (
                  <li
                    key={c}
                    className="group flex items-start gap-3 transition-colors hover:text-foreground"
                  >
                    <span className="mt-1.5 h-1 w-3 shrink-0 rounded-full bg-primary transition-all duration-300 group-hover:w-6" />
                    {c}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-anchor">
      <SectionHeader
        eyebrow="05"
        title="Get in touch"
        subtitle="Open to junior roles, internships, and collabs."
      />
      <Card className="relative overflow-hidden border-border/60 bg-card">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <CardContent className="relative flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="space-y-2">
            <p className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Let's build <span className="text-gradient">something good.</span>
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              Email is the fastest way to reach me — I usually reply within a
              day.
            </p>
          </div>
          <Button
            size="lg"
            asChild
            className="amber-glow rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
          >
            <a href={`mailto:${resume.email}`}>
              <Mail className="mr-2 h-4 w-4" /> {resume.email}
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-7 flex items-end justify-between gap-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          / {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="hidden h-px flex-1 translate-y-[-0.5rem] bg-border/60 md:block" />
    </div>
  );
}
