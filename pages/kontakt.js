import { useState } from 'react';

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <main className="container mx-auto p-6">
        <h2 className="text-xl font-bold text-primary">Ďakujeme za správu!</h2>
        <p>Ozveme sa vám čo najskôr.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-primary">Kontaktujte nás</h1>
      <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="grid gap-4 max-w-md">    
        <input required className="border p-2 rounded" placeholder="Meno" />
        <input required className="border p-2 rounded" type="email" placeholder="E-mail" />
        <textarea required className="border p-2 rounded" placeholder="Vaša správa" />
        <button className="bg-primary text-white px-4 py-2 rounded">Odoslať</button>
      </form>
      <div className="mt-8">
        <p><strong>E-mail:</strong> info@autodex.sk</p>
        <p><strong>Telefón:</strong> +421 900 000 000</p>
      </div>
    </main>
  );
}