import Image from "next/image"
import Link from "next/link"
import woman from "../../../public/images/woman.jpg"
import ProductList from "../components/productList"
// import {useCart} from "../context/cartContext"

export default function Home(){
    return (
        <>
            <main className="mt-20 lg:flex items-start justify-center 
            px-3 md:px-10 lg:mt-0">
            {/* HERO SECTION */}
            <div className="tracking-wider flex flex-col space-y-7 mt-10"> 
                    <div className="hero capitalize lg:mt-20">
                        <h1 className="text-5xl sm:text-8xl lg:text-7xl xl:text-8xl
                        text-green-400">
                            Let your skin 
                        </h1>
                        <div className="flex items-center gap-2 mt-2">
                            <h1 className="text-5xl sm:text-8xl lg:text-7xl xl:text-8xl
                            text-green-400">going</h1>
                            <img 
                                src="../../images/glow.png" alt="Glow Skin"
                                className="w-20 sm:w-40 lg:w-36 xl:w-40"
                            />
                            <h1 className="text-5xl sm:text-8xl lg:text-7xl xl:text-8xl
                            text-green-400">out.</h1>
                        </div>
                    </div>
                    <p className="text-black/90 text-lg
                    md:text-xl lg:text-2xl">
                        We want to bring to the world through our 
                        products that very special feeling joy, healthy and positive energy.
                    </p>

                    {/* SHOP NOW && CONTACT */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link href='/products' className="w-1/2 sm:w-1/3 bg-green-400 text-white 
                        px-6 py-3 rounded-[50px] text-lg text-center 
                        font-semibold md:text-xl lg:text-2xl hover:bg-white
                        transition-colors hover:text-green-400 hover:duration-700
                        hover:border border-green-400">
                            Shop Now
                        </Link>
                        <Link href='/contact' className="w-1/2 sm:w-1/3 border border-green-400 
                        text-green-400 px-4
                        sm:px-6 py-3 rounded-[50px] text-lg text-center 
                        font-semibold md:text-xl lg:text-2xl hover:bg-green-400 
                        hover:text-white transition-colors hover:duration-700">
                            Contact Us
                        </Link>
                    </div>
            </div>
                {/* HERO IMAGE */}
                <Image 
                    src={woman} 
                    alt='Woman Glowing Face' 
                    className="hidden lg:block w-1/2 sm:w-1/3 h-auto 
                    object-cover mt-20"
                />
            </main>

            {/* SHOP OUR PRODUCT NOW */}
            <section className="mt-10 text-center md:mt-20">
                <h1 className="hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                text-center font-semibold text-green-400">
                    Shop Our Products Now
                </h1>

                <ProductList />
                <Link href='/products' className="w-1/2 sm:w-1/3 bg-green-400 text-white 
                    px-6 py-3 rounded-[50px] text-lg text-center 
                    font-semibold md:text-xl lg:text-2xl hover:bg-white
                    transition-colors hover:text-green-400 hover:duration-700
                    hover:border border-green-400"
                >
                        See All Products
                </Link>
            </section>
        </>
    )
}