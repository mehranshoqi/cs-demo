import React from "react";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

interface CryptoOption {
    name: string;
    image: string;
}

interface CryptoDropdownProps {
    selectedCrypto: CryptoOption;
    onCryptoChange: (crypto: CryptoOption) => void;
    cryptoOptions: CryptoOption[];
    className?: string;
}

const CryptoDropdown: React.FC<CryptoDropdownProps> = ({
    selectedCrypto,
    onCryptoChange,
    cryptoOptions,
    className = ""
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    return (
        <div className={`relative ${className}`}>
            <div
                className="text-white bg-gray-700 border border-gray-700 flex flex-row gap-2 items-center rounded-r-lg p-3 flex-1 text-left cursor-pointer hover:bg-gray-600 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <Image
                    src={selectedCrypto.image}
                    alt="wallet"
                    width={20}
                    height={20}
                />
                <div className="text-sm font-medium">{selectedCrypto.name}</div>
                <Image
                    src={ImagePaths.icons.arrowDown}
                    alt="wallet"
                    width={12}
                    height={12}
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-gray-800 border border-gray-700 rounded-lg mt-1 z-10 max-h-48 overflow-y-auto">
                    {cryptoOptions.map((crypto, index) => (
                        <div
                            key={index}
                            className="flex flex-row gap-2 items-center p-3 hover:bg-gray-700 cursor-pointer transition-colors"
                            onClick={() => {
                                onCryptoChange(crypto);
                                setIsDropdownOpen(false);
                            }}
                        >
                            <Image
                                src={crypto.image}
                                alt={crypto.name}
                                width={20}
                                height={20}
                            />
                            <div className="text-sm font-medium text-white">{crypto.name}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CryptoDropdown; 