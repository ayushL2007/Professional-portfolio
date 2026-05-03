"use client"

import { ExternalLink } from "lucide-react"

const experiences = [
  {
    role: "App Dev Lead",
    company: "Google Developer Group IIITK",
    date: "2025 — Present",
    description:
      "Build scalable Native Android apps and run intensive technical sessions for student developers within the GDG IIIT Kalyani community. Responsible for curriculum design and hands-on code reviews.",
    tags: ["Native Android", "Java", "Teaching", "Leadership"],
    accent: "#6366f1",
    link: null,
  },
  {
    role: "Team Lead — ImagineCup Semi-finalist",
    company: "IronLegions · Microsoft ImagineCup",
    date: "Nov 2025 — Jan 2026",
    description:
      "Led IronLegions to the semi-finals of Microsoft ImagineCup by building Course-Craft, an AI-powered educational platform for course and assignment management.",
    tags: ["Ruby on Rails", "Team Lead", "AI", "Microsoft ImagineCup"],
    accent: "#22c55e",
    link: "https://course-craft-3.onrender.com",
  },
  {
    role: "Team Lead — InnovateX Top 10",
    company: "IronLegions · InnovateX",
    date: "Dec 2025 — Jan 2026",
    description:
      "Guided the team to a Top 10 finish at InnovateX by leading development of Signetic — a sign language recognition and communication tool powered by machine learning.",
    tags: ["Machine Learning", "Android", "Team Lead", "InnovateX"],
    accent: "#f89720",
    link: "https://signetic.vercel.app",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            Experience
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="relative">
          {/* Vertical timeline rule */}
          <div
            className="absolute left-[7px] top-3 bottom-3 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-8 relative">
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-0 top-[5px] w-[15px] h-[15px] rounded-full items-center justify-center"
                  style={{ background: "var(--background)", border: `2px solid ${exp.accent}` }}
                >
                  <span
                    className="w-[5px] h-[5px] rounded-full"
                    style={{ background: exp.accent }}
                  />
                </div>

                <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        className="text-base font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {exp.role}
                      </h3>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-200 hover:text-white"
                          style={{ color: "var(--muted-foreground)" }}
                          aria-label={`${exp.role} project link`}
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm mt-0.5" style={{ color: exp.accent }}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono shrink-0"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {exp.date}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{
                        background: `${exp.accent}12`,
                        color: exp.accent,
                        border: `1px solid ${exp.accent}28`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
