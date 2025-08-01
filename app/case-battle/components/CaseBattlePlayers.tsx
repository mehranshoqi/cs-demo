import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

export default function CaseBattlePlayers() {
    const itemCount = 6;

    // Function to get random gun image
    const getRandomGun = () => {
        const gunImages = [
            ImagePaths.caseBattle.gun1,
            ImagePaths.caseBattle.gun2,
            ImagePaths.caseBattle.gun3,
            ImagePaths.caseBattle.gun4,
            ImagePaths.caseBattle.gun5,
            ImagePaths.caseBattle.gun6,
        ];
        return gunImages[Math.floor(Math.random() * gunImages.length)];
    };

    return (
        <div className="relative p-[1px] rounded-lg w-full mx-auto">
            <div className="relative rounded-lg w-full h-full p-2 flex gap-2">
                <div className="flex gap-2 w-full h-full">
                    {Array.from({ length: itemCount }, (_, i) => (
                        <div key={i} className="flex-1 grid gap-2">

                            {/* Player */}
                            <div className="bg-gray-800 p-2 rounded-lg flex-1 gap-2 flex items-center relative before:content-[''] before:absolute before:top-[-8px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:border-b-[8px] before:border-b-gray-800 before:z-10">
                                <div id='avatar' className="w-10 h-10 rounded-full bg-gray-700"></div>
                                <div className="flex-1 gap-1 grid text-left">
                                    <div className="text-sm font-bold text-gray-300">Pouya</div>
                                    <div className="flex items-center gap-1">
                                        <Image src={ImagePaths.icons.coin} alt="coin" width={16} height={16} />
                                        <div className="text-sm">0.10</div>
                                    </div>
                                </div>
                            </div>
                            {/* VS */}
                            {Array.from({ length: 3 }, (_, i) => (
                                <div key={i} className="flex-1">
                                    <div className="min-h-[140px] text-sm text-center p-2 bg-gray-900 rounded-lg">
                                        <div className="flex text-xs text-gray-400 font-thin items-center justify-between">
                                            <div>03</div>
                                            <div>40%</div>
                                        </div>
                                        <Image src={getRandomGun()} alt="gun" width={63} height={25} className="mx-auto w-[103px]" />
                                        <div className="text-gray-400">Emerlad</div>
                                        <div className="text-[#FF5E15]">Titan Katowice 2014</div>
                                        <div className="flex justify-center items-center gap-1 mx-auto">
                                            <Image src={ImagePaths.icons.coin} alt="coin" width={16} height={16} />
                                            <div>0.10</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 