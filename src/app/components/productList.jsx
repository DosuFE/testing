'use client'
import data from "../data/products";
import ProductCard from "./productCard";
import { useCart } from "../context/cartContext";

export default function ProductList({ limit = 12 }) {
  const { addToCart } = useCart();
  const products = Array.isArray(data?.products) ? data.products.slice(0, limit) : [];

  return (
    <div className="mx-4 my-10 md:m-10 text-start grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
      {products.map((product) =>
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={addToCart} 
        />
      )}
    </div>
  );
}
