'use client';
import React from 'react';
import Link from 'next/link';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import Button from './Button';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col">
      <img
        src={product.image || '/products/placeholder.jpg'}
        alt={product.title}
        className="w-full h-44 object-cover rounded"
      />

      <div className="mt-4 flex-1">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-2 overflow-hidden text-ellipsis line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="font-semibold">${Number(product.price).toFixed(2)}</div>
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            View
          </Link>
          <Button onClick={() => addToCart(product)}>Add</Button>
        </div>
      </div>
    </div>
  );
}
