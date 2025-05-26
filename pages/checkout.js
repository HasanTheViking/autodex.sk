import { useCart } from '../components/CartContext';
import { useState } from 'react';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [sent, setSent] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (sent) {
    return (
      <main className="container mx-auto p-6">
        <h2 className="text-xl font-bold text-primary">Objednávka odoslaná!</h2>
        <p>Ďakujeme za váš nákup v AutoDex.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-primary">Doručovacie údaje</h1>
      <form onSubmit={e => { e.preventDefault(); clearCart(); setSent(true); }} className="grid gap-4 max-w-md">
        <input required className="border p-2 rounded" placeholder="Meno a priezvisko" />
        <input required className="border p-2 rounded" placeholder="Adresa" />
        <input required className="border p-2 rounded" type="email" placeholder="E-mail" />
        <input required className="border p-2 rounded" placeholder="Telefón" />
        <div className="font-bold">Suma k úhrade: {total} €</div>
        <button className="text-white px-4 py-2 rounded">Odoslať objednávku</button>
      </form>
    </main>
  );
}