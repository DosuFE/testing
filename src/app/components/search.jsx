export default function Search({ searchProduct, setSearchProduct }) {
    return (
        <form className="relative">
            <input
                type="text"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 border 
                border-gray-300 rounded-lg md:py-1 cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-green-400
                focus:border-transparent"
            />
            {searchProduct && (
                <button
                    onClick={() => setSearchProduct('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                    text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                    ×
                </button>
            )}
        </form>
    )
}