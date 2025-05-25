import Link from 'next/link';
import { useCart } from './CartContext';

export default function Header() {
  const { cart } = useCart();
  return (
    <header className="bg-dark text-light p-4 flex justify-between items-center shadow">
      <Link href="/">
        <span className="text-2xl font-bold text-primary cursor-pointer">AutoDex</span>
      </Link>
      <nav className="space-x-4">
        <Link href="/">Domov</Link>
        <Link href="/kategoria/autodoplnky">Autodoplnky</Link>
        <Link href="/kategoria/kozmetika">Kozmetika</Link>
        <Link href="/kategoria/pneumatiky">Pneumatiky</Link>
        <Link href="/kategoria/tuning">Tuning</Link>
        <Link href="/kosik">Košík ({cart.reduce((a, i) => a + i.qty, 0)})</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}