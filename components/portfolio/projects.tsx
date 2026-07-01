"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

const featuredProjects = [
  {
    name: "Model-Based Linear RL",
    description:
      "Implemented Custom Model Based Linear-RL from scratch for inverted-pendulum system. The RL model maintains desired state with ±3% margin of error in angle. Gaussian supervised model for next state prediction achieves 98.7% accuracy on synthetic simulator data.",
    tech: ["Python", "PyTorch", "Reinforcement Learning", "Control Theory"],
    github: "https://github.com/ayushL2007",
    accent: "#06b6d4",
    badge: "98.7% Accuracy",
  },
  {
    name: "Autograd Engine",
    description:
      "Designed and implemented a custom Autograd engine from scratch with secondary data structures and complex operations support. Built multi-layered linear regression, softmax, and sigmoid functions. Complete automatic differentiation implementation.",
    tech: ["Numpy", "Python", "Backpropagation", "Neural Networks"],
    github: "https://github.com/ayushL2007",
    accent: "#a78bfa",
    badge: "From Scratch",
  },
  {
    name: "RBF Kernel SVM",
    description:
      "Designed and implemented Custom RBF Kernel SVM for breast cancer detection achieving ~97.6% accuracy with only 0.3% false negative rate (Type-II Error). Outperformed standard Neural Network trained on 128 iterations with 126 samples, 30 input dimensions.",
    tech: ["Numpy", "Python", "SVM", "Machine Learning"],
    github: "https://github.com/ayushL2007",
    accent: "#22c55e",
    badge: "97.6% Accuracy",
  },
]

const otherProjects = [
  {
    name: "Transformer LM from Scratch",
    description:
      "Implemented a Transformer Language Model from scratch using only Numpy. Trained on 1M-TinyStories Dataset with Reinforcement Learning from Human Feedback (RLHF). Built custom BPE 50K-context window tokenizer. Optimized with multiprocessing for 20% throughput increase.",
    tech: ["Numpy", "Python", "Transformers", "NLP"],
    github: "https://github.com/ayushL2007",
    accent: "#f59e0b",
    badge: "RLHF Implemented",
  },
  {
    name: "OS & Systems Code",
    description:
      "Low-level C/C++ programs exploring OS concepts: memory management, process scheduling, file systems, and hardware-aware optimizations. Core systems projects from DSA and OS coursework.",
    tech: ["C", "C++", "Linux", "Systems Programming"],
    github: "https://github.com/ayushL2007",
    accent: "#3b82f6",
    badge: null,
  },
  {
    name: "LeetCode & Competitive Programming",
    description:
      "1620+ LeetCode rating and solved 150+ coding problems. Achieved Top 4% in Naukri EROH Ring of Honour. Finalist in multiple hackathons: Innovate-X, BotBalls (Top 4), and Code Canvas.",
    tech: ["Python", "C++", "Data Structures", "Algorithms"],
    github: "https://github.com/ayushL2007",
    accent: "#ef4444",
    badge: "Top 4% Ranking",
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
