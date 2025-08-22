// src/app/products/[products]/page.jsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../data/products";
import Image from "next/image";
import { useCart } from "../../context/cartContext";
import Link from "next/link";
import formatPrice from "../../lib/formatPrice";
import generateSlug from "../../lib/generateSlug";

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
    return <p className="text-center mt-20 text-xl">Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
        <div className=" ">
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
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mt-4"
          >
            Add to Cart
          </button>
          <div className="mt-3">
            <Link href="/products" className="text-green-500 hover:underline">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
