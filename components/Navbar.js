export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">DTE Holding AG</a>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="/">Accueil</a>
          <a href="#services">Services</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="/services/capital-a-risque" className="hidden md:inline-flex px-3 py-1.5 rounded-lg bg-slate-900 text-white text-sm">
          Investir
        </a>
      </nav>
    </header>
  );
}
