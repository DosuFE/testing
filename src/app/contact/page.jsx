import ContactCard from "../components/contactCard";
import Form from "../components/form";

export default function Contacts(){
    return (
        <main className="mt-32 mx-3 sm:mx-5 md:mx-10">
            <h1 className="hero text-5xl mb-7
                font-bold text-green-400 text-center
            ">
                Contact Us
            </h1>
            <Form/>

            <section>
                <ContactCard/>
            </section>
        </main>
    )
}