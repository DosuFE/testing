import Link from 'next/link';

export default function Serum(){
    return(
        <>
            <main className="mt-10 flex flex-col items-center
            lg:items-start justify-center md:gap-10 lg:px-20 lg:flex-row">
                <div>
                    <img 
                        src='https://fabish-theme.myshopify.com/cdn/shop/files/Image-Sectio-3_4bf9d804-e941-478d-98bf-9867ba97363b.png?v=1711345356&width=750'
                        alt="Woman Holding Serium Bottle"
                        className="w-full object-cover"
                    />
                </div>

                <div className="mt-5 lg:mt-20 space-y-5 md:w-3/4">
                    <p className="hidden lg:block uppercase font-semibold">pure and simple</p>
                    <h3 className="hero text-center lg:text-start 
                    text-3xl md:text-5xl text-green-400">
                        Deeply Nourishing Hair Serum For Glowing & Healthy Hair.
                    </h3>
                    <p className="px-2 text-lg text-gray-700 text-center 
                    tracking-wider lg:text-start">
                        Our hair serum is a blend of natural oils and vitamins that 
                        deeply nourish and hydrate your hair, shiny, 
                        and healthy. Perfect for all hair types, it helps to reduce frizz, 
                        split ends, and dryness while promoting hair growth and strength.
                    </p>

                    <Link href='/products' className="mt-10
                        w-1/2 sm:w-1/3 bg-green-400 text-white 
                        px-6 py-3 text-lg text-center 
                        font-semibold md:text-xl lg:text-2xl hover:bg-white
                        transition-colors hover:text-green-400 hover:duration-700
                        hover:border border-green-400"
                    >
                        Shop Now
                    </Link>
                </div>
            </main>
        </>
    )
}