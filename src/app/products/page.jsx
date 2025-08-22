
import ProductList from "../components/productList";


export default function Product(){
    return (
        <>
           <main className="mt-20 md:mt-24">
                <h1 className="hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                text-center font-semibold text-green-400">
                    Get Your Own SkinCare Now!
                </h1>
                <ProductList limit={60}/>
           </main>
        </>
    )
}