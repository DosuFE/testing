'use client'
import Link from "next/link"
import { useState } from "react"
import { useCart } from "../context/cartContext";
import Search from "./search";
import SearchResults from './searchResults'
import data from "../data/products";


export default function NavBar(){
    const { totalItems } = useCart();

    // State to manage the mobile menu toggle
    const [isClick, setIsClick] = useState(false);
    const [searchProduct, setSearchProduct] = useState('');

    const toggleNavbar = () => {
        setIsClick(!isClick)
    }

    // Search Bar Filter Method
    const filteredProduct = data.products.filter((item) =>
        item.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchProduct.toLowerCase()) ||
        item.description.toLowerCase().includes(searchProduct.toLowerCase())
    );

    return(
        <header className="fixed top-0 w-full bg-white shadow-md px-4 md:px-10 z-50">
            <div className="flex items-center justify-between py-4">
                {/* BRAND LOGO */}
                <div className="logo">
                    <Link href='/' className="text-green-400 
                    text-2xl font-bold cursor-pointer italic md:text-3xl
                    hover:text-green-500">
                        Solace SkinCare
                    </Link>
                </div>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden text-xl md:block">
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link href='/products' className="text-black hover:text-green-500">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' className="text-black hover:text-green-500">
                                Contacts
                            </Link>
                        </li>
                        <li>
                            <Link href='/about' className="text-black hover:text-green-500">
                                About Us
                            </Link>
                        </li>
                        <li className="relative">
                            {/*Search Input Fields Props */}
                            <Search
                                searchProduct={searchProduct}
                                setSearchProduct={setSearchProduct}
                            />
                            {/* Search Result Fields */}
                            {searchProduct.length > 0 && (
                                <SearchResults 
                                    filteredProducts={filteredProduct} 
                                    setSearchProduct={setSearchProduct}
                                />
                            )}
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center">
                    {/* CART ICON */}
                    <Link href='/cart' className="text-black bg-green-100 p-2 rounded-full 
                    hover:bg-green-200 transition-colors 
                    hover:duration-300 flex items-center justify-center 
                    text-lg font-semibold hover:border border-green-400 
                    hover:text-white md:text-xl lg:text-2xl
                    mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" 
                        fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 
                            .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 
                            12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 
                            4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 
                            1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                            />
                        </svg>

                        {/* BADGE */}
                        {totalItems > 0 && (
                            <span className="absolute top-2 right-2 bg-red-500 
                            text-white text-xs w-5 h-5 flex items-center justify-center 
                            rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                    {/* MOBILE MENU BUTTON */}
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 
                        rounded-md text-black hover:text-green-400 focus:outline-none focus:ring-2 
                        focus:ring-inset focus:ring-black cursor-pointer" onClick={toggleNavbar}>
                            {isClick ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE NAVIGATION */}
            {isClick && (
                <div className="md:hidden text-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href='/products' className="text-black block hover:text-green-500 rounded-lg p-2">
                            Products
                        </Link>
                        <Link href='/contact' className="text-black block hover:text-green-500 rounded-lg p-2">
                            Contacts
                        </Link>
                        <Link href='/about' className="text-black block hover:text-green-500 rounded-lg p-2">
                            About Us
                        </Link>
                        <div className="relative p-2">
                            <Search
                                searchProduct={searchProduct}
                                setSearchProduct={setSearchProduct}
                            />
                            {searchProduct.length > 0 && (
                                <SearchResults 
                                    filteredProducts={filteredProduct} 
                                    setSearchProduct={setSearchProduct}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}