import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--accent)",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Social icons */}
        <div style={{ display: "flex", gap: "12px" }}>
          {[
            {
              icon: <FiGithub size={18} />,
              href: "https://github.com/armaghan-mahboob",
              label: "GitHub",
            },
            {
              icon: <FiLinkedin size={18} />,
              href: "https://linkedin.com/in/armaghan-mahboob",
              label: "LinkedIn",
            },
            {
              icon: <FiMail size={18} />,
              href: "mailto:armaghanmahboob.dev@gmail.com",
              label: "Email",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "9px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#555",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "rgba(45,212,191,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#555";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Credit */}
        <p style={{ fontSize: "13px", color: "grey", margin: 0 }}>
          Designed & built by{" "}
          <span
            style={{
              color: "var(--accent)",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Armaghan
          </span>
          {" · "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
