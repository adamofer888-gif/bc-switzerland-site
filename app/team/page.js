export const metadata = {
  title: "Notre Équipe - DTE Holding AG",
  description: "Découvrez les dirigeants et experts de DTE Holding AG.",
};

const TEAM = [
  { name: "Daniel Thomas Eggenberger", role: "CEO", bio: "Direction générale, stratégie et relations investisseurs." },
  { name: "Navneet Patel", role: "COO", bio: "Opérations, partenariats et excellence opérationnelle." },
  { name: "Adam Ofer", role: "COO", bio: "Opérations, développement corporate et croissance." },
];

export default function TeamPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-10">Notre Équipe</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {TEAM.map((member) => (
          <div key={member.name} className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-blue-700 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
