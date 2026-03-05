// src/components/ProjectsSection.jsx
import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    id: "django-shop",
    title: "Django E-Commerce Web App",
    period: "2025 – 2026",
    subtitle: "Full-stack online shop (Django)",
    description:
      "Full-stack e-commerce web application with a structured Django project architecture (separate apps for users, goods, carts, and orders). Focused on clean backend structure and scalable features.",
    tech: ["Django", "Python", "PostgreSQL", "Templates", "Auth", "Pillow"],
    liveUrl: "", // если задеплоишь — вставишь сюда
    githubUrl: "https://github.com/bohdankukuruza/Web-App",
    images: [], // можно добавить потом
  },
  {
    id: "ai-voice-agent",
    title: "AI Restaurant Booking Voice Agent",
    period: "2026 – Present",
    subtitle: "Twilio • Deepgram • LLM Function Calling",
    description:
      "Voice agent that answers calls, takes bookings, and creates reservations via booking system APIs. Built for low latency with barge-in support, and designed with GDPR disclosure and EU data residency in mind. (Private code)",
    tech: [
      "Twilio",
      "Deepgram",
      "GPT-4o / Grok",
      "Function Calling",
      "Vapi / Retell",
      "MongoDB",
    ],
    liveUrl: "", // если будет демо/лендинг — вставишь
    githubUrl: "", // приватный — оставляем пустым
    images: [],
  },
  {
    id: "simple-bank-system",
    title: "Simple Bank System",
    period: "2023-2024",
    subtitle: "Python • OOP • JSON Persistence",
    description:
      "Console banking system built with OOP. Supports user registration/login, deposits and withdrawals with balance validation, password updates, and an interest calculator. Data is persisted to a local JSON file.",
    tech: ["Python", "OOP", "JSON", "CLI"],
    liveUrl: "",
    githubUrl: "https://github.com/bohdankukuruza/simple-bank-system",
    images: [],
  },
];

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const disabled = !!project.comingSoon;

  return (
    <div
      className={`group relative rounded-2xl border backdrop-blur-sm p-7 shadow-sm transition-all duration-500
      bg-background/25 border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-black/20
      ${disabled ? "opacity-80" : "hover:-translate-y-2"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Gradient glow effect */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500
        bg-gradient-to-br from-violet-500/0 via-indigo-500/0 to-purple-500/0
        ${isHovered && !disabled ? "opacity-100 from-violet-500/10 via-indigo-500/5 to-purple-500/10" : "opacity-0"}`}
      />

      {/* Header */}
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-muted-foreground">
              {project.subtitle}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-xs font-semibold text-foreground/80">
            {project.period}
          </span>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-border/40 via-border to-border/40" />

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="group/chip relative overflow-hidden rounded-full border border-border/60 bg-background/30 px-3 py-1 text-xs font-semibold text-foreground/80"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/chip:translate-x-full" />
              <span className="relative">{t}</span>
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap gap-3">
          {/* Live Demo */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl
              border border-violet-500/25 bg-gradient-to-r from-violet-500/15 to-purple-500/15
              px-4 py-2 text-sm font-bold text-violet-700 dark:text-violet-200
              shadow-sm transition-all duration-300 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <ExternalLink className="relative h-4 w-4" />
              <span className="relative">Live Demo</span>
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background/20 px-4 py-2 text-sm font-bold text-muted-foreground opacity-70"
              title="Live demo not available yet"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </button>
          )}

          {/* Code */}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl
              border border-border/60 bg-background/30 px-4 py-2 text-sm font-bold text-foreground/80
              transition-all duration-300 hover:bg-background/45 hover:-translate-y-0.5"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <Github className="relative h-4 w-4" />
              <span className="relative">View Code</span>
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background/20 px-4 py-2 text-sm font-bold text-muted-foreground opacity-70"
              title="Private / not available"
            >
              <Github className="h-4 w-4" />
              View Code
            </button>
          )}

          {/* Screenshots placeholder like his structure */}
          {project.images?.length > 0 && (
            <button
              type="button"
              className="group/btn relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl
              border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50/80 to-purple-50
              px-4 py-2 text-sm font-bold text-purple-700 shadow-sm transition-all duration-300
              hover:border-purple-300 hover:shadow-lg hover:shadow-purple-200/50 hover:scale-105"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <Sparkles className="relative h-4 w-4" />
              <span className="relative">
                {project.images.length} screenshot{project.images.length > 1 ? "s" : ""}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom corner decoration */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
        <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-primary/0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-primary/10" />
      </div>
    </div>
  );
}

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Header (как у Nazarii) */}
        <div className="mb-16 space-y-4 text-center animate-fadeInUp">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-3">
              Featured{" "}
              <span className="ml-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-expandWidth" />
          </div>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fadeInUp delay-200">
            Real-world work showcasing my development skills and problem solving
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Bottom dots */}
        <div className="mt-16 flex justify-center gap-2 animate-fadeIn delay-600">
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

      {/* animations (same names you already use) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 10rem; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
        .animate-expandWidth { animation: expandWidth 1s ease-out; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};