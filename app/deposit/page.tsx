import DepositSkins from "./components/DepositSkins";
import CryptoCurrency from "./components/CryptoCurrency";
import AlternativeCashDeposits from "./components/AlternativeCashDeposits";
import ImagePaths from "@/app/constants/ImagePaths";

export default function Deposit() {
    return (
        <div
            className="text-white flex flex-col gap-8 md:gap-12 lg:gap-20 py-8 md:py-12 lg:py-20 text-center min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-6 lg:px-8"
            style={{ backgroundImage: `url(${ImagePaths.general.lightStarBg})` }}
        >
            {/* Header Section */}
            <div className="px-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Deposit</h1>
                <h2 className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
                    Choose a preferred method from the options below to deposit funds.
                </h2>
            </div>

            <DepositSkins />
            <CryptoCurrency />
            <AlternativeCashDeposits />
        </div>
    );
}
