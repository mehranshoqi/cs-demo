import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

export default function CaseBattleRoulette() {
    const itemCount = 6;

    return (
        <div className="relative p-[1px] rounded-lg w-full h-[366px] mx-auto mt-8 bg-gradient-to-r from-gray-600 to-gray-800">
            <div className="relative bg-gray-900 rounded-lg w-full h-full p-2 flex gap-2">
                <div className="flex gap-2 w-full h-full">
                    {Array.from({ length: itemCount }, (_, i) => (
                        <div key={i} className="bg-gray-800 h-full rounded-lg flex-1 relative"></div>
                    ))}
                </div>
                {/* VS icons */}
                {Array.from({ length: itemCount - 1 }, (_, i) => (
                    <div
                        key={i}
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{
                            left: `calc(${((i + 1) * 100) / itemCount}% - 13px)`, // 13px = half of VS width
                            zIndex: 10,
                        }}
                    >
                        <Image src={ImagePaths.caseBattle.playWith} alt="VS" width={26} height={26} />
                    </div>
                ))}
            </div>
        </div>
    );
} 