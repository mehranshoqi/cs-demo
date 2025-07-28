import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

export default function Deposit() {
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

    // Alternative cash deposit items with images
    const paymentItems = [
        { name: "Visa", image: ImagePaths.cash.visa },
        { name: "Mastercard", image: ImagePaths.cash.mastercard },
        { name: "PayPal", image: ImagePaths.cash.paypal },
        { name: "Apple Pay", image: ImagePaths.cash.applepay },
        { name: "Google Pay", image: ImagePaths.cash.googlepay }
    ];

    return (
        <div
            className="text-white flex flex-col gap-20 py-20 text-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ImagePaths.general.lightStarBg})` }}
        >
            {/* Header Section */}
            <div>
                <h1 className="text-4xl font-bold">Deposit</h1>
                <h2 className="text-lg text-gray-400">
                    Choose a preferred method from the options below to deposit funds.
                </h2>
            </div>

            {/* Deposit Skins Section */}
            <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl">
                <h3 className="text-2xl font-bold text-left">Deposit Skins</h3>
                <div className="flex flex-row gap-10 justify-center">
                    {/* CS:GO / CS2 */}
                    <div className="rounded-lg p-4 text-left flex flex-col gap-2">
                        <Image
                            src={ImagePaths.deposit.cs2go}
                            alt="CS2GO"
                            width={268}
                            height={171}
                        />
                        <div className="flex flex-row gap-2 items-center justify-between">
                            <div>CS:GO / CS2</div>
                        </div>
                    </div>

                    {/* Rust */}
                    <div className="rounded-lg p-4 text-left flex flex-col gap-2">
                        <Image
                            src={ImagePaths.deposit.rust}
                            alt="Rust"
                            width={268}
                            height={171}
                        />
                        <div className="flex flex-row gap-2 items-center justify-between">
                            <div>Rust</div>
                            <div className="text-gray-400 font-bold text-sm bg-gray-800 rounded-md px-2">
                                Coming Soon
                            </div>
                        </div>
                    </div>

                    {/* Dota 2 */}
                    <div className="rounded-lg p-4 text-left flex flex-col gap-2">
                        <Image
                            src={ImagePaths.deposit.dota2}
                            alt="Dota 2"
                            width={268}
                            height={171}
                        />
                        <div className="flex flex-row gap-2 items-center justify-between">
                            <div>Dota 2</div>
                            <div className="text-gray-400 font-bold text-sm bg-gray-800 rounded-md px-2">
                                Coming Soon
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Crypto Currency Section */}
            <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl">
                <h3 className="text-2xl font-bold text-left">Crypto Currency</h3>
                <div className="grid grid-cols-5 gap-4">
                    {cryptoItems.map((item, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg flex flex-row items-center gap-3 ${index === cryptoItems.length - 1
                                    ? "bg-transparent border-2 border-[#7D2EFA]"
                                    : "bg-gray-800"
                                }`}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                            />
                            <span className="text-sm">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Alternative Cash Deposits Section */}
            <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl">
                <h3 className="text-2xl font-bold text-left">Alternative Cash Deposits</h3>
                <div className="grid grid-cols-5 gap-4">
                    {paymentItems.map((item, index) => (
                        <div key={index} className="text-center p-3 bg-gray-800 rounded-lg flex items-center justify-center">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={0}
                                height={40}
                                className="w-auto h-10"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
