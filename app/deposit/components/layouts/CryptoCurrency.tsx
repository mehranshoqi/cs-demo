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
    const [inputValue, setInputValue] = useState("70.00");

    // Function to calculate conversion: every 7 coins = 100 of next field
    const calculateConversion = (value: string) => {
        const numValue = parseFloat(value) || 0;
        const convertedValue = (numValue / 7) * 100;
        return convertedValue.toFixed(2);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const networks = [
        { name: "Ethereum", image: ImagePaths.network.eth },
        { name: "BSC", image: ImagePaths.network.bsc },
        { name: "Tron", image: ImagePaths.network.tron },
        { name: "Polygon", image: ImagePaths.network.polygon }
    ];

    return (
        <div className="flex flex-col gap-8 p-6 z-2">
            <div className="flex flex-col items-start gap-2 text-left">
                <div className="flex text-sm font-medium flex-row gap-2 items-center">
                    <Image
                        src={ImagePaths.deposit.network}
                        alt="network"
                        width={18}
                        height={18}
                    />
                    <div>Available Networks</div>
                </div>
                <ul className="flex mt-2 w-full flex-row gap-2 text-xs">
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
                <div className="flex mt-4 flex-row gap-2 items-center text-sm font-medium">
                    <Image
                        src={ImagePaths.deposit.wallet}
                        alt="wallet"
                        width={18}
                        height={18}
                    />
                    <div>Wallet address</div>
                </div>

                <div className="flex w-[140px] mx-auto items-center justify-center my-4">
                    <Image
                        src={ImagePaths.crypto.qr}
                        alt="qr"
                        width={120}
                        height={120}
                        className="mx-auto"
                    />
                </div>

                <div className="flex flex-row gap-2 bg-gray-700 rounded-lg p-3 w-full justify-between items-center text-xs font-medium">
                    <div className="text-sm">0x31841bd605BB06b4Bf01C4C161DA012B6bdDC46F</div>
                    <Image
                        src={ImagePaths.deposit.copy}
                        alt="wallet"
                        width={20}
                        height={20}
                    />
                </div>

                <div className="flex mt-4 flex-row gap-2 items-center text-xs font-medium">
                    <Image
                        src={ImagePaths.deposit.info}
                        alt="wallet"
                        width={16}
                        height={16}
                    />
                    <div>Transfer only USDT to this address</div>
                </div>

                <div className="text-xs border border-gray-700 rounded-lg p-2 text-gray-400">Only transfer USDT (USDT) to this wallet using the Ethereum (ERC-20) network. Sending anything else will result in permanent loss.</div>

                <div className="flex mt-4 flex-row gap-2 items-center text-xs font-medium">
                    <Image
                        src={ImagePaths.deposit.coinAlt}
                        alt="wallet"
                        width={16}
                        height={16}
                    />
                    <div>Cs2Skin Coin rate calculator</div>
                </div>

                <div className="flex w-full flex-row gap-2 items-center text-xs font-medium">
                    <div className="text-white flex flex-row gap-2 items-center bg-gray-700 rounded-lg p-3 flex-1 text-left">
                        <Image
                            src={ImagePaths.network.coin}
                            alt="wallet"
                            width={16}
                            height={16}
                        />
                        <input
                            type="text"
                            className="bg-transparent text-sm outline-none text-white"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="0.00"
                        />
                    </div>
                    <div className="text-gray-400">to</div>
                    <div className="text-white bg-gray-700 flex flex-row gap-2 items-center rounded-lg p-3 flex-1 text-left">
                        <Image
                            src={selectedItem.image}
                            alt="wallet"
                            width={16}
                            height={16}
                        />
                        <input
                            type="text"
                            className="bg-transparent text-sm outline-none text-white"
                            value={calculateConversion(inputValue)}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoCurrencyModalLayout; 