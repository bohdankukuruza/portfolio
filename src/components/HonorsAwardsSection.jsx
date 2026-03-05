// src/components/HonorsAwardsSection.jsx
export function HonorsAwardsSection() {
  const award = {
    id: "compsoc-ctf-2026",
    title: "2nd Place — CompSoc Annual CTF 2026",
    date: "February 2026",
    organization: "University of Galway",
    description:
      "Placed 2nd out of 30 teams competing from across Ireland in CompSoc's Annual CTF — one of the country's largest student-run Capture the Flag competitions. Competing as team 'VI KA', solved challenges across web security, cryptography, and forensics.",
    link: {
      label: "Read More",
      href: "#",
    },
    stats: [
      { icon: "🎯", label: "Competing Teams", value: "30" },
      { icon: "🌐", label: "Placement", value: "2nd" },
    ],
  };

  const isCTF = true;

  return (
    <section id="honors" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center animate-fadeInUp">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-3">
              Honors{" "}
              <span className="ml-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                & Awards
              </span>
            </h2>

            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-expandWidth"></div>
          </div>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fadeInUp delay-200">
            Recognition for outstanding work and achievements
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto max-w-4xl space-y-8">
          <div
            key={award.id}
            className="group relative animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className={`relative rounded-2xl border backdrop-blur-sm p-8 sm:p-10 shadow-sm transition-all duration-500 hover:-translate-y-2
              bg-background/25 border-border/60 hover:border-border/80 hover:shadow-2xl hover:shadow-black/30`}
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  isCTF ? "via-slate-300/60" : "via-blue-300/60"
                }`}
              ></div>

              {/* Medal (desktop) */}
              <div className="absolute -left-6 top-8 hidden sm:flex">
                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12
                  ${
                    isCTF
                      ? "bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 shadow-slate-400/40"
                      : "bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-yellow-500/40"
                  }`}
                >
                  <div className="relative">
                    <span className="text-4xl">🏅</span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-white/80 border border-white/50 flex items-center justify-center text-xs font-black text-slate-700 shadow">
                      2
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 rounded-2xl animate-ping ${
                      isCTF ? "bg-slate-400/20" : "bg-yellow-400/20"
                    }`}
                  ></div>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
              </div>

              {/* Medal (mobile) */}
              <div className="mb-6 inline-flex sm:hidden">
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ${
                    isCTF
                      ? "bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 shadow-slate-400/40"
                      : "bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-yellow-500/40"
                  }`}
                >
                  <div className="relative">
                    <span className="text-3xl">🏅</span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-white/80 border border-white/50 flex items-center justify-center text-[10px] font-black text-slate-700 shadow">
                      2
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 rounded-2xl animate-ping ${
                      isCTF ? "bg-slate-400/20" : "bg-yellow-400/20"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-5 sm:pl-16 text-left">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <h3
                      className={`text-2xl sm:text-3xl font-bold text-foreground transition-colors duration-300 ${
                        isCTF
                          ? "group-hover:text-foreground/80"
                          : "group-hover:text-blue-400"
                      }`}
                    >
                      {award.title}
                    </h3>

                    {/* Pills */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 px-3 py-1.5 text-xs font-bold !text-purple-700 !dark:text-purple-200 shadow-sm">
                        🎓 {award.organization}
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/25 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                        📅 {award.date}
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-3 py-1.5 text-xs font-bold !text-emerald-700 !dark:text-green-200 shadow-sm">
                        👥 Team &quot;VI KA&quot;
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-border/40 via-border to-border/40"></div>

                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {award.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  {award.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 border-border/60 bg-background/20"
                    >
                      <span className="text-lg">{stat.icon}</span>
                      <div className="text-left">
                        <p className="text-xs font-medium text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="text-lg font-bold text-foreground">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ✅ FIXED Read More button */}
                <div className="pt-2">
                  <a
                    href={award.link.href}
                    target={award.link.href === "#" ? undefined : "_blank"}
                    rel={
                      award.link.href === "#"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group/link relative inline-flex items-center gap-2 overflow-hidden rounded-xl
                    border border-blue-500/25
                    bg-gradient-to-r from-blue-500/15 to-indigo-500/15
                    dark:from-blue-500/10 dark:to-indigo-500/10
                    px-5 py-3 text-sm font-bold
                    !text-blue-700 !dark:text-blue-200
                    shadow-sm transition-all duration-300
                    hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 hover:scale-105"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover/link:translate-x-full"></div>

                    <svg
                      className="relative h-4 w-4 transition-transform duration-300 group-hover/link:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>

                    <span className="relative">{award.link.label}</span>

                    <svg
                      className="relative h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Corner decoration + confetti */}
              <div className="absolute bottom-0 right-0 h-32 w-32 overflow-hidden rounded-br-2xl">
                <div
                  className={`absolute -bottom-16 -right-16 h-32 w-32 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                    isCTF ? "bg-slate-200/10" : "bg-yellow-200/10"
                  }`}
                ></div>
              </div>

              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div
                  className={`absolute top-1/4 left-1/4 h-2 w-2 rounded-full opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:-translate-y-8 group-hover:translate-x-4 ${
                    isCTF ? "bg-slate-300/70" : "bg-yellow-300/70"
                  }`}
                ></div>
                <div
                  className={`absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full opacity-0 transition-all duration-700 delay-75 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:-translate-x-6 ${
                    isCTF ? "bg-green-300/70" : "bg-blue-300/70"
                  }`}
                ></div>
                <div
                  className={`absolute top-1/2 left-1/3 h-2 w-2 rounded-full opacity-0 transition-all duration-700 delay-150 group-hover:opacity-100 group-hover:translate-y-8 group-hover:-translate-x-4 ${
                    isCTF ? "bg-blue-300/70" : "bg-purple-300/70"
                  }`}
                ></div>
                <div className="absolute bottom-1/4 right-1/3 h-1.5 w-1.5 rounded-full opacity-0 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-10 group-hover:translate-x-8 bg-indigo-300/70"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom dots */}
        <div className="mt-16 flex justify-center gap-2 animate-fadeIn delay-600">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-300/80 animate-pulse"></div>
          <div
            className="h-1.5 w-1.5 rounded-full bg-blue-300/80 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="h-1.5 w-1.5 rounded-full bg-purple-300/80 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>

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
          to { width: 8rem; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
        .animate-expandWidth { animation: expandWidth 1s ease-out; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}