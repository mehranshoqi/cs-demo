import React from "react";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

interface PaymentMethodModalLayoutProps {
    selectedItem: { name: string; image: string };
    onClose: () => void;
}

const coinValues = ['25.00', '50.00', '75.00', '100.00', '500.00', '1,000.00', '1,500.00', '2,000.00']

const PaymentMethodModalLayout: React.FC<PaymentMethodModalLayoutProps> = ({
    selectedItem,
    onClose
}) => {
    const [selectedValue, setSelectedValue] = React.useState(coinValues[0]);
    return (
        <div className="flex flex-col gap-8 p-6 z-2">
            <div className="flex flex-col items-start gap-10 text-left">

                <div className="flex flex-row gap-2 items-center text-sm font-medium">
                    <Image
                        src={ImagePaths.deposit.coinAlt}
                        alt="wallet"
                        width={16}
                        height={16}
                    />
                    <div>Please enter the amount of coins you would like to purchase below.</div>
                </div>


                <div className="flex w-full flex-row gap-2 items-center text-xs font-medium">
                    <div className="text-white flex flex-row gap-2 items-center bg-gray-800 rounded-lg p-3 flex-1 text-left">
                        <Image
                            src={ImagePaths.network.coin}
                            alt="wallet"
                            width={16}
                            height={16}
                        />
                        <input
                            type="text"
                            readOnly
                            className="bg-transparent text-sm outline-none text-white"
                            placeholder="0.00"
                        />
                    </div>
                    <div className="text-gray-400">to</div>
                    <div className="flex flex-row items-center flex-1">
                        <div className="border border-gray-700 flex-1 rounded-l-lg p-3 text-sm text-center font-medium">
                            <input
                                type="text"
                                className="bg-transparent w-full text-sm outline-none text-white"
                                placeholder="0.00"
                            />
                        </div>
                        <div className="text-white bg-gray-700 border border-gray-700 flex flex-row gap-2 items-center rounded-r-lg p-3 flex-1 text-left">
                            <Image
                                src={ImagePaths.crypto.tether}
                                alt="wallet"
                                width={20}
                                height={20}
                            />
                            <div className="text-sm font-medium">Thether</div>
                            <Image
                                src={ImagePaths.icons.arrowDown}
                                alt="wallet"
                                width={12}
                                height={12}
                            />
                        </div>
                    </div>
                </div>


                <div className="border border-gray-700 rounded-lg p-3 text-sm text-center font-medium w-full">Additional fees vary per payment provider</div>

                <div className="grid grid-cols-4 gap-2 w-full">
                    {coinValues.map((value, index) => (
                        <div
                            key={index}
                            className={`flex border border-gray-700 rounded-full px-2 py-1 flex-row gap-2 items-center text-sm font-medium cursor-pointer transition-colors ${selectedValue === value
                                ? "bg-gray-700 text-white"
                                : "hover:bg-gray-800"
                                }`}
                            onClick={() => setSelectedValue(value)}
                        >
                            <Image
                                src={ImagePaths.network.coin}
                                alt="wallet"
                                width={20}
                                height={20}
                            />
                            <div>{value}</div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#7D2EFA] p-3 rounded-full w-full text-center text-sm cursor-pointer hover:bg-[#7D2EFA]/80 transition-all duration-300 font-bold">Confirm & Pay</div>

            </div>
        </div>
    );
};

export default PaymentMethodModalLayout; 