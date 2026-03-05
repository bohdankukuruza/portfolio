// src/components/HonorsAwardsSection.jsx
import { Award, Calendar } from "lucide-react";

export const HonorsAwardsSection = () => {
  return (
    <section id="honors" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header (like Nazarii) */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-3">
            Honors <span className="ml-3 text-gradient">&amp; Awards</span>
          </h2>
          <div className="mx-auto h-1 w-28 rounded-full bg-primary/80" />
        </div>

        {/* Single card */}
        <div className="mx-auto max-w-3xl">
          <div className="group relative rounded-2xl border border-border/60 bg-background/30 backdrop-blur-md p-8 shadow-sm transition-all duration-500 hover:border-primary/30 hover:bg-background/40 hover:shadow-xl">
            {/* top gradient line */}
            <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-primary">
                  <Award className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    2nd Place — CompSoc Annual CTF
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Placed 2nd in a competitive Capture The Flag event organized by CompSoc.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>2026</span>
              </div>
            </div>

            {/* bottom corner decoration */}
            <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
              <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-primary/0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-primary/10" />
            </div>
          </div>
        </div>

        {/* bottom dots like his sections */}
        <div className="mt-14 flex justify-center gap-2 select-none">
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