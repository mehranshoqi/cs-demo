"use client";

import { useState } from "react";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";
import Modal from "./Modal";

export default function CryptoCurrency() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{ name: string; image: string } | null>(null);

    // Crypto currency items with images
    const cryptoItems = [
        { name: "Bitcoin", image: ImagePaths.crypto.bitcoin },
        { name: "Tether", image: ImagePaths.crypto.tether },
        { name: "Binance", image: ImagePaths.crypto.binance },
        { name: "Ethereum", image: ImagePaths.crypto.ethereum },
        { name: "Dogecoin", image: ImagePaths.crypto.dogecoin },
        { name: "LiteCoin", image: ImagePaths.crypto.liteCoin },
        { name: "Solana", image: ImagePaths.crypto.solana },
        { name: "Cardano", image: ImagePaths.crypto.cardano },
        { name: "Ripple", image: ImagePaths.crypto.ripple },
        { name: "+12 more", image: ImagePaths.crypto.more }
    ];

    const handleItemClick = (item: { name: string; image: string }) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <>
            <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl px-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-left">Crypto Currency</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {cryptoItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleItemClick(item)}
                            className={`p-2 md:p-3 rounded-lg flex flex-row items-center gap-2 md:gap-3 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg ${index === cryptoItems.length - 1
                                ? "bg-transparent border-2 border-[#7D2EFA] hover:bg-[#7D2EFA]/10"
                                : "bg-gray-800 hover:bg-gray-700"
                                }`}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-opacity duration-300 hover:opacity-80"
                            />
                            <span className="text-xs md:text-sm lg:text-sm font-medium transition-colors duration-300 hover:text-white">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedItem={selectedItem}
                title={selectedItem ? `${selectedItem.name} Deposit information` : "Crypto Currency"}
                layout="crypto"
            />
        </>
    );
} 