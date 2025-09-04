'use client'
import { useState } from "react"
import { AnimatePresence } from 'framer-motion'
import Pop from "./pop";

export default function Form(){
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name] : value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        // SIMULATE SUCCESSFUL SUBMISSION
        setShowSuccessPopup(true);
        // CLEAR FORM
        setFormData({ fullName: '', email: '', phoneNumber: '', subject: '', message: '' });
    };

    const closePopup = () => {
        setShowSuccessPopup(false);
    };

    return(
        <>
            <form onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
                <input 
                    type="text"
                    placeholder="Enter your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange} required
                    className="px-4 py-3 w-full capitalize
                    text-lg border-slate-200 border-2 tracking-wider
                    outline-none rounded-md cursor-pointer shadow-md
                    placeholder:text-black placeholder:capitalize
                    hover:border-green-500 hover:placeholder:text-green-500
                    "
                />

                {/* E-MAIL */}
                <input 
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} required
                    className="px-4 py-3 w-full capitalize
                    text-lg border-slate-200 border-2 tracking-wider
                    outline-none rounded-md cursor-pointer shadow-md
                    placeholder:text-black placeholder:capitalize
                    hover:border-green-500 hover:placeholder:text-green-500
                    "
                />

                {/* PHONE NUMBER */}
                <input 
                    type="number"
                    placeholder="Input your phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange} required
                    className="px-4 py-3 w-full capitalize
                    text-lg border-slate-200 border-2 tracking-wider
                    outline-none rounded-md cursor-pointer shadow-md
                    placeholder:text-black placeholder:capitalize
                    hover:border-green-500 hover:placeholder:text-green-500
                    "
                    
                />

                {/* SUBJECT */}
                <input 
                    type="text"
                    placeholder="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange} required
                    className="px-4 py-3 w-full capitalize
                    text-lg border-slate-200 border-2 tracking-wider
                    outline-none rounded-md cursor-pointer shadow-md
                    placeholder:text-black placeholder:capitalize
                    hover:border-green-500 hover:placeholder:text-green-500
                    "
                />

                {/* MESSAGE */}
                <div 
                    className="col-span-1 sm:col-span-2 mt-5 
                    flex flex-col items-center justify-center 
                    space-y-5
                ">
                    <textarea
                        placeholder="Message"
                        rows="2"
                        name="message"
                        value={formData.message}
                        onChange={handleChange} required
                        className="
                        px-4 py-3 w-full capitalize
                        text-lg border-slate-200 border-2 tracking-wider
                        outline-none rounded-md cursor-pointer shadow-md
                        placeholder:text-black placeholder:capitalize
                        hover:border-green-500 hover:placeholder:text-green-500
                        "
                    />
                    <button 
                        type="submit"
                        className="px-10 py-2 text-xl text-white font-semibold
                        bg-green-400 w-full cursor-pointer tracking-wider
                        hover:bg-green-600 hover:duration-700"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/* POP-UP with AnimatePresence */}
            <AnimatePresence>
                {showSuccessPopup && (
                    <Pop closePopup={closePopup} />
                )}
            </AnimatePresence>
        </>
    )
}