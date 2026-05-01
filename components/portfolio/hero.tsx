"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

const techStack = [
  { name: "Ruby on Rails", color: "#cc0000" },
  { name: "Native Android", color: "#3ddc84" },
  { name: "Java", color: "#f89720" },
  { name: "HTML / CSS", color: "#e34c26" },
  { name: "JavaScript", color: "#f7de1e" },
  { name: "C", color: "#5b94ff" },
  { name: "Linux / OS", color: "#ffffff" },
  { name: "NLP & Transformers", color: "#a78bfa" },
]

export function Hero() {
  const handleScroll = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16 px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Eyebrow */}
        <p
          className="font-mono text-sm mb-4 animate-fade-up"
          style={{ color: "var(--accent)", animationDelay: "0.1s" }}
        >
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-up text-balance"
          style={{ color: "var(--foreground)", animationDelay: "0.2s" }}
        >
          Ayush Lahiri
        </h1>

        {/* Title */}
        <h2
          className="text-xl md:text-2xl font-medium mb-6 animate-fade-up"
          style={{ color: "var(--muted-foreground)", animationDelay: "0.3s" }}
        >
          Full-Stack Developer &amp; CS Student at{" "}
          <span style={{ color: "var(--foreground)" }}>IIIT Kalyani</span>
        </h2>

        {/* Bio */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mb-8 animate-fade-up"
          style={{ color: "var(--muted-foreground)", animationDelay: "0.4s" }}
        >
          I build robust, full-stack solutions — specializing in{" "}
          <span style={{ color: "#cc3333", fontWeight: 600 }}>Ruby on Rails</span> back-end engineering
          and{" "}
          <span style={{ color: "#3ddc84", fontWeight: 600 }}>Native Android Development</span>{" "}
          with Java. I have a strong foundation in{" "}
          <span style={{ color: "var(--foreground)" }}>Operating Systems</span> and{" "}
          <span style={{ color: "var(--foreground)" }}>Computer Organization</span>, and I&apos;m
          currently exploring <span style={{ color: "var(--accent)" }}>Neural Networks, NLP &amp; Transformers</span>.
        </p>

        {/* CTA + Socials */}
        <div className="flex flex-wrap items-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
          >
            View Projects
          </button>
          <a
            href="mailto:ayushlahiri2007@gmail.com"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:border-indigo-500"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            Contact Me
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://github.com/ayushL2007"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-lahiri"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ayushlahiri2007@gmail.com"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Tech scroll strip */}
        <div
          className="relative overflow-hidden animate-fade-in"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            animationDelay: "0.6s",
          }}
        >
          <div className="flex animate-scroll-left gap-3" style={{ width: "max-content" }}>
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold whitespace-nowrap border"
                style={{
                  borderColor: `${tech.color}40`,
                  background: `${tech.color}10`,
                  color: tech.color,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: tech.color }}
                />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <button
          onClick={handleScroll}
          className="mt-16 flex items-center gap-2 text-xs transition-colors duration-200 hover:text-white animate-fade-in"
          style={{ color: "var(--muted-foreground)", animationDelay: "0.8s" }}
          aria-label="Scroll to projects"
        >
          <ArrowDown size={14} />
          scroll
        </button>
      </div>
    </section>
  )
}
