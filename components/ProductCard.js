import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded shadow p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="font-bold text-primary">{product.price} €</span>
        <button className="text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => addToCart(product)}>
          Pridať do košíka
        </button>
      </div>
    </div>
  );
}