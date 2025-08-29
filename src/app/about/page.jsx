'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function About() {
    // Add client-side only rendering
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // or a loading skeleton
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <motion.h1 
                        className="text-4xl font-bold text-green-600 mb-4"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        About Glow Skin Care
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Your trusted partner in skincare excellence
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://fabish-theme.myshopify.com/cdn/shop/articles/Blog07.jpg?v=1711351641&width=1500" 
                            alt="Skincare Products"
                            width={600}
                            height={400}
                            loading='lazy'
                            className="rounded-lg shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold text-green-500 mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-4">
                            Founded in 2020, Glow Skin Care has been dedicated to providing high-quality skincare products 
                            that enhance your natural beauty. We believe in the power of natural ingredients combined with 
                            scientific innovation.
                        </p>
                        <p className="text-gray-600">
                            Our mission is to help everyone achieve their best skin health through carefully curated products 
                            and expert guidance.
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {[
                        {
                            title: "Quality Products",
                            description: "We carefully select and test all our products to ensure the highest quality standards.",
                            icon: "🌟"
                        },
                        {
                            title: "Natural Ingredients",
                            description: "Our products are made with natural, sustainable ingredients that are kind to your skin.",
                            icon: "🌿"
                        },
                        {
                            title: "Expert Support",
                            description: "Our team of skincare experts is always ready to help you with personalized advice.",
                            icon: "👩‍⚕️"
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-green-500 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold text-green-500 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                    <Link href='/contact' className="inline-block">
                        <motion.button
                            className="bg-green-500 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-green-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}