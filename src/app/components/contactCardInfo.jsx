export default function ContactCardInfo({title, description, style}){
        return(
            <>
                <div className={style}>
                    <h3 className="hero text-2xl space-y-2
                    font-medium text-green-400 tracking-wider
                    "
                    >
                        {title}
                    </h3>
                    <p className="tracking-wider text-lg">
                        {description}
                    </p>
                </div>
            </>
        )
}