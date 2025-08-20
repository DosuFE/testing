'use client'
import CheckoutButton from "../components/checkOutButton";
import { useCart } from "../context/cartContext";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();

  return (
    <main className="p-6 mt-14 md:mt-20">
      <h1 className="text-2xl font-bold text-green-500 mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between 
            items-center p-4 rounded bg-green-50 shadow-md">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.currency} {item.price.toFixed(2)}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 
                py-1 rounded cursor-pointer hover:bg-red-600 
                transition-colors duration-300"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Totals Section */}
          <div className="mt-6 p-4 bg-green-100 rounded shadow">
            <p className="font-semibold">Total Items: {totalItems}</p>
            <p className="font-semibold">Total Amount: ₦{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}

      <div className="mt-6">
        <CheckoutButton />
      </div>
    </main>
  );
}
