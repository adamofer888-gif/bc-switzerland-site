
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <section style={{ marginBottom: "50px" }}>
        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>DTE Holding AG</h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Innovations • Capital à Risque • Développement Digital
        </p>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link
          href="/services"
          style={{
            background: "#0A1A33",
            color: "white",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Voir nos Services
        </Link>

        <Link
          href="/team"
          style={{
            background: "#f2f2f2",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Notre Équipe
        </Link>

        <Link
          href="/contact"
          style={{
            background: "#f2f2f2",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Contact
        </Link>
      </section>
    </main>
  );
}
