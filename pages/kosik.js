import { useCart } from '../components/CartContext';
import Link from 'next/link';

export default function Kosik() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return <main className="container mx-auto p-6"><h2>Košík je prázdny.</h2></main>;
  }

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-primary">Košík</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="border-b py-2 flex justify-between">
            <span>{item.name} (x{item.qty})</span>
            <span>{item.price * item.qty} €</span>
            <button className="ml-4 text-red-500" onClick={() => removeFromCart(item.id)}>
              Odstrániť
            </button>
          </li>
        ))}
      </ul>
      <div className="my-4 font-bold">Spolu: {total} €</div>
      <div className="space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded" onClick={clearCart}>Vyprázdniť košík</button>
        <Link href="/checkout">
          <button className="bg-primary text-white px-4 py-2 rounded">Pokračovať na platbu</button>
        </Link>
      </div>
    </main>
  );
}