"use client";
import { AppSidebar } from "@/components/portfolio/AppSidebar";
import {
  Hero,
  Skills,
  Projects,
  Education,
  Contact,
} from "@/components/portfolio/Sections";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { resume } from "@/data/resume";

export default function HomePage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            <div className="h-4 w-px bg-border/60" />

            <div className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">~</span>/portfolio/
              <span className="text-foreground/80">
                {resume.name.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </div>

            <div className="ml-auto">
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
                v1.0
              </span>
            </div>
          </header>

          <main className="mx-auto w-full max-w-5xl flex-1 space-y-24 px-4 py-10 md:px-10 md:py-16">
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Contact />

            <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>
                © {new Date().getFullYear()} — {resume.name}
              </span>
              <span>Crafted with Next.js</span>
            </footer>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
