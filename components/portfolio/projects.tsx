"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"

const featuredProjects = [
  {
    name: "Course-Craft",
    description:
      "An AI-powered educational management platform built for Microsoft ImagineCup. Helps institutions manage courses, assignments, and student progress with intelligent insights.",
    tech: ["Ruby on Rails", "Full Stack", "HTML/CSS", "JavaScript"],
    github: "https://github.com/ayushL2007",
    live: "https://course-craft-3.onrender.com",
    accent: "#6366f1",
  },
  {
    name: "Signetic",
    description:
      "A sign language recognition and communication tool developed for InnovateX, achieving Top 10 finish. Bridges the communication gap for the hearing-impaired community.",
    tech: ["Machine Learning", "Native Android", "Java", "Python"],
    github: "https://github.com/ayushL2007",
    live: "https://signetic.vercel.app",
    accent: "#22c55e",
  },
  {
    name: "Portfolio",
    description:
      "This very portfolio — a dynamic Ruby on Rails app that fetches live GitHub repositories via the Octokit API, with a claymorphism design system and real-time data refresh.",
    tech: ["Ruby on Rails", "Octokit API", "CSS", "JavaScript"],
    github: "https://github.com/ayushL2007/Portfolio",
    live: "https://ayush-uyj6.onrender.com",
    accent: "#ef4444",
  },
]

const otherProjects = [
  {
    name: "Android Projects",
    description: "Collection of native Android applications built with Java, covering various use cases from utility apps to experimental features.",
    tech: ["Java", "XML", "Native Android"],
    github: "https://github.com/ayushL2007",
    accent: "#f89720",
  },
  {
    name: "OS & Systems Code",
    description: "Low-level C programs exploring operating system concepts — memory management, process scheduling, and hardware-aware optimizations.",
    tech: ["C", "Linux", "Systems Programming"],
    github: "https://github.com/ayushL2007",
    accent: "#3b82f6",
  },
  {
    name: "Web Experiments",
    description: "Various front-end and full-stack web experiments exploring JavaScript, HTML/CSS animations, and Ruby on Rails APIs.",
    tech: ["JavaScript", "HTML", "CSS", "Rails"],
    github: "https://github.com/ayushL2007",
    accent: "#a78bfa",
  },
]

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof featuredProjects)[0] | (typeof otherProjects)[0]
  featured?: boolean
}) {
  const live = "live" in project ? project.live : undefined

  return (
    <div
      className="group rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 border hover:border-opacity-60"
      style={{
        background: "var(--surface-raised)",
        borderColor: "var(--border)",
        borderTopColor: project.accent + "60",
        borderTopWidth: "2px",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className="text-lg font-semibold leading-tight"
          style={{ color: "var(--foreground)" }}
        >
          {project.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
            style={{ color: "var(--muted-foreground)" }}
            aria-label={`${project.name} GitHub`}
          >
            <Github size={17} />
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md font-mono"
            style={{
              background: `${project.accent}15`,
              color: project.accent,
              border: `1px solid ${project.accent}30`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Projects
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.name} project={p} featured />
          ))}
        </div>

        {/* Toggle more */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden transition-all duration-500 ${showMore ? "max-h-screen opacity-100 mb-8" : "max-h-0 opacity-0"}`}
        >
          {otherProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border transition-all duration-200 hover:border-indigo-500"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted-foreground)",
            }}
          >
            {showMore ? (
              <>
                <ChevronUp size={15} />
                Show less
              </>
            ) : (
              <>
                <ChevronDown size={15} />
                Show more projects
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
