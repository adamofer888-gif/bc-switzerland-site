export const metadata = {
  title: "Contact - DTE Holding AG",
  description: "Coordonnées de DTE Holding AG en Suisse",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-10">Contact</h1>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Informations */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Coordonnées</h2>
          <p className="text-gray-700">
            <strong>Société :</strong> DTE Holding AG<br/>
            <strong>Adresse :</strong> Wyssenfluhstrasse 1, 8832 Wollerau, Suisse<br/>
            <strong>Registre du commerce :</strong> CH-130.3.017.565-5<br/>
            <strong>Téléphone :</strong> +41 77 956 91 83
          </p>
        </div>

        {/* Email / contact */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Nous écrire</h2>
          <p className="text-gray-700 mb-3">Besoin d’informations ? Un projet ? Contactez-nous :</p>

          <a
            href="mailto:contact@dteholdingag.com"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            contact@dteholdingag.com
          </a>
        </div>

      </div>
    </main>
  );
}
