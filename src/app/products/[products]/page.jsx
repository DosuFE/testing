"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../data/products";
import { useCart } from "../../context/cartContext";
import Link from "next/link";
import formatPrice from "../../lib/formatPrice";
import generateSlug from "../../lib/generateSlug";
import Order from "@/app/components/order";

export default function ProductDetails() {
  const { products } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (products) {
      const foundProduct = data.products.find((p) => generateSlug(p.name) === products);
      setProduct(foundProduct);
    }
  }, [products]);

  if (!product) {
    return <p className="hero text-red-600 text-center mt-20 text-3xl">Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-4 my-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
        <div>
          <img
            src={product.image}
            alt={product.name}
            
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-2 lg:space-y-4 text-start">
          <h1 className="hero text-4xl font-bold text-green-400">{product.name}</h1>
          <p className="text-xl text-gray-700">{product.description}</p>
          <p className="text-2xl font-bold text-green-500">
            {formatPrice(product.price, product.currency)}
          </p>
          <p className="text-lg text-gray-600">Brand: {product.brand}</p>
          <p className="text-lg text-gray-600">Size: {product.size}</p>
          <p className="text-lg text-gray-600">Stock: {product.stock}</p>
          <p className="text-lg text-yellow-500">Rating: {product.rating} ★</p>

          <div className="flex items-center gap-x-3 mt-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg 
              hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Add to Cart
            </button>

            <Link href='/cart'
              className="bg-blue-500 text-center text-white px-6 py-3 rounded-lg 
              hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Make Payment
            </Link>
          </div>
          <div className="mt-3">
            <Link href="/products" className="text-green-500 hover:underline">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>

      <Order/>
    </div>
  );
};
