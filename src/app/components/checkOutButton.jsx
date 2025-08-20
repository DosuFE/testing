"use client";
import { useCart } from "../context/cartContext";

export default function CheckoutButton() {
  const { cart, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_13f6d4ea223ff5f6a684614e810db7dc554de389",
      email: "customer@email.com",
      amount: totalPrice * 100,
      currency: "NGN",
      ref: "REF-" + Date.now(),
      onClose: function () {
        alert("Payment window closed");
      },
      callback: function (response) {
        alert("Payment successful! Reference: " + response.reference);

        // 🔥 Clear cart after payment
        clearCart();
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={cart.length === 0}
      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
    >
      Checkout ₦{totalPrice}
    </button>
  );
}
