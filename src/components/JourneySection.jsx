// src/components/JourneySection.jsx

const items = [
  {
    id: "dcu-bsc",
    type: "education",
    period: "Sep 2024 – Present",
    title: "BSc in Computer Science",
    org: "Dublin City University (Dublin 9)",
    bullets: [
      "Key focus: Data Structures & Algorithms, Operating Systems, Software Engineering.",
      "Full-stack development and web development fundamentals.",
      "Building solid programming foundations in Python and C.",
    ],
  },
  {
    id: "intern-ueo",
    type: "work",
    period: "Jun 2025 – Sep 2025",
    title: "Software Development Intern",
    org: "Ukraine Economic Outlook (Kyiv, Ukraine)",
    bullets: [
      "Implemented an AI verification module using Google Gemini API to cross-validate data.",
      "Built multi-step interaction flows using Aiogram (FSM) to manage user states.",
      "Automated reporting pipelines with Pandas (JSON → formatted Excel), removing manual data entry.",
      "Debugged asynchronous bot logic; participated in daily stand-ups and code reviews.",
    ],
  },
  {
    id: "cathal-brugha-qqi5",
    type: "education",
    period: "Sep 2023 – May 2024",
    title: "Computer Systems and Networks (QQI Level 5)",
    org: "Cathal Brugha College — North Strand Campus (Dublin 1)",
    bullets: [
      "Distinctions: 8/8.",
      "Key focus: Networking, Virtualization, Hardware, ICT Security, Math for IT.",
    ],
  },
];

const badgeClass = (type) => {
  if (type === "work") {
    return [
      // light
      "bg-gradient-to-r from-blue-50 to-indigo-50",
      "!text-blue-700 border-blue-200/60",
      // dark
      "dark:from-blue-500/10 dark:to-indigo-500/10",
      "!dark:text-blue-200 dark:border-blue-500/25",
    ].join(" ");
  }

  // education default
  return [
    // light
    "bg-gradient-to-r from-purple-50 to-indigo-50",
    "!text-purple-700 border-purple-200/60",
    // dark
    "dark:from-purple-500/10 dark:to-indigo-500/10",
    "!dark:text-purple-200 dark:border-purple-500/25",
  ].join(" ");
};

const dotClass = (type) => {
  if (type === "work") return "from-blue-500 to-indigo-600 shadow-blue-500/40";
  return "from-purple-500 to-indigo-600 shadow-purple-500/40";
};

const iconFor = (type) => (type === "work" ? "💼" : "🎓");
const labelFor = (type) => (type === "work" ? "Work Experience" : "Education");

export function JourneySection() {
  return (
    <section id="journey" className="relative py-20 sm:py-28 overflow-hidden px-4">
      {/* subtle overlay (keeps your star background visible) */}
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.06)_0%,transparent_50%),radial-gradient(circle_at_60%_80%,rgba(139,92,246,0.06)_0%,transparent_50%)]"></div>

      <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center animate-fadeInUp">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-3">
              My <span className="ml-3 text-gradient">Journey</span>
            </h2>
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-expandWidth"></div>
          </div>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fadeInUp delay-200">
            Education and experience in chronological order
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/25 via-indigo-500/25 to-purple-500/25"></div>

          {/* Items */}
          <div className="space-y-12">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="relative pl-20 animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-0 flex items-center justify-center">
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${dotClass(
                      item.type
                    )} shadow-lg border-4 border-background transition-all duration-300 hover:scale-110`}
                  >
                    <span className="text-2xl">{iconFor(item.type)}</span>
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                  </div>
                </div>

                {/* Card */}
                <div className="group relative rounded-2xl border border-border/60 bg-background/25 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-black/20 text-left">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="min-w-0 flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold shadow-sm ${badgeClass(
                            item.type
                          )}`}
                        >
                          <span>{iconFor(item.type)}</span>
                          {labelFor(item.type)}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm sm:text-base font-medium text-muted-foreground">
                          {item.org}
                        </p>
                      </div>
                    </div>

                    <time className="shrink-0 rounded-full border border-border/60 bg-background/30 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground/80 shadow-sm transition-all duration-300 group-hover:border-primary/30">
                      {item.period}
                    </time>
                  </div>

                  <div className="my-5 h-px bg-gradient-to-r from-border/40 via-border to-border/40"></div>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground animate-fadeInLeft"
                        style={{
                          animationDelay: `${0.5 + index * 0.15 + bulletIndex * 0.05}s`,
                        }}
                      >
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom dots */}
        <div className="mt-16 flex justify-center gap-2 animate-fadeIn delay-600">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-pulse"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
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
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
        .animate-expandWidth { animation: expandWidth 1s ease-out; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}