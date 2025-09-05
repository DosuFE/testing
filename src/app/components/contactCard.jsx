export default function ContactCard() {

    const info = [
            {
                id: 1,
                title: 'Our Location',
                description: '123 Real Estate Ave, Cityville, State 12345',
                style: 'bg-white p-6 rounded-lg shadow-md text-center'
            },
            {
                id: 2,
                title: 'Call Us',
                description: '+1 (234) 567-8900',
                style: 'bg-white p-6 rounded-lg shadow-md text-center'
            },
            {
                id: 3,
                title: 'Email Us',
                description: 'info@solacecare.com',
                style: 'bg-white p-6 rounded-lg shadow-md text-center'
            }
        ]

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 
            gap-8 w-full mt-10 mb-20"
        >
            {info.map((infos) => 
                <div className={infos.style} key={infos.id}>
                    <h3 className="hero text-2xl space-y-2
                    font-medium text-green-400 tracking-wider
                    "
                    >
                        {infos.title}
                    </h3>
                    <p className="tracking-wider text-lg">
                        {infos.description}
                    </p>
                </div>
            )}
        </div>
    )
}