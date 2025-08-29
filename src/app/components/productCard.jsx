import Link from "next/link";
import generateSlug from "../lib/generateSlug";

export default function ProductCard({ product, onAddToCart }) {
    return (
        <article className="product-card w-full h-[600px]">
            <div className="bg-green-50 rounded-lg border border-green-200 
                shadow-xl hover:shadow-lg transition-shadow duration-300 
                h-full flex flex-col">
                <Link href={`/products/${generateSlug(product.name)}`} className="block h-[250px]">
                    <img
                        src={product.image}
                        alt={product.name}
                        loading='lazy'
                        className="w-full h-full object-cover rounded-t-lg"
                    />
                </Link>
                <div className="px-4 py-2 flex-grow flex flex-col">
                    <h4 className="text-lg font-semibold text-green-400 tracking-wide
                        hover:text-green-600 transition-colors duration-200 cursor-pointer 
                        hover:underline hover:underline-offset-2 hover:decoration-2 
                        hover:decoration-green-400 truncate">
                        {product.name}
                    </h4>
                    <p className="text-gray-600 pt-2 text-sm line-clamp-2 flex-grow">
                        {product.description}
                    </p>
                    <p className="text-lg font-bold py-2 text-green-600">
                        {product.currency} {product.price.toFixed(2)}
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-green-500">
                        <span className="text-xs truncate">Brand: {product.brand}</span>
                        <span className="text-xs truncate">Size: {product.size}</span>
                        <span className="text-xs truncate">Stock: {product.stock}</span>
                    </div>
                    <p className="text-sm text-yellow-500 mt-1">
                        Rating: {product.rating} ★
                    </p>
                </div>
                <div className="p-4 mt-auto">
                    <button
                        className="bg-blue-500 text-white w-full
                        px-4 py-2 rounded cursor-pointer hover:bg-blue-600
                        transition-colors duration-200"
                        onClick={() => onAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>    
            </div>
        </article>
    );
}