export default function Home() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Anuj Wadi</h1>

      <p style={{ color: "#9ca3af", fontSize: "1.2rem", marginBottom: "1.5rem" }}>
        Robotics Engineer · AI/ML · Full-Stack
      </p>

      <p style={{ maxWidth: "650px", lineHeight: 1.7 }}>
        I build intelligent systems that move from research to production — spanning
        robotics, machine learning, and full-stack engineering.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="https://github.com/AnujWadi-Git"
          target="_blank"
          style={buttonStyle}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/anujwadi/"
          target="_blank"
          style={buttonStyle}
        >
          LinkedIn
        </a>

        <a
          href="/Anuj Wadi Resume.pdf"
          target="_blank"
          style={buttonStyle}
        >
          Resume
        </a>
      </div>
    </main>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "0.75rem 1.25rem",
  borderRadius: "8px",
  background: "#3b82f6",
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
};
