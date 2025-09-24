'use client';
import { useCart } from '../../context/CartContext';
import Button from '../../components/Button';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={e =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-16 border rounded p-1"
                />
                <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-xl font-semibold">Total: ${total.toFixed(2)}</div>

          <div className="mt-4 flex gap-4">
            <Button onClick={clearCart}>Clear Cart</Button>
            <Button>Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}
