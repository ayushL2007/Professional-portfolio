"use client"

import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "IIIT Kalyani, West Bengal",
    date: "Sept 2025 — Jun 2029",
    points: [
      "CGPA: 8.26/10",
      "Specializing in Machine Learning, Deep Learning, and Systems Programming.",
      "Completed: CS229 (ML), 6.086 (Hands-on Deep Learning), CS231N (Computer Vision).",
      "Strong foundation in OS internals, Computer Architecture, and Advanced Algorithms.",
    ],
    accent: "#06b6d4",
  },
  {
    degree: "Higher Secondary Education (PCM)",
    institution: "Mothers' International Academy",
    date: "Apr 2023 — Apr 2025",
    points: [
      "Completed senior secondary with Physics, Chemistry, and Mathematics.",
      "Percentage: 78%",
    ],
    accent: "#3b82f6",
  },
  {
    degree: "High School (CISCE)",
    institution: "Carmel School",
    date: "Passed Apr 2023",
    points: [
      "Graduated with 93.4% overall score.",
      "Distinction in Mathematics and Computer Science.",
    ],
    accent: "#22c55e",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            Education
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <article
              key={i}
              className="rounded-xl border p-5 flex gap-4 transition-colors duration-300 hover:border-opacity-60"
              style={{
                background: "var(--surface-raised)",
                borderColor: "var(--border)",
              }}
            >
              {/* Icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: `${edu.accent}12`,
                  border: `1px solid ${edu.accent}28`,
                }}
              >
                <GraduationCap size={16} style={{ color: edu.accent }} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3
                    className="text-sm font-semibold"
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
                <p className="text-xs mb-2.5" style={{ color: edu.accent }}>
                  {edu.institution}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {edu.points.map((point) => (
                    <li
                      key={point}
                      className="text-xs flex items-start gap-2"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <span
                        className="mt-[5px] w-1 h-1 rounded-full shrink-0"
                        style={{ background: edu.accent }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
