// src/app/page.tsx
import React from "react";

export default function Home() {
  return (
    <main style={page}>
      <section style={hero}>
        <div style={heroInner}>
          <h1 style={name}>Anuj Wadi</h1>
          <p style={subtitle}>
            Robotics Engineer · AI/ML · Full-Stack  
            <span style={{ color: "var(--text-tertiary, #9ca3af)" }}> — I build reliable systems from research to production</span>
          </p>

          <p style={lede}>
            MS in Robotics & Autonomous Systems. I ship production ML, real-time robotics systems, and full-stack web tools. My focus: practical ML, low-latency inference, and robust engineering.
          </p>

          <div style={ctaRow}>
            <a href="/projects" style={primaryButton}>View Projects →</a>
            <a href="/Anuj Wadi Resume.pdf" style={secondaryButton} target="_blank" rel="noreferrer">Download Resume</a>
            <a href="mailto:anujwadi@gmail.com" style={ghostButton}>Email</a>
          </div>

          <div style={skillRow}>
            {[
              "Python",
              "ROS",
              "PyTorch",
              "Computer Vision",
              "Next.js",
              "Docker",
            ].map((s) => (
              <span key={s} style={skillPill}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={projectsSection}>
        <h2 style={sectionTitle}>Featured Projects</h2>
        <p style={sectionSubtitle}>Selected work in robotics, ML, and production systems.</p>

        <div style={cardsGrid}>
          <ProjectCard
            title="Harmony — Mental Health AI"
            desc="LSTM + BERT pipeline for emotion detection; deployed inference with 180ms latency."
            tags={["TensorFlow", "BERT", "Flask"]}
            href="#"
          />
          <ProjectCard
            title="MyCobot Pro Navigation"
            desc="Real-time CV + custom inverse kinematics for autonomous arm navigation."
            tags={["ROS", "OpenCV", "IK"]}
            href="#"
          />
          <ProjectCard
            title="RL Stock Agent"
            desc="Q-learning trading agent with walk-forward validation and backtesting."
            tags={["Reinforcement Learning", "Pandas", "Backtest"]}
            href="#"
          />
        </div>

        <div style={{ textAlign: "center", marginTop: 28 }}>
          <a href="/projects" style={linkMore}>See all projects</a>
        </div>
      </section>

      <footer style={footer}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem", color: "var(--text-tertiary, #9ca3af)" }}>
          © {new Date().getFullYear()} Anuj Wadi — <a href="https://github.com/AnujWadi-Git" style={footerLink}>GitHub</a> · <a href="https://www.linkedin.com/in/anujwadi/" style={footerLink}>LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Small components ---------- */

function ProjectCard({ title, desc, tags, href }: { title: string; desc: string; tags: string[]; href: string }) {
  return (
    <article style={card}>
      <div style={cardBody}>
        <h3 style={cardTitle}>{title}</h3>
        <p style={cardDesc}>{desc}</p>
        <div style={tagRow}>
          {tags.map((t) => (
            <span key={t} style={tag}>{t}</span>
          ))}
        </div>
      </div>
      <div style={cardFooter}>
        <a href={href} style={cardLink}>View case study →</a>
      </div>
    </article>
  );
}

/* ---------- Styles (inline so build is simple) ---------- */

const page: React.CSSProperties = {
  fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  background: "var(--bg-primary, #0a0a0a)",
  color: "var(--text-primary, #f5f5f5)",
  minHeight: "100vh",
  lineHeight: 1.6,
};

const hero: React.CSSProperties = {
  padding: "5rem 1rem",
  borderBottom: "1px solid rgba(255,255,255,0.04)",
};

const heroInner: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
};

const name: React.CSSProperties = {
  fontSize: "3rem",
  margin: 0,
  letterSpacing: "-0.02em",
};

const subtitle: React.CSSProperties = {
  marginTop: 8,
  color: "var(--text-secondary, #a3a3a3)",
  fontSize: "1.125rem",
};

const lede: React.CSSProperties = {
  marginTop: 20,
  maxWidth: 760,
  color: "var(--text-secondary, #a3a3a3)",
  fontSize: "1.05rem",
};

const ctaRow: React.CSSProperties = {
  marginTop: 22,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const primaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "var(--accent-primary, #3b82f6)",
  color: "#fff",
  padding: "0.8rem 1.2rem",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 600,
};

const secondaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.06)",
  color: "var(--text-primary, #f5f5f5)",
  padding: "0.65rem 1rem",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 500,
};

const ghostButton: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "var(--text-secondary, #a3a3a3)",
  padding: "0.5rem 0.8rem",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 500,
  border: "none",
};

const skillRow: React.CSSProperties = {
  marginTop: 18,
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
};

const skillPill: React.CSSProperties = {
  fontSize: 13,
  padding: "6px 10px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.03)",
  color: "var(--text-secondary, #a3a3a3)",
};

const projectsSection: React.CSSProperties = {
  padding: "3rem 1rem",
};

const sectionTitle: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  fontSize: "1.6rem",
  marginBottom: 6,
};

const sectionSubtitle: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto 1.5rem",
  color: "var(--text-secondary, #a3a3a3)",
};

const cardsGrid: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 18,
  marginTop: 16,
};

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.02)",
  borderRadius: 12,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  minHeight: 160,
  border: "1px solid rgba(255,255,255,0.04)",
};

const cardBody: React.CSSProperties = {
  padding: 18,
  flex: 1,
};

const cardTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 18,
};

const cardDesc: React.CSSProperties = {
  marginTop: 8,
  color: "var(--text-secondary, #a3a3a3)",
  fontSize: 14,
};

const tagRow: React.CSSProperties = {
  marginTop: 12,
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
};

const tag: React.CSSProperties = {
  fontSize: 12,
  padding: "6px 8px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.03)",
  color: "var(--text-secondary, #a3a3a3)",
};

const cardFooter: React.CSSProperties = {
  padding: "12px 18px",
  borderTop: "1px solid rgba(255,255,255,0.03)",
  display: "flex",
  justifyContent: "flex-end",
};

const cardLink: React.CSSProperties = {
  color: "var(--accent-primary, #3b82f6)",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 14,
};

const linkMore: React.CSSProperties = {
  color: "var(--accent-primary, #3b82f6)",
  textDecoration: "none",
  fontWeight: 600,
};

const footer: React.CSSProperties = {
  marginTop: "3rem",
  borderTop: "1px solid rgba(255,255,255,0.04)",
  background: "transparent",
};
