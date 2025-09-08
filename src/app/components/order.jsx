'use client'
import { useState } from "react"
import { AnimatePresence } from 'framer-motion'
import Pop from "./pop";

export default function Order(){
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        quantity: '',
        productName: '',
        address: '',
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
        setFormData(
            { 
                fullName: '', 
                email: '', 
                phoneNumber: '', 
                quantity: '', 
                productName: '',
                address: '', 
                message: '' 
            }
        );
    };

    const closePopup = () => {
        setShowSuccessPopup(false);
    };

    return(
        <>
            <form onSubmit={handleSubmit}
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
                {/* FULL NAME */}
                <div 
                    className="flex flex-col items-start 
                    justify-start gap-y-2
                ">
                    <label for='fullName'
                        className="text-xl cursor-pointer hover:text-green-400" 
                    >
                        Enter Your Full Name :
                    </label>

                    <input 
                        type="text"
                        placeholder="Enter your full name"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange} required
                        className="px-4 py-3 w-full capitalize
                        text-lg border-slate-200 border-2 tracking-wider
                        outline-none rounded-md cursor-pointer shadow-md
                        placeholder:text-gray-500
                        hover:border-green-400 hover:placeholder:text-green-500
                        "
                    />
                </div>
                
                {/* E-MAIL */}
                <div className="flex flex-col items-start 
                    justify-start gap-y-2
                ">
                    <label for='email'
                        className="text-xl cursor-pointer hover:text-green-400" 
                    >
                        Enter Your User E-mail :
                    </label>
                    {/* E-MAIL */}
                    <input 
                        type="email"
                        placeholder="johndoe@yahoo.com"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange} required
                        className="px-4 py-3 w-full
                        text-lg border-slate-200 border-2 tracking-wider
                        outline-none rounded-md cursor-pointer shadow-md
                        placeholder:text-gray-500
                        hover:border-green-400 hover:placeholder:text-green-500
                        "
                    />
                </div>

                {/* PHONE NUMBER */}
                <div className="flex flex-col items-start 
                    justify-start gap-y-2
                ">
                    <label for='phoneNumber'
                        className="text-xl cursor-pointer hover:text-green-400" 
                    >
                        Enter Your Phone Number:
                    </label>
                    <input 
                        type="number"
                        placeholder="Input your phone number"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange} required
                        className="px-4 py-3 w-full capitalize
                        text-lg border-slate-200 border-2 tracking-wider
                        outline-none rounded-md cursor-pointer shadow-md
                        placeholder:text-gray-500
                        hover:border-green-400 hover:placeholder:text-green-500
                        "
                        
                    />
                </div>

                {/* QUANITY */}
                <div className="flex flex-col items-start 
                    justify-start gap-y-2
                ">
                    <label for='quantiy'
                        className="text-xl cursor-pointer hover:text-green-400" 
                    >
                        Enter Product Items Number :
                    </label>

                    <input 
                        type="number"
                        placeholder="quantity"
                        name="quantity" 
                        id="quantiy"
                        value={formData.quantity}
                        onChange={handleChange} required
                        className="px-4 py-3 w-full capitalize
                        text-lg border-slate-200 border-2 tracking-wider
                        outline-none rounded-md cursor-pointer shadow-md
                        placeholder:text-gray-500
                        hover:border-green-400 hover:placeholder:text-green-500
                        "
                    />
                </div>

                {/* PRODUCT NAME */}
                <div className="flex flex-col items-start 
                    justify-start gap-y-2
                ">
                    <label for='productName'
                        className="text-xl cursor-pointer hover:text-green-400" 
                    >
                        Enter Product Name :
                    </label>

                    <input 
                        type="text"
                        placeholder="product name"
                        name="productName"
                        id="productName"
                        value={formData.productName}
                        onChange={handleChange} required
                        className="px-4 py-3 w-full capitalize
                        text-lg border-slate-200 border-2 tracking-wider
                        outline-none rounded-md cursor-pointer shadow-md
                        placeholder:text-gray-500
                        hover:border-green-400 hover:placeholder:text-green-500
                        "
                    />
                </div>

                {/* DELIVERY ADDRESS */}
                <div className="flex flex-col items-start 
                    justify-start gap-y-2
                ">
                    <label for='address'
                        className="text-xl cursor-pointer hover:text-green-400" 
                    >
                        Enter Product Delivery Address :
                    </label>

                    <input 
                        type="text"
                        placeholder="Enter Delivery Address"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange} required
                        className="px-4 py-3 w-full capitalize
                        text-lg border-slate-200 border-2 tracking-wider
                        outline-none rounded-md cursor-pointer shadow-md
                        placeholder:text-gray-500
                        hover:border-green-400 hover:placeholder:text-green-500
                        "
                    />
                </div>


                {/* MESSAGE */}
                <div 
                    className="col-span-1 sm:col-span-2 mt-5 
                    flex flex-col items-center justify-center 
                    space-y-5
                ">
                    <div className="flex flex-col items-start 
                        justify-start gap-y-2 w-full
                    ">
                        <label for='message'
                            className="text-xl cursor-pointer hover:text-green-400" 
                        >
                            Additional Message :
                        </label>

                        <textarea
                            placeholder="Enter your additional info"
                            rows="2"
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="
                            px-4 py-3 w-full capitalize
                            text-lg border-slate-200 border-2 tracking-wider
                            outline-none rounded-md cursor-pointer shadow-md
                            placeholder:text-gray-500
                            hover:border-green-400 hover:placeholder:text-green-500
                            "
                        />
                    </div>
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
                    <Pop 
                        closePopup={closePopup}
                    />
                )}
            </AnimatePresence>
        </>
    )
}