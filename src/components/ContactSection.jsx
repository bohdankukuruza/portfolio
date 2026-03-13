import { useMemo } from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  // TODO: replace with your real data
  const email = "kukuruzabohdan22@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/bohdan-kukuruza/";
  const locationText = "Dublin, Ireland";

  const mailto = useMemo(() => `mailto:${email}`, [email]);

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden px-4">
      {/* Subtle background pattern (very light so it won’t “wash out” your stars) */}
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.06)_0%,transparent_50%)]"></div>

      {/* Decorative blobs like Nazarii (adapted to theme) */}
      <div className="pointer-events-none absolute top-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-20 left-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center animate-fadeInUp">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-3">
              Get In
              <span className="ml-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-expandWidth"></div>
          </div>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fadeInUp delay-200">
            Let&apos;s connect! Feel free to reach out via email or LinkedIn.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2">
          {/* Email Card */}
          <div
            className="group relative rounded-2xl border border-border/60 bg-background/25 backdrop-blur-sm p-8 shadow-sm
            transition-all duration-500 hover:border-blue-500/25 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2
            animate-fadeInLeft"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Icon */}
            <div className="mb-6 inline-flex">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Mail className="h-8 w-8 text-white" />
                <div className="absolute inset-0 rounded-2xl bg-blue-400/20 animate-ping"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-blue-500">
                Email Me
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Send me an email and I&apos;ll get back to you as soon as possible.
              </p>

              {/* Email display */}
              <div className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background/30 px-4 py-2 text-sm font-medium text-foreground/80">
                <span>{email}</span>
              </div>

              {/* Button */}
              <a
                href={mailto}
                className="group/btn relative w-full inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl
                border border-blue-500/25 bg-gradient-to-r from-blue-500 to-indigo-600
                px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20
                transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-100 mt-2
                no-underline visited:text-white"
              >
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"></div>
                <span className="relative">Open Email Client</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>

            {/* Bottom corner decoration */}
            <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
              <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tl from-blue-500/0 via-indigo-500/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-blue-500/10 group-hover:via-indigo-500/10"></div>
            </div>
          </div>

          {/* LinkedIn Card (instead of WhatsApp, adapted “for you”) */}
          <div
            className="group relative rounded-2xl border border-border/60 bg-background/25 backdrop-blur-sm p-8 shadow-sm
            transition-all duration-500 hover:border-violet-500/25 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-2
            animate-fadeInRight"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Icon */}
            <div className="mb-6 inline-flex">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Linkedin className="h-8 w-8 text-white" />
                <div className="absolute inset-0 rounded-2xl bg-violet-400/20 animate-ping"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-violet-500">
                Connect on LinkedIn
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                If you prefer LinkedIn, feel free to connect and message me there.
              </p>

              {/* Location display (nice “for you”) */}
              <div className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background/30 px-4 py-2 text-sm font-medium text-foreground/80">
                <span>{locationText}</span>
              </div>

              {/* Button */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative w-full inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl
                border border-violet-500/25 bg-gradient-to-r from-violet-500 to-indigo-600
                px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20
                transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25 hover:scale-105 active:scale-100 mt-2
                no-underline visited:text-white"
              >
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"></div>
                <span className="relative">Open LinkedIn</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>

            {/* Bottom corner decoration */}
            <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
              <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tl from-violet-500/0 via-indigo-500/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-violet-500/10 group-hover:via-indigo-500/10"></div>
            </div>
          </div>
        </div>

        {/* Bottom dots like your other sections */}
        <div className="mt-16 flex justify-center gap-2 animate-fadeIn delay-600">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-pulse"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>

      {/* Animations (same names you use in Journey/Honors/Projects) */}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes expandWidth { from { width: 0; } to { width: 8rem; } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }

        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
        .animate-expandWidth { animation: expandWidth 1s ease-out; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; opacity: 0; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; opacity: 0; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};