// src/app/page.tsx
export default function Home() {
  return (
    <main style={page}>
      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <h1 style={name}>Anuj Wadi</h1>
          <p style={subtitle}>Robotics Engineer · AI/ML · Full-Stack</p>

          <p style={lede}>
            I build intelligent systems that move from research to production —
            spanning robotics, machine learning, and full-stack engineering.
          </p>

          <div style={ctaRow}>
            <a href="/projects" style={primaryBtn}>View Projects</a>
            <a href="/Anuj-Wadi-Resume.pdf" target="_blank" rel="noreferrer" style={secondaryBtn}>Resume</a>
            <a href="mailto:anujwadi@gmail.com" style={ghostBtn}>Email</a>
          </div>

          <div style={skills}>
            {["Python", "ROS", "PyTorch", "Computer Vision", "Next.js", "Docker"].map(s => (
              <span key={s} style={pill}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={section}>
        <div style={container}>
          <h2 style={sectionTitle}>Featured Projects</h2>
          <p style={sectionSub}>Selected work in robotics and ML systems.</p>

          <div style={grid}>
            <Card title="Harmony — Mental Health AI" desc="LSTM + BERT pipeline with low-latency inference." />
            <Card title="MyCobot Pro Navigation" desc="Real-time CV + inverse kinematics for autonomous control." />
            <Card title="RL Stock Agent" desc="Q-learning agent with walk-forward backtesting." />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        © {new Date().getFullYear()} Anuj Wadi ·{" "}
        <a href="https://github.com/AnujWadi-Git" style={link}>GitHub</a>{" "}
        ·{" "}
        <a href="https://www.linkedin.com/in/anujwadi/" style={link}>LinkedIn</a>
      </footer>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={card}>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p style={{ color: "#9ca3af", margin: 0 }}>{desc}</p>
    </div>
  );
}

/* styles */
const page = { background: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif" };
const container = { maxWidth: "1100px", margin: "0 auto", padding: "0 1.25rem" };
const hero = { padding: "5rem 0", borderBottom: "1px solid #111" };
const name = { fontSize: "3rem", marginBottom: 6 };
const subtitle = { color: "#9ca3af", marginBottom: 16 };
const lede = { maxWidth: "700px", lineHeight: 1.7, color: "#a3a3a3", marginTop: 0 };
const ctaRow = { marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" };
const primaryBtn = { background: "#3b82f6", padding: "10px 16px", borderRadius: 8, color: "#fff", textDecoration: "none" };
const secondaryBtn = { border: "1px solid #222", padding: "10px 16px", borderRadius: 8, color: "#fff", textDecoration: "none" };
const ghostBtn = { color: "#9ca3af", textDecoration: "none", padding: "10px 16px" };
const skills = { marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" };
const pill = { background: "#111", padding: "6px 10px", borderRadius: 999, fontSize: 13 };
const section = { padding: "3.5rem 0" };
const sectionTitle = { fontSize: "1.6rem", margin: 0 };
const sectionSub = { color: "#9ca3af", marginBottom: 20, marginTop: 6 };
const grid = { display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))" };
const card = { background: "#111", padding: 18, borderRadius: 12, border: "1px solid #1a1a1a" };
const footer = { padding: "2rem", textAlign: "center", color: "#6b7280", borderTop: "1px solid #111" };
const link = { color: "#3b82f6", textDecoration: "none" };
