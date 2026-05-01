"use client"

import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "IIIT Kalyani, Kolkata",
    date: "Aug 2025 — July 2029",
    points: [
      "Specializing in Systems Programming and Native Android Development.",
      "Deep interest in OS internals and hardware-aware code.",
      "Currently exploring NLP, Transformers, and Neural Networks.",
    ],
    accent: "#6366f1",
  },
  {
    degree: "Higher Secondary Education (PCM)",
    institution: "Mothers' Int'l Academy",
    date: "2023 — 2025",
    points: [
      "Graduated with Physics, Chemistry, and Mathematics.",
    ],
    accent: "#3b82f6",
  },
  {
    degree: "High School (ICSE)",
    institution: "Carmel School",
    date: "2014 — 2023",
    points: [
      "Graduated with 93.4% overall.",
      "Excellent scores in Maths & Computer Science.",
    ],
    accent: "#22c55e",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Education
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl border p-6 flex gap-4 transition-all duration-300"
              style={{
                background: "var(--surface-raised)",
                borderColor: "var(--border)",
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: `${edu.accent}15`,
                  border: `1px solid ${edu.accent}30`,
                }}
              >
                <GraduationCap size={18} style={{ color: edu.accent }} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {edu.degree}
                  </h3>
                  <span
                    className="text-xs font-mono shrink-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {edu.date}
                  </span>
                </div>
                <p
                  className="text-sm mb-3"
                  style={{ color: edu.accent }}
                >
                  {edu.institution}
                </p>
                <ul className="flex flex-col gap-1">
                  {edu.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm flex items-start gap-2"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <span
                        className="mt-2 w-1 h-1 rounded-full shrink-0"
                        style={{ background: edu.accent }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
