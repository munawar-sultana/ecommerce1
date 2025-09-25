'use client';

import { useCart } from '@/context/CartContext';
import { Product } from '@/types';


// Dummy products data (آپ چاہیں تو الگ lib میں بھی رکھ سکتے ہیں)
const allProducts: Product[] = [
  { id: 1, title: 'Product One', description: 'Nice product', price: 29.99, image: '/makeup.jpeg' },
  { id: 2, title: 'Product Two', description: 'Another product', price: 39.99, image: '/makeup2.jpeg' },
  { id: 3, title: 'Product Three', description: 'Best choice for you', price: 49.99, image: '/watch.jpeg' },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const product = allProducts.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="p-6 bg-red-50 text-red-600 rounded-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 items-start">
      {/* Image */}
      <div className="rounded-xl overflow-hidden bg-gray-100 h-80 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="mt-3 text-gray-600">{product.description}</p>
        <div className="mt-4 text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => addToCart(product)}
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Add to Cart
          </button>
          <button className="px-6 py-3 rounded-2xl border hover:bg-gray-50">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
