// src/components/SkillsSection.jsx
import { useMemo } from "react";
import {
  Braces,
  Code2,
  Database,
  Server,
  Wrench,
  LayoutGrid,
  ShieldCheck,
  GitBranch,
  Boxes,
  Workflow,
} from "lucide-react";

const groups = [
  {
    title: "Programming Languages",
    subtitle: "Languages I use across web and backend development",
    skills: [
      { name: "JavaScript (ES6+)", Icon: Braces },
      { name: "TypeScript", Icon: Code2 },
      { name: "Python", Icon: Code2 },
    ],
  },
  {
    title: "Frontend",
    subtitle: "UI development, components, and styling",
    skills: [
      { name: "React", Icon: LayoutGrid },
      { name: "HTML5", Icon: Code2 },
      { name: "CSS3", Icon: Code2 },
      { name: "TailwindCSS", Icon: LayoutGrid },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Frameworks, API design, and data formats",
    skills: [
      { name: "Django", Icon: Server },
      { name: "REST API design", Icon: Workflow },
    ],
  },
  {
    title: "Databases",
    subtitle: "Relational databases and SQL",
    skills: [
      { name: "PostgreSQL", Icon: Database },
      { name: "SQL", Icon: Database },
    ],
  },
  {
    title: "DevOps & Tools",
    subtitle: "Developer tooling and environments",
    skills: [
      { name: "Git", Icon: GitBranch },
      { name: "GitHub", Icon: GitBranch },
      { name: "Docker", Icon: Boxes },
      { name: "Linux", Icon: Wrench },
      { name: "Vite", Icon: Wrench },
      { name: "Postman", Icon: Wrench },
    ],
  },
  {
    title: "Web & Software Engineering",
    subtitle: "Core concepts and best practices",
    skills: [
      { name: "Auth / Security basics", Icon: ShieldCheck },
      { name: "Responsive design", Icon: LayoutGrid },
      { name: "OOP", Icon: Code2 },
    ],
  },
];

function SkillTile({ name, Icon }) {
  return (
    <div className="group relative rounded-xl border border-border/60 bg-background/35 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      {/* Gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/10" />

      {/* Shine */}
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

      {/* Corner accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 overflow-hidden rounded-tr-xl">
        <div className="absolute -right-4 -top-4 h-8 w-8 rotate-45 bg-primary/0 transition-all duration-300 group-hover:bg-primary/15" />
      </div>
    </div>
  );
}

export const SkillsSection = () => {
  const ordered = useMemo(() => groups, []);

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* optional subtle overlay, НЕ перекрывает звёзды */}
      

      <div className="relative mx-auto max-w-6xl">
        {/* Header (как у Nazarii) */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-3">
            Technical
            <span className="ml-3 text-gradient">Skills</span>
          </h2>
          <div className="mx-auto h-1 w-28 rounded-full bg-primary/80" />
          {/* можешь включить описание если хочешь */}
          {/* <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A quick overview of tools and concepts I use in development.
          </p> */}
        </div>

        {/* Groups grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {ordered.map((group, groupIndex) => (
            <div key={group.title} className="group relative">
              <div className="relative h-full rounded-2xl border border-border/60 bg-background/30 backdrop-blur-md p-8 shadow-sm transition-all duration-500 hover:border-primary/30 hover:bg-background/40 hover:shadow-xl">
                {/* Top gradient line */}
                <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-6 space-y-2">
                  <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {group.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {group.subtitle}
                  </p>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px bg-gradient-to-r from-border/40 via-border to-border/40" />

                {/* Tiles */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {group.skills.map((skill) => (
                    <SkillTile key={skill.name} name={skill.name} Icon={skill.Icon} />
                  ))}
                </div>

                {/* Bottom corner decoration */}
                <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
                  <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-primary/0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-primary/10" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom dots (как у него) */}
        <div className="mt-14 flex justify-center gap-2 select-none">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-pulse" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </section>
  );
};  