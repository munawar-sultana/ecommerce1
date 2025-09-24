import { Product } from '../../../types';
import { useCart } from '../../../context/CartContext';
import Button from '../../../components/Button';

const allProducts: Product[] = [
  { id: 1, title: 'Product One', description: 'Nice product', price: 29.99, image: '/products/1.jpg' },
  { id: 2, title: 'Product Two', description: 'Another product', price: 39.99, image: '/products/2.jpg' },
  { id: 3, title: 'Product Three', description: 'Best choice for you', price: 49.99, image: '/products/3.jpg' },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const product = allProducts.find(p => p.id === Number(params.id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <img src={product.image} alt={product.title} className="w-full rounded shadow" />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="text-xl font-semibold mb-6">${product.price.toFixed(2)}</div>
        <Button onClick={() => addToCart(product)}>Buy Now</Button>
      </div>
    </div>
  );
}
