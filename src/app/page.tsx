import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const sampleProducts: Product[] = [
  { id: 1, title: 'Product One', description: 'Nice product', price: 29.99, image: '/camera.jpeg' },
  { id: 2, title: 'Product Two', description: 'Another product', price: 39.99, image: '/munni.jpeg' },
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-blue-600 text-white p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to BrandName</h1>
        <p className="mb-6">Your one-stop shop for amazing products</p>
        <Link href="/products" className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100">
          Shop Now
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
