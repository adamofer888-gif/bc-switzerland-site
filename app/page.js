export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          DTE Holding AG
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-8">
          Gestion de patrimoine & Capital à risque — Suisse
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          Société Suisse basée à Wollerau. Depuis 2011, nous accompagnons nos clients
          dans la gestion, la protection et la croissance de leur patrimoine, avec des
          solutions sur-mesure et un suivi dédié.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Registre du commerce : CH-130.3.017.565-5
        </p>
      </div>
    </main>
  );
}
