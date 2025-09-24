'use client';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-semibold">
          BrandName
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
