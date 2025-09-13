'use client'
import Link from 'next/link'
import generateSlug from '../lib/generateSlug'

export default function SearchResults({ filteredProducts, setSearchProduct }) {
    if (!filteredProducts.length) return null;

    return (
        <div 
            className="absolute 
            top-full left-0 right-0 bg-white shadow-lg 
            rounded-b-lg max-h-[70vh] overflow-y-auto z-50 mt-1"
        >
            <div className="p-4">
                {filteredProducts.map((product) => (
                    <Link 
                        key={product.id}
                        href={`/products/${generateSlug(product.name)}`}
                        onClick={() => setSearchProduct('')}
                        className="flex items-center gap-4 p-2 hover:bg-green-50 
                        rounded-lg transition-colors"
                    >
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                            <h3 className="font-semibold text-base text-green-600">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {product.currency} {product.price}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}