'use client'
import { motion } from 'framer-motion';

export default function Pop({ closePopup }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
            >
                <div className="text-center">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-green-500 text-5xl mb-4"
                    >
                        ✓
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Message Sent Successfully!
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Thank you for contacting us. We will get back to you shortly.
                    </p>
                    <button
                        onClick={closePopup}
                        className="bg-green-500 text-white px-6 py-2 rounded-lg
                            hover:bg-green-600 transition-colors duration-300"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </div>
    );
}