import './globals.css';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="container mx-auto px-6 py-8">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
