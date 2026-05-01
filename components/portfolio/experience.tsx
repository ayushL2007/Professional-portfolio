"use client"

const experiences = [
  {
    role: "App Dev Lead",
    company: "Google Developer Group IIITK",
    date: "2025 — Present",
    description:
      "Built scalable Native Android apps and conducted intensive technical sessions for aspiring Android developers within the GDG community.",
    tags: ["Native Android", "Java", "Teaching", "Leadership"],
    accent: "#6366f1",
  },
  {
    role: "Team Lead — ImagineCup Semi-finalist",
    company: "IronLegions Team",
    date: "Nov 2025 — Jan 2026",
    description:
      "Led the team to the semi-finals of Microsoft ImagineCup by building Course-Craft, a specialized AI-powered platform for educational course management.",
    tags: ["Ruby on Rails", "Team Lead", "Microsoft ImagineCup"],
    accent: "#22c55e",
    link: "https://course-craft-3.onrender.com",
  },
  {
    role: "Team Lead — InnovateX Top 10",
    company: "IronLegions Team",
    date: "Dec 2025 — Jan 2026",
    description:
      "Guided the team to a Top 10 finish in InnovateX, spearheading the development of Signetic — a sign language recognition and communication tool.",
    tags: ["Machine Learning", "Android", "Team Lead", "InnovateX"],
    accent: "#ef4444",
    link: "https://signetic.vercel.app",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Experience
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div
                  className="hidden md:block absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[3.5px]"
                  style={{ background: exp.accent }}
                />

                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: exp.accent }}
                    >
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

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md font-mono"
                      style={{
                        background: `${exp.accent}12`,
                        color: exp.accent,
                        border: `1px solid ${exp.accent}25`,
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
