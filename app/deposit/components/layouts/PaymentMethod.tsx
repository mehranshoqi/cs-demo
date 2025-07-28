import React from "react";
import Image from "next/image";

interface PaymentMethodModalLayoutProps {
    selectedItem: { name: string; image: string };
    onClose: () => void;
}

const PaymentMethodModalLayout: React.FC<PaymentMethodModalLayoutProps> = ({
    selectedItem,
    onClose
}) => {
    return (
        <div className="flex flex-col gap-6 p-10 z-2">
            <div className="flex flex-col items-center gap-4 text-center">
                <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    width={80}
                    height={80}
                    className="rounded-full bg-white/10 p-3 w-20 h-20"
                />
                <h2 className="text-2xl font-semibold text-white m-0">{selectedItem.name}</h2>
                <p className="text-sm text-gray-400 leading-relaxed max-w-60 m-0">
                    Secure payment method for your deposits.
                </p>
            </div>
        </div>
    );
};

export default PaymentMethodModalLayout; 