import BattleAnimation from './BattleAnimation';
import Image from 'next/image';
import ImagePaths from '@/app/constants/ImagePaths';
import styles from './Roulette.module.scss';
import { useMemo } from 'react';

export default function RouletteAnimationCard() {
    const gunImages = [
        ImagePaths.caseBattle.gun1,
        ImagePaths.caseBattle.gun2,
        ImagePaths.caseBattle.gun3,
        ImagePaths.caseBattle.gun4,
        ImagePaths.caseBattle.gun5,
        ImagePaths.caseBattle.gun6
    ];

    const randomizedImages = useMemo(() => {
        const result = [];
        for (let i = 0; i < 18; i++) {
            const randomIndex = Math.floor(Math.random() * gunImages.length);
            result.push(gunImages[randomIndex]);
        }
        return result;
    }, []);

    return (
        <div className="h-full rounded-lg flex-1 relative bg-gradient-to-b from-gray-950 via-gray-800 to-gray-950">
            <BattleAnimation className="w-full overflow-hidden h-full flex items-center justify-center">
                <div className="h-[100px] w-full bg-gradient-to-b from-black via-black/70 to-transparent absolute top-0 left-0 right-0 z-20 rounded-t-lg"></div>
                <div id="roulette-animation" className={`relative z-10 ${styles.rouletteAnimation}`}>
                    {Array.from({ length: 18 }, (_, i) => (
                        <div key={i} className={`h-[130px] relative flex items-center justify-center ${i === 2 ? styles.itemScale : ''}`}>
                            <Image
                                src={randomizedImages[i]}
                                alt=""
                                width={130}
                                height={49}
                                className="mx-auto w-[130px]"
                                priority={i < 6}
                                loading="eager"
                            />
                        </div>
                    ))}
                </div>
                <div className="h-[100px] w-full bg-gradient-to-t from-black via-black/70 to-transparent absolute bottom-0 left-0 right-0 z-20 rounded-b-lg"></div>
            </BattleAnimation>
        </div>
    );
} 