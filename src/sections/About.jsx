import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "React Native", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "C# / .NET", "REST APIs", "JWT Auth"],
  },
  { category: "Database", items: ["PostgreSQL", "SQL Server"] },
  {
    category: "Tools",
    items: ["Git & GitHub", "Vite", "Postman", "VS Code"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <motion.div
        {...fadeUp(0)}
        style={{ marginBottom: "48px", textAlign: "center" }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "0.12em",
            color: "var(--accent)",
            textTransform: "uppercase",
          }}
        >
          About me
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
          Who I am
        </h2>
      </motion.div>

      {/* Bio + image row */}
      <motion.div
        {...fadeUp(0.1)}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          marginBottom: "64px",
          alignItems: "center",
        }}
      >
        {/* Avatar placeholder */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(45,212,191,0.15), rgba(15,118,110,0.08))",
              border: "1px solid rgba(45,212,191,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/me4.png"
              alt="Armaghan"
              style={{
                width: "200px",
                height: "170px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Bio text */}
        <div>
          <p
            style={{
              fontSize: "18px",
              color: "#888",
              lineHeight: "1.85",
              marginBottom: "20px",
            }}
          >
            Computer Science graduate from{" "}
            <span style={{ color: "var(--accent)" }}>
              Arid Agriculture University
            </span>
            , Rawalpindi, graduated in 2026 with a CGPA of 3.5 on a merit
            scholarship.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#888",
              lineHeight: "1.85",
              marginBottom: "28px",
            }}
          >
            I enjoy building full-stack web and mobile applications — from REST
            APIs and auth systems to polished React frontends. I'm actively
            looking for junior developer or internship roles in the Rawalpindi /
            Islamabad market.
          </p>

          {/* Quick stats */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              { value: "3.5", label: "CGPA" },
              { value: "10+", label: "Projects" },
              { value: "2026", label: "Graduated" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "var(--accent)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontSize: "13px", color: "#555", marginTop: "2px" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div {...fadeUp(0.2)}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#f0f0f0",
            marginBottom: "28px",
            textAlign: "center",
          }}
        >
          Tech Stack
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              {...fadeUp(0.1 * i)}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "24px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(45,212,191,0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
              }
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "13px",
                      fontWeight: "500",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      background: "rgba(45,212,191,0.06)",
                      border: "1px solid rgba(45,212,191,0.12)",
                      color: "#ccc",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
