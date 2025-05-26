import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-primary">Vitajte na AutoDex!</h1>
      <p className="mb-6">Najlepšie autodoplnky, kozmetika, pneumatiky a tuning na jednom mieste.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Category name="Autodoplnky" link="/kategoria/autodoplnky" />
        <Category name="Kozmetika" link="/kategoria/kozmetika" />
        <Category name="Pneumatiky" link="/kategoria/pneumatiky" />
        <Category name="Tuning" link="/kategoria/tuning" />
      </div>
    </main>
  );
}

function Category({ name, link }) {
  return (
    <Link href={link}>
      <div className="border p-8 rounded shadow hover:shadow-lg text-center cursor-pointer">
        <span className="text-xl font-bold text-primary">{name}</span>
      </div>
    </Link>
  );
}