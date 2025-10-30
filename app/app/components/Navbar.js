export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#fff",
      borderBottom: "1px solid #eee"
    }}>
      <h2>DTE HOLDING AG</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
