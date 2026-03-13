import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle"; // <-- если не работает: "../components/ThemeToggle"

const sections = [
  { id: "hero", label: "Home" },
  { id: "journey", label: "My Journey" },
  { id: "honors", label: "Honors & Awards" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const ids = sections.map((s) => s.id);
      const margins = 150;

      let current = "hero";
      let minDistance = Number.POSITIVE_INFINITY;

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distFromTop = rect.top;

        if (distFromTop <= margins && distFromTop > -el.offsetHeight) {
          const candidate = Math.abs(distFromTop);
          if (candidate < minDistance) {
            minDistance = candidate;
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setOpen(false);
    setActiveSection(id);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-16 items-center gap-3">
          {/* Logo (левее) */}
          <button
            onClick={() => handleNavClick("hero")}
            className="mr-auto group relative text-xl font-black tracking-tight text-foreground transition-colors hover:text-primary"
            aria-label="Go to top"
          >
            Bohdan <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Kukuruza</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-violet-500/15 to-purple-500/15 text-foreground border border-violet-500/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                  )}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">{section.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right controls (фикс кликов) */}
          <div className="relative z-10 flex items-center gap-2">
            {/* Theme toggle всегда сверху и кликабельный */}
            <ThemeToggle />

            {/* Mobile button */}
            <button
              onClick={() => setOpen((p) => !p)}
              className="md:hidden p-2 text-foreground"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-2">
            {/* ThemeToggle в мобильном меню тоже */}
            <div className="pb-2">
              <ThemeToggle />
            </div>

            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-lg px-4 py-3 text-left text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-violet-500/15 to-purple-500/15 text-foreground border border-violet-500/25"
                      : "text-foreground/80 hover:bg-background/40 hover:text-foreground"
                  )}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {isActive && (
                    <span className="pointer-events-none absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500" />
                  )}

                  <span className="relative">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};