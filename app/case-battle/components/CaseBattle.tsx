import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

export default function CaseBattle() {
    return (
        <div className="relative border-l border-r border-b rounded-lg border-gray-700 h-24 w-[540px] flex gap-4 items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-gray-700 via-white to-gray-700 rounded-t-lg"></div>
            <Image src={ImagePaths.caseBattle.battleX} className="opacity-30 absolute mx-auto" alt="" width={80} height={80} />
            <div className="flex gap-2 items-center absolute top-2 right-2">
                <Image src={ImagePaths.caseBattle.flash} className="opacity-50" alt="" width={20} height={20} />
                <Image src={ImagePaths.caseBattle.equal} className="opacity-50" alt="" width={20} height={20} />
                <Image src={ImagePaths.caseBattle.grinTongueWink} className="cursor-pointer" alt="" width={20} height={20} />
                <Image src={ImagePaths.caseBattle.crown} className="cursor-pointer" alt="" width={20} height={20} />
            </div>
            <Image src={ImagePaths.caseBattle.case3} alt="case-3" className="opacity-50" width={50} height={50} />
            <Image src={ImagePaths.caseBattle.case2} alt="case-2" className="opacity-100" width={100} height={100} />
            <Image src={ImagePaths.caseBattle.case4} alt="case-4" className="opacity-50" width={50} height={50} />
            <Image src={ImagePaths.caseBattle.case4} alt="case-4" className="opacity-50" width={50} height={50} />
        </div>
    );
} 