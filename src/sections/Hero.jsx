import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,212,191,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "720px",
          position: "relative",
          zIndex: 1,
          marginTop: "10vh",
        }}
      >
        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "0.08em",
              padding: "8px 14px",
              borderRadius: "20px",
              background: "rgba(45,212,191,0.1)",
              border: "2px solid rgba(45,212,191,0.3)",
              color: "var(--accent)",
              marginBottom: "28px",
            }}
          >
            Available for junior roles & internships
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontSize: "clamp(42px, 5vw, 80px)",
            fontWeight: "800",
            lineHeight: "1.1",
            margin: "0 0 16px",
            color: "#f0f0f0",
            letterSpacing: "-0.02em",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2dd4bf, #0f766e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Armaghan
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.3)}
          style={{
            fontSize: "clamp(18px, 3vw, 22px)",
            fontWeight: "500",
            color: "#888",
            margin: "0 0 10px",
          }}
        >
          Full-Stack Developer & CS Graduate
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.75",
            margin: "0 0 20px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          I build clean, fast web & mobile apps using React, Node.js, and
          PostgreSQL. Graduated 2026 from Arid Agriculture University,
          Rawalpindi.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "35px",
          }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: "10px",
              background: "var(--accent)",
              color: "#0a0a0a",
              fontWeight: "600",
              fontSize: "15px",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = "0.85";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = "1";
              e.target.style.transform = "translateY(0)";
            }}
          >
            View Projects
          </a>
          <a
            href="/Armaghan_Mahboob_CV.pdf"
            download
            style={{
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: "10px",
              background: "transparent",
              border: "0.5px solid rgba(45,212,191,0.4)",
              color: "var(--accent)",
              fontWeight: "600",
              fontSize: "15px",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(45,212,191,0.08)";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.6)}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            marginBottom: "64px",
          }}
        >
          {[
            {
              icon: <FiGithub size={20} />,
              href: "https://github.com/armaghan-mahboob",
              label: "GitHub",
            },
            {
              icon: <FiLinkedin size={20} />,
              href: "https://linkedin.com/in/armaghan-mahboob",
              label: "LinkedIn",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                color: "#aaa",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "rgba(45,212,191,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#aaa";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "#444",
          fontSize: "11px",
          letterSpacing: "0.08em",
        }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <FiArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
