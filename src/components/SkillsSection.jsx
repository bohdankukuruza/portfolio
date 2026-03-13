// src/components/SkillsSection.jsx
import { useMemo } from "react";
import {
  Braces,
  Code2,
  Database,
  Server,
  Wrench,
  LayoutGrid,
  GitBranch,
  Boxes,
  Workflow,
} from "lucide-react";

const groups = [
  {
    title: "Primary Tech Stack",
    subtitle: "Core technologies I use most often in full-stack and AI-driven projects",
    skills: [
      { name: "Python", Icon: Code2 },
      { name: "C", Icon: Code2 },
      { name: "Aiogram", Icon: Workflow },
      { name: "Django", Icon: Server },
      { name: "Google Gemini API", Icon: Workflow },
      { name: "OpenAI API", Icon: Workflow },
      { name: "Anthropic API", Icon: Workflow },
      { name: "HTML", Icon: Code2 },
      { name: "CSS", Icon: Code2 },
    ],
  },
  {
    title: "Tools",
    subtitle: "Development tools, environments, and workflow essentials",
    skills: [
      { name: "Git", Icon: GitBranch },
      { name: "Docker", Icon: Boxes },
      { name: "PostgreSQL", Icon: Database },
      { name: "VS Code", Icon: Wrench },
      { name: "Linux Command Line", Icon: Wrench },
      { name: "Figma", Icon: LayoutGrid },
    ],
  },
  {
    title: "Other Technologies",
    subtitle: "Additional technologies I have worked with across projects and coursework",
    skills: [
      { name: "JavaScript", Icon: Braces },
      { name: "SQL", Icon: Database },
      { name: "Flask", Icon: Server },
      { name: "NumPy", Icon: Database },
      { name: "Pandas", Icon: Database },
      { name: "Java", Icon: Code2 },
      { name: "React", Icon: LayoutGrid },
    ],
  },
];

function SkillTile({ name, Icon }) {
  return (
    <div className="group relative rounded-xl border border-border/60 bg-background/35 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/10" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 rounded-lg bg-primary/20 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-background/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-7 w-7 text-foreground/80 transition-colors duration-300 group-hover:text-primary" />
          </div>
        </div>

        <div className="text-center text-xs font-semibold text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
          {name}
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 overflow-hidden rounded-tr-xl">
        <div className="absolute -right-4 -top-4 h-8 w-8 rotate-45 bg-primary/0 transition-all duration-300 group-hover:bg-primary/15" />
      </div>
    </div>
  );
}

export const SkillsSection = () => {
  const ordered = useMemo(() => groups, []);

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-3">
            Technical
            <span className="ml-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="mx-auto mt-4 h-2 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A snapshot of the technologies, tools, and concepts I use across web development,
            backend engineering, and AI-powered applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {ordered.map((group) => (
            <div key={group.title} className="group relative">
              <div className="relative h-full rounded-2xl border border-border/60 bg-background/30 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:bg-background/40 hover:shadow-xl">
                <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-6 space-y-2">
                  <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {group.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {group.subtitle}
                  </p>
                </div>

                <div className="mb-6 h-px bg-gradient-to-r from-border/40 via-border to-border/40" />

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {group.skills.map((skill) => (
                    <SkillTile key={skill.name} name={skill.name} Icon={skill.Icon} />
                  ))}
                </div>

                <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
                  <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-primary/0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-primary/10" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex select-none justify-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-pulse" />
          <div
            className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </section>
  );
};