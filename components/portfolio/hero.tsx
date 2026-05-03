"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"

const techStack = [
  { name: "Ruby on Rails", color: "#cc3333" },
  { name: "Native Android", color: "#3ddc84" },
  { name: "Java", color: "#f89720" },
  { name: "HTML / CSS", color: "#e34c26" },
  { name: "JavaScript", color: "#f7de1e" },
  { name: "C", color: "#5b94ff" },
  { name: "Linux / OS", color: "#a0a0b0" },
  { name: "NLP & Transformers", color: "#a78bfa" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Git", color: "#f05032" },
]

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Top row — avatar + intro */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-12">
          {/* Avatar */}
          <div className="shrink-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2"
              style={{ borderColor: "var(--accent)" }}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/ayushL2007?v=4"
                alt="Ayush Lahiri"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Intro text */}
          <div>
            <p
              className="font-mono text-sm mb-2 animate-fade-up"
              style={{ color: "var(--accent)", animationDelay: "0.15s" }}
            >
              Hi, I&apos;m
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-3 animate-fade-up text-balance leading-tight"
              style={{ color: "var(--foreground)", animationDelay: "0.2s" }}
            >
              Ayush Lahiri
            </h1>
            <h2
              className="text-lg md:text-xl font-medium animate-fade-up"
              style={{ color: "var(--muted-foreground)", animationDelay: "0.3s" }}
            >
              Full-Stack Developer &amp; CS Student at{" "}
              <span style={{ color: "var(--foreground)" }}>IIIT Kalyani</span>
            </h2>
          </div>
        </div>

        {/* Bio */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mb-8 animate-fade-up"
          style={{ color: "var(--muted-foreground)", animationDelay: "0.35s" }}
        >
          I build robust, full-stack solutions — specializing in{" "}
          <span style={{ color: "#cc3333", fontWeight: 600 }}>Ruby on Rails</span> back-end
          engineering and{" "}
          <span style={{ color: "#3ddc84", fontWeight: 600 }}>Native Android Development</span>{" "}
          with Java. Strong foundation in{" "}
          <span style={{ color: "var(--foreground)" }}>Operating Systems</span> and{" "}
          <span style={{ color: "var(--foreground)" }}>Computer Architecture</span>. Currently
          exploring{" "}
          <span style={{ color: "var(--accent)" }}>NLP &amp; Transformers</span>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-3 mb-14 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-85 active:scale-95"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            View Projects
          </button>
          <a
            href="mailto:ayushlahiri2007@gmail.com"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:border-indigo-500 hover:text-white"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            Contact Me
          </a>
          <div className="flex items-center gap-3 ml-1">
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
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            animationDelay: "0.55s",
          }}
        >
          <div className="flex animate-scroll-left gap-3" style={{ width: "max-content" }}>
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap border"
                style={{
                  borderColor: `${tech.color}35`,
                  background: `${tech.color}0d`,
                  color: tech.color,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: tech.color }}
                />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-14 flex items-center gap-2 text-xs font-mono transition-colors duration-200 hover:text-white animate-fade-in"
          style={{ color: "var(--muted-foreground)", animationDelay: "0.7s" }}
          aria-label="Scroll to projects"
        >
          <ArrowDown size={13} />
          scroll down
        </button>
      </div>
    </section>
  )
}
