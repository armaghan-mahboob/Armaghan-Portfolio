import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const projects = [
  {
    title: "Ride-Sharing App",
    description:
      "A full-featured ride-sharing mobile app built as my Final Year Project. Includes real-time location tracking, ride booking, driver/passenger roles, and live trip status.",
    tags: ["React Native", "C#", "SQL Server", "Google Maps API"],
    github: "https://github.com/armaghan-mahboob",
    live: null,
    featured: true,
  },
  {
    title: "Todo App",
    description:
      "A Redux-powered task manager with full CRUD operations, local persistence, and a clean glassmorphism UI built with React and Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    github: "https://github.com/armaghan-mahboob",
    live: null,
    featured: true,
  },
  {
    title: "Naat Khuwaan Platform",
    description:
      "A web platform for discovering and streaming Naat recitations. Features user signup/login, dynamic content management for Naat uploads, and structured searching/listing/filtering of reciters.",
    tags: ["C#", "ASP.NET MVC", "SQL Server", "REST API"],
    github: "https://github.com/armaghan-mahboob",
    live: null,
    featured: false,
  },
  {
    title: "Auth Starter SaaS",
    description:
      "A production-ready authentication boilerplate with JWT access/refresh tokens, protected routes, register, login, and logout — built from scratch.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    github: "https://github.com/armaghan-mahboob",
    live: null,
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "A clean weather app with live data from OpenWeatherMap API, glassmorphism UI, city search, and dynamic backgrounds based on weather conditions.",
    tags: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    github: "https://github.com/armaghan-mahboob",
    live: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "100px 24px", maxWidth: "1000px", margin: "0 auto" }}
    >
      {/* Heading */}
      <motion.div
        {...fadeUp(0)}
        style={{ marginBottom: "48px", textAlign: "center" }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "0.12em",
            color: "var(--accent)",
            textTransform: "uppercase",
          }}
        >
          My work
        </span>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "700",
            color: "#f0f0f0",
            margin: "10px 0 0",
            letterSpacing: "-0.02em",
          }}
        >
          Projects
        </h2>
      </motion.div>

      {/* Featured projects — large cards */}
      <div style={{ display: "grid", gap: "20px", marginBottom: "20px" }}>
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp(0.1 + i * 0.1)}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "32px",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,212,191,0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      letterSpacing: "0.1em",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                    }}
                  >
                    Featured
                  </span>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#f0f0f0",
                      margin: "6px 0 0",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#666",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#666")
                      }
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#666",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#666")
                      }
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p
                style={{
                  fontSize: "16px",
                  color: "#777",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      padding: "4px 12px",
                      borderRadius: "6px",
                      background: "rgba(45,212,191,0.06)",
                      border: "1px solid rgba(45,212,191,0.12)",
                      color: "#aaa",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
      </div>

      {/* Other projects — smaller 2-col grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {projects
          .filter((p) => !p.featured)
          .map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp(0.3 + i * 0.1)}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "24px",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,212,191,0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#f0f0f0",
                  }}
                >
                  {project.title}
                </h3>
                <div style={{ display: "flex", gap: "10px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#666",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#666")
                      }
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#666",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#666")
                      }
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: "1.75",
                  marginBottom: "16px",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: "rgba(45,212,191,0.06)",
                      border: "1px solid rgba(45,212,191,0.12)",
                      color: "#aaa",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
