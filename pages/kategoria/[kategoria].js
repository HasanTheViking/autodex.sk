import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';

const PRODUCTS = [
  { id: 1, name: "Koberec do auta", description: "Kvalitný gumový koberec na mieru.", price: 25, category: "autodoplnky", image: "https://via.placeholder.com/300x200?text=Autodoplnky" },
  { id: 2, name: "Autošampón", description: "Špičkový autošampón na dokonalé umytie.", price: 12, category: "kozmetika", image: "https://via.placeholder.com/300x200?text=Kozmetika" },
  { id: 3, name: "Letná pneumatika 205/55 R16", description: "Bezpečná a spoľahlivá letná pneumatika.", price: 65, category: "pneumatiky", image: "https://via.placeholder.com/300x200?text=Pneumatiky" },
  { id: 4, name: "LED podsvietenie", description: "Tuningové LED podsvietenie pre nočný efekt.", price: 30, category: "tuning", image: "https://via.placeholder.com/300x200?text=Tuning" },
];

export default function Kategoria() {
  const { kategoria } = useRouter().query;
  const filtered = PRODUCTS.filter(p => p.category === kategoria);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-primary capitalize">{kategoria}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}