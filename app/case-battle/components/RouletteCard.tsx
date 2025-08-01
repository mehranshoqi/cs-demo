import BattleAnimation from './BattleAnimation';
import Image from 'next/image';
import ImagePaths from '@/app/constants/ImagePaths';

export default function RouletteCard() {
    return (
        <div className="h-full rounded-lg flex-1 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <BattleAnimation className="w-full overflow-hidden h-full flex items-center justify-center">
                <div className="relative z-10">
                    <Image src={ImagePaths.caseBattle.gun1} alt="" width={160} height={49} className="mx-auto opacity-30 w-[160px]" />
                    <div className="py-10">
                        <Image src={ImagePaths.caseBattle.gun5} alt="" width={160} height={49} className="mx-auto w-[160px]" />
                        <div className="text-center grid gap-1 text-sm text-gray-400">
                            <div className="text-gray-400">Emerlad</div>
                            <div className="text-[#FF5E15]">Titan Katowice 2014</div>
                            <div className="flex justify-center items-center gap-1 mx-auto">
                                <Image src={ImagePaths.icons.coin} alt="coin" width={16} height={16} />
                                <div className="text-white">0.10</div>
                            </div>
                        </div>
                    </div>
                    <Image src={ImagePaths.caseBattle.gun4} alt="" width={160} height={49} className="mx-auto opacity-30 w-[160px]" />
                </div>
            </BattleAnimation>
        </div>
    );
} 