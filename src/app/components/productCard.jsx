import Link from "next/link";


export default function ProductCard({ product }) {
    return (
        <article className="product-card w-full">
            <div className="bg-green-50 rounded-lg border border-green-200
            shadow-xl hover:shadow-lg transition-shadow duration-300">
                <Link href={`/products/${product.id}`} className="block">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80"
                    />
                </Link>
                <div className="px-4 py-2">
                    <h4 className="text-lg font-semibold text-green-400 tracking-wide
                    hover:text-green-600 transition-colors duration-200 cursor-pointer hover:underline 
                     hover:underline-offset-2 hover:decoration-2 hover:decoration-green-400   
                    ">
                        {product.name}
                    </h4>
                    <p className="text-gray-600 pt-2">
                        {product.description}
                    </p>
                    <p className="text-lg font-bold py-2 text-green-600">
                        {product.currency} {product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 text-green-500">
                        <span className="text-sm">Brand: {product.brand}</span>
                        <span className="text-sm">Size: {product.size}</span>
                        <span className="text-sm">Stock: {product.stock}</span>
                    </div>
                    <p className="text-sm text-yellow-500">
                        Rating: {product.rating} ★
                    </p>
                </div>
                <div className="p-4">
                    <Link href='/cart' className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add to Cart
                    </Link>
                </div>    
            </div>
        </article>
    );
}