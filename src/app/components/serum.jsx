import Link from 'next/link';

export default function Serum(){
    return(
        <>
            <main className="mt-10 flex flex-col items-center gap-x-1
            lg:items-start justify-center lg:gap-10 lg:px-20 md:flex-row">
                <div>
                    <img 
                        src='https://fabish-theme.myshopify.com/cdn/shop/files/Image-Sectio-3_4bf9d804-e941-478d-98bf-9867ba97363b.png?v=1711345356&width=750'
                        alt="Woman Holding Serium Bottle"
                        className="w-full object-cover"
                    />
                </div>

                <div className="mt-5 space-y-5 md:space-y-4 md:w-7/10 lg:space-y-4 xl:space-y-5 lg:mt-10 xl:mt-15 lg:w-3/4">
                    <p className="hidden md:block uppercase font-semibold">pure and simple</p>
                    <h3 className="hero text-center md:text-start 
                    text-3xl md:text-2xl lg:text-3xl xl:text-5xl text-green-400">
                        Deeply Nourishing Hair Serum For Glowing & Healthy Hair.
                    </h3>
                    <p className="px-2 text-lg text-gray-700 text-center 
                    tracking-wider md:text-start md:px-0">
                        Our hair serum is a blend of natural oils and vitamins that 
                        deeply nourish and hydrate your hair, shiny, 
                        and healthy.
                    </p>

                    <div className='grid mb-10
                    grid-cols-2 gap-y-5 md:gap-y-2 lg:gap-y-5
                    px-1 sm:px-5 md:px-0
                    '>
                        <div className='flex items-center gap-x-1 sm:gap-x-3 md:gap-x-2 lg:gap-x-3'>
                            <img 
                                src='https://fabish-theme.myshopify.com/cdn/shop/files/1e4krgzs2ywjlsttc9jr.svg?v=1708400236&width=1420'
                                alt='Strong Smooth'
                                className='w-8 h-8'
                            />
                            <p className='sm:text-xl md:text-base lg:text-xl tracking-wider'>Strong Smooth</p>
                        </div>
                        {/* Paraben-Free */}
                        <div className='flex items-center gap-x-1 sm:gap-x-3 md:gap-x-2 lg:gap-x-3'>
                            <img 
                                src='https://fabish-theme.myshopify.com/cdn/shop/files/bq65rkwd0c5lsttd5cv.svg?v=1708400279&width=1420'
                                alt='Paraben-Free'
                                className='w-8 h-8'
                            />
                            <p className='sm:text-xl md:text-base lg:text-xl tracking-wider'>Paraben-Free</p>
                        </div>
                        {/* Sulfate-Free */}
                        <div className='flex items-center gap-x-1 sm:gap-x-3 md:gap-x-2 lg:gap-x-3'>
                            <img 
                                src='https://fabish-theme.myshopify.com/cdn/shop/files/d6tfuz01gvlsttea3k.svg?v=1708400325&width=1420'
                                alt='Sulfate-Free'
                                className='w-8 h-8'
                            />
                            <p className='sm:text-xl md:text-base lg:text-xl tracking-wider'>Sulfate-Free</p>
                        </div>
                        {/* 100% Vegan */}
                        <div className='flex items-center gap-x-1 sm:gap-x-3 md:gap-x-2 lg:gap-x-3'>
                            <img 
                                src='https://fabish-theme.myshopify.com/cdn/shop/files/6mlrlne4loelsttezhk.svg?v=1708400358&width=1420'
                                alt='100% Vegan'
                                className='w-8 h-8'
                            />
                            <p className='sm:text-xl md:text-base lg:text-xl tracking-wider'>100% Vegan</p>
                        </div>
                    </div>

                    <Link href='/products' className="mx-1 sm:mx-5 lg:mx-0
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