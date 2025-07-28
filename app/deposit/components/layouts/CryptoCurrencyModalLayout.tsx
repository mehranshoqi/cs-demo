import React from "react";
import Image from "next/image";

interface CryptoCurrencyModalLayoutProps {
    selectedItem: { name: string; image: string };
    onClose: () => void;
}

const CryptoCurrencyModalLayout: React.FC<CryptoCurrencyModalLayoutProps> = ({
    selectedItem,
    onClose
}) => {
    return (
        <div className="flex flex-col gap-8 p-10 z-2">
            <div className="flex flex-col items-center gap-5 text-center">
                <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    width={100}
                    height={100}
                    className="rounded-full bg-white/10 p-4 w-25 h-25"
                />
                <h2 className="text-3xl font-bold text-white m-0">{selectedItem.name}</h2>
                <p className="text-base text-gray-400 leading-relaxed max-w-xs m-0">
                    This cryptocurrency is supported for transactions on our platform.
                </p>
            </div>
        </div>
    );
};

export default CryptoCurrencyModalLayout; 