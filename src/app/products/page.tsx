import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';

const products: Product[] = [
  { id: 1, title: 'Product One', description: 'Nice product', price: 29.99, image: '/products/1.jpg' },
  { id: 2, title: 'Product Two', description: 'Another product', price: 39.99, image: '/products/2.jpg' },
  { id: 3, title: 'Product Three', description: 'Best choice for you', price: 49.99, image: '/products/3.jpg' },
];

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
