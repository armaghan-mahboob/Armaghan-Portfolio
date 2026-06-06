import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const links = [
  {
    icon: <FiMail size={22} />,
    label: "Email",
    value: "armaghanmahboob.dev@gmail.com",
    href: "mailto:armaghanmahboob.dev@gmail.com",
  },
  {
    icon: <FiGithub size={22} />,
    label: "GitHub",
    value: "github.com/armaghan-mahboob",
    href: "https://github.com/armaghan-mahboob",
  },
  {
    icon: <FiLinkedin size={22} />,
    label: "LinkedIn",
    value: "linkedin.com/in/armaghan-mahboob",
    href: "https://linkedin.com/in/armaghan-mahboob",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: "48px" }}>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "0.12em",
            color: "var(--accent)",
            textTransform: "uppercase",
          }}
        >
          Get in touch
        </span>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "700",
            color: "#f0f0f0",
            margin: "10px 0 16px",
            letterSpacing: "-0.02em",
          }}
        >
          Let's work together
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.8",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          I'm currently open to junior developer roles and internships in
          Rawalpindi / Islamabad. If you have an opportunity or just want to say
          hi, my inbox is open.
        </p>
      </motion.div>

      {/* Contact cards */}
      <motion.div
        {...fadeUp(0.15)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginBottom: "48px",
        }}
      >
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel="noreferrer"
            {...fadeUp(0.1 + i * 0.08)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px 24px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              textDecoration: "none",
              transition: "border-color 0.2s, transform 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(45,212,191,0.3)";
              e.currentTarget.style.background = "rgba(45,212,191,0.04)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                flexShrink: 0,
                background: "rgba(45,212,191,0.08)",
                border: "1px solid rgba(45,212,191,0.15)",
                color: "var(--accent)",
              }}
            >
              {link.icon}
            </span>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "16px",
                  color: "#555",
                  fontWeight: "500",
                  marginBottom: "2px",
                }}
              >
                {link.label}
              </div>
              <div
                style={{ fontSize: "18px", color: "#ccc", fontWeight: "500" }}
              >
                {link.value}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div {...fadeUp(0.4)}>
        <a
          href="mailto:armaghanmahboob.dev@gmail.com"
          style={{
            display: "inline-block",
            padding: "14px 36px",
            borderRadius: "12px",
            background: "var(--accent)",
            color: "#0a0a0a",
            fontWeight: "700",
            fontSize: "16px",
            textDecoration: "none",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Say Hello 👋
        </a>
      </motion.div>
    </section>
  );
}
