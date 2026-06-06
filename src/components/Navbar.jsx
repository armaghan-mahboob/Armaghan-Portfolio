import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition:
            "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
          background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled
            ? "0.5px solid var(--accent)"
            : "1px solid transparent",
        }}
      >
        <nav
          style={{
            maxWidth: "100%",
            margin: "0 30px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                fontWeight: "700",
                color: "#0a0a0a",
              }}
            >
              A
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "20px", color: "#e5e5e5" }}
            >
              Armaghan
            </span>
          </a>

          {/* Desktop links */}
          <ul
            style={{
              display: "flex",
              gap: "8px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "500",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    color: active === link.href ? "var(--accent)" : "#aaa",
                    background:
                      active === link.href
                        ? "var(--accent-glow)"
                        : "transparent",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (active !== link.href) e.target.style.color = "#e5e5e5";
                  }}
                  onMouseLeave={(e) => {
                    if (active !== link.href) e.target.style.color = "#aaa";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleLink(e, "#contact")}
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "#0a0a0a",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Hire me
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{
                  rotate: menuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                  y: menuOpen ? (i === 0 ? 9 : i === 2 ? -9 : 0) : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
                transition={{ duration: 0.25 }}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--accent)",
                  borderRadius: "2px",
                  transformOrigin: "center",
                }}
              />
            ))}
          </button>
        </nav>
      </motion.header>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 49,
              background: "rgba(10,10,10,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "0.5px solid rgba(45,212,191,0.12)",
              padding: "16px 24px 24px",
            }}
          >
            {[...navLinks, { label: "Hire me", href: "#contact" }].map(
              (link, i) => (
                <motion.a
                  key={link.href + i}
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    fontSize: "16px",
                    fontWeight: "500",
                    color:
                      link.label === "Hire me" ? "var(--accent)" : "#e5e5e5",
                    textDecoration: "none",
                    borderBottom: "0.5px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {link.label}
                </motion.a>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none  !important; }
        @media (max-width: 640px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
        }
      `}</style>
    </>
  );
}
