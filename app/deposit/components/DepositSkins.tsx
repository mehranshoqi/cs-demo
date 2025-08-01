import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

export default function DepositSkins() {
    return (
        <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl px-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-left">Deposit Skins</h3>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 justify-center">
                {/* CS:GO / CS2 */}
                <div className="rounded-lg p-3 md:p-4 text-left flex flex-col gap-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1">
                    <Image
                        src={ImagePaths.deposit.cs2go}
                        alt="CS2GO"
                        width={320}
                        height={205}
                        className="w-full max-w-[220px] md:max-w-[270px] lg:max-w-[300px] mx-auto"
                    />
                    <div className="flex w-[230px] mx-auto flex-row gap-2 items-center justify-between">
                        <div className="text-sm md:text-base">CS:GO / CS2</div>
                    </div>
                </div>

                {/* Rust */}
                <div className="rounded-lg p-3 md:p-4 text-left flex flex-col gap-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1">
                    <Image
                        src={ImagePaths.deposit.rust}
                        alt="Rust"
                        width={320}
                        height={205}
                        className="w-full max-w-[220px] md:max-w-[270px] lg:max-w-[300px] mx-auto"
                    />
                    <div className="flex w-[230px] mx-auto flex-row gap-2 items-center justify-between">
                        <div className="text-sm md:text-base">Rust</div>
                        <div className="text-gray-400 font-bold text-xs md:text-sm bg-gray-800 rounded-md px-2">
                            Coming Soon
                        </div>
                    </div>
                </div>

                {/* Dota 2 */}
                <div className="rounded-lg p-3 md:p-4 text-left flex flex-col gap-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1">
                    <Image
                        src={ImagePaths.deposit.dota2}
                        alt="Dota 2"
                        width={320}
                        height={205}
                        className="w-full max-w-[220px] md:max-w-[270px] lg:max-w-[300px] mx-auto"
                    />
                    <div className="flex w-[230px] mx-auto flex-row gap-2 items-center justify-between">
                        <div className="text-sm md:text-base">Dota 2</div>
                        <div className="text-gray-400 font-bold text-xs md:text-sm bg-gray-800 rounded-md px-2">
                            Coming Soon
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 