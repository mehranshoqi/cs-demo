import React, { useState } from "react";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

interface CryptoCurrencyModalLayoutProps {
    selectedItem: { name: string; image: string };
    onClose: () => void;
}

const CryptoCurrencyModalLayout: React.FC<CryptoCurrencyModalLayoutProps> = ({
    selectedItem,
    onClose
}) => {
    const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");

    const networks = [
        { name: "Ethereum", image: "/images/crypto/networks/ethereum.svg" },
        { name: "BSC", image: "/images/crypto/networks/BSC.svg" },
        { name: "Tron", image: "/images/crypto/networks/Tron.svg" },
        { name: "Polygon", image: "/images/crypto/networks/Polygon.svg" }
    ];

    return (
        <div className="flex flex-col gap-8 p-6 z-2">
            <div className="flex flex-col items-start gap-2 text-left">
                <div>Available Networks</div>
                <ul className="flex w-full flex-row gap-2 text-xs">
                    {networks.map((network, index) => (
                        <li
                            key={index}
                            className={`flex-1 border border-gray-700 rounded-full px-2 py-1 flex items-center gap-2 cursor-pointer transition-colors duration-200 ${selectedNetwork === network.name
                                ? "bg-gray-700 text-white"
                                : "text-gray-400 hover:bg-gray-800"
                                }`}
                            onClick={() => setSelectedNetwork(network.name)}
                        >
                            <Image
                                src={network.image}
                                alt={network.name}
                                width={20}
                                height={20}
                                className="w-6 h-6"
                            />
                            {network.name}
                        </li>
                    ))}
                </ul>
                ...
            </div>
        </div>
    );
};

export default CryptoCurrencyModalLayout; 