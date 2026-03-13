// src/components/HeroSection.jsx
import { useState } from "react";
import { ArrowDown, MessageCircleMore, Download } from "lucide-react";
import myPhoto from "../assets/profile.jpeg";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-4">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-14 py-16 md:flex-row md:py-20">
        {/* LEFT */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-2 backdrop-blur-md shadow-xs opacity-0 animate-fade-in">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">
              Software Developer
            </p>
          </div>

          {/* Title */}
          <div className="mt-6 space-y-4">
            <h1 className="text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
              <span className="opacity-0 animate-fade-in-delay-1">Bohdan</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Kukuruza
              </span>
            </h1>

            {/* underline */}
            <div className="mt-4 h-2 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg opacity-0 animate-fade-in-delay-3">
            Second-year Computer Science student at Dublin City University with experience building full-stack web applications using React and Django.
            Passionate about creating clean, modern products and continuously improving through real-world projects and problem solving.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start opacity-0 animate-fade-in-delay-4">
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary bg-primary px-6 py-2 font-medium text-primary-foreground transition-all duration-300 hover:shadow-[0_0_16px_rgba(139,92,246,0.45)] hover:scale-105 active:scale-95"
            >
              {/* shine */}
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <MessageCircleMore className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">Contact me</span>
            </button>

            {/* CV: добавь файл в /public и поменяй href */}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/70 bg-background/35 px-6 py-2 font-medium text-foreground transition-all duration-300 backdrop-blur-md hover:bg-background/55 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Download className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">Download CV</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 items-center justify-center">
          <div
            className="group relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* particles */}
            <div className="pointer-events-none absolute inset-0">
              {[
                ["top-0 left-1/2 -translate-x-1/2", isHovered ? "opacity-100 -translate-y-16 scale-150" : "opacity-0 scale-0"],
                ["top-8 right-0", isHovered ? "opacity-100 translate-x-12 -translate-y-12 scale-150" : "opacity-0 scale-0"],
                ["top-1/2 right-0 -translate-y-1/2", isHovered ? "opacity-100 translate-x-16 scale-150" : "opacity-0 scale-0"],
                ["bottom-8 right-0", isHovered ? "opacity-100 translate-x-12 translate-y-12 scale-150" : "opacity-0 scale-0"],
                ["bottom-0 left-1/2 -translate-x-1/2", isHovered ? "opacity-100 translate-y-16 scale-150" : "opacity-0 scale-0"],
                ["bottom-8 left-0", isHovered ? "opacity-100 -translate-x-12 translate-y-12 scale-150" : "opacity-0 scale-0"],
                ["top-1/2 left-0 -translate-y-1/2", isHovered ? "opacity-100 -translate-x-16 scale-150" : "opacity-0 scale-0"],
                ["top-8 left-0", isHovered ? "opacity-100 -translate-x-12 -translate-y-12 scale-150" : "opacity-0 scale-0"],
              ].map(([pos, cls], i) => (
                <div
                  key={i}
                  className={`absolute h-2 w-2 rounded-full bg-primary shadow-lg transition-all duration-700 ${pos} ${cls}`}
                />
              ))}
            </div>

            {/* rings */}
            <div
              className={`absolute -inset-8 rounded-full border border-primary/20 transition-all duration-700 ${
                isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <div
              className={`absolute -inset-14 rounded-full border border-primary/10 transition-all duration-700 ${
                isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
              }`}
            />

            {/* main circle */}
            <div
              className={`relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-background/35 shadow-2xl backdrop-blur-md transition-all duration-500 sm:h-72 sm:w-72 md:h-80 md:w-80 ${
                isHovered ? "scale-105 -rotate-6 shadow-primary/25" : "scale-100 rotate-0"
              }`}
            >
              {/* rotating glow */}
              <div
                className={`absolute -inset-2 rounded-full bg-linear-to-r from-primary/40 via-white/10 to-primary/40 blur-md transition-opacity duration-500 ${
                  isHovered ? "opacity-60 animate-spin" : "opacity-0"
                }`}
                style={{ animationDuration: "6s" }}
              />
              <img
                src={myPhoto}
                alt="Bohdan Kukuruza"
                className="relative z-10 h-full w-full object-cover"
              />
            </div>

            {/* tech badges */}
            <div
              className={`absolute -right-4 top-1/4 hidden flex-col gap-2 transition-all duration-500 sm:flex ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              {["React", "Django", "TypeScript"].map((t, idx) => (
                <div
                  key={t}
                  className="rounded-lg border border-border/60 bg-background/55 px-3 py-1.5 shadow-lg backdrop-blur-md"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <span className="text-xs font-bold text-foreground/80">{t}</span>
                </div>
              ))}
            </div>

            {/* status pill */}
            <div
              className={`absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border/60 bg-background/55 px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-500 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs font-semibold text-foreground/80">Open to internships</span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};