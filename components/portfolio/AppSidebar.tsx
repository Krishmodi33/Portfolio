"use client";
import {
  User,
  Wrench,
  FolderGit2,
  GraduationCap,
  Mail,
  Code2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { resume } from "@/data/resume";

const nav = [
  { title: "About", href: "#about", icon: User },
  { title: "Skills", href: "#skills", icon: Wrench },
  { title: "Projects", href: "#projects", icon: FolderGit2 },
  { title: "Education", href: "#education", icon: GraduationCap },
  { title: "Contact", href: "#contact", icon: Mail },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="truncate font-display text-sm font-semibold text-sidebar-foreground">
              {resume.name}
            </p>
            <p className="truncate text-xs text-sidebar-foreground/60">
              {resume.title}
            </p>
          </div>
        </div>

        <div className="px-2 pb-3 group-data-[collapsible=icon]:hidden">
          <div className="inline-flex w-full items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary">
            <span className="pulse-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            Open to Work
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Résumé</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="GitHub">
              <a href={resume.socials.github} target="_blank" rel="noreferrer">
                <Code2 className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="LinkedIn">
              <a
                href={resume.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
