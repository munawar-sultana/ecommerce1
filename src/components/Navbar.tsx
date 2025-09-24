'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
