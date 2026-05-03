"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

const featuredProjects = [
  {
    name: "Course-Craft",
    description:
      "AI-powered educational management platform built for Microsoft ImagineCup (Semi-finalist). Helps institutions manage courses, assignments, and student progress.",
    tech: ["Ruby on Rails", "Full Stack", "JavaScript", "PostgreSQL"],
    github: "https://github.com/ayushL2007",
    live: "https://course-craft-3.onrender.com",
    accent: "#6366f1",
    badge: "ImagineCup Semi-finalist",
  },
  {
    name: "Signetic",
    description:
      "Sign language recognition and communication tool developed for InnovateX (Top 10). Bridges the communication gap for the hearing-impaired using ML models.",
    tech: ["Machine Learning", "Native Android", "Java", "Python"],
    github: "https://github.com/ayushL2007",
    live: "https://signetic.vercel.app",
    accent: "#22c55e",
    badge: "InnovateX Top 10",
  },
  {
    name: "Portfolio",
    description:
      "Dynamic Ruby on Rails app that fetches live GitHub repos via the Octokit API. Features a claymorphism design and real-time data refresh with smart 24h caching.",
    tech: ["Ruby on Rails", "Octokit API", "CSS", "JavaScript"],
    github: "https://github.com/ayushL2007/Portfolio",
    live: "https://ayush-uyj6.onrender.com",
    accent: "#ef4444",
    badge: null,
  },
]

const otherProjects = [
  {
    name: "Android Projects",
    description:
      "Collection of native Android apps built with Java — utility tools, experimental UI patterns, and hardware-integrated features.",
    tech: ["Java", "XML", "Android SDK"],
    github: "https://github.com/ayushL2007",
    accent: "#f89720",
    badge: null,
  },
  {
    name: "OS & Systems Code",
    description:
      "Low-level C programs exploring OS concepts: memory management, process scheduling, file systems, and hardware-aware optimizations.",
    tech: ["C", "Linux", "Systems Programming"],
    github: "https://github.com/ayushL2007",
    accent: "#3b82f6",
    badge: null,
  },
  {
    name: "Web Experiments",
    description:
      "Front-end and full-stack web experiments exploring JavaScript animations, Ruby on Rails APIs, and CSS design systems.",
    tech: ["JavaScript", "HTML", "CSS", "Rails"],
    github: "https://github.com/ayushL2007",
    accent: "#a78bfa",
    badge: null,
  },
]

type Project = {
  name: string
  description: string
  tech: string[]
  github: string
  live?: string
  accent: string
  badge: string | null
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group rounded-xl p-5 flex flex-col gap-4 border transition-colors duration-300"
      style={{
        background: "var(--surface-raised)",
        borderColor: "var(--border)",
        borderTopColor: project.accent,
        borderTopWidth: "2px",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3
            className="text-base font-semibold leading-snug"
            style={{ color: "var(--foreground)" }}
          >
            {project.name}
          </h3>
          {project.badge && (
            <span
              className="inline-block text-xs mt-1 px-2 py-0.5 rounded font-mono"
              style={{
                background: `${project.accent}15`,
                color: project.accent,
                border: `1px solid ${project.accent}30`,
              }}
            >
              {project.badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0 pt-0.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
            style={{ color: "var(--muted-foreground)" }}
            aria-label={`${project.name} GitHub`}
          >
            <Github size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded font-mono"
            style={{
              background: `${project.accent}12`,
              color: project.accent,
              border: `1px solid ${project.accent}28`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Projects() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-3">
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            Projects
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <a
            href="https://github.com/ayushL2007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono shrink-0 transition-colors duration-200 hover:text-white"
            style={{ color: "var(--muted-foreground)" }}
          >
            <Github size={13} />
            GitHub
          </a>
        </div>
        <p className="text-sm mb-10" style={{ color: "var(--muted-foreground)" }}>
          A mix of competition-winning builds, tooling, and experiments.
        </p>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        {/* More projects */}
        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {otherProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border transition-all duration-200 hover:border-indigo-500 hover:text-white"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <ChevronDown
              size={13}
              className="transition-transform duration-300"
              style={{ transform: showMore ? "rotate(180deg)" : "rotate(0deg)" }}
            />
            {showMore ? "Show less" : "Show more projects"}
          </button>
        </div>
      </div>
    </section>
  )
}
