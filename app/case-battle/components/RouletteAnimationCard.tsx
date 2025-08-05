import BattleAnimation from './BattleAnimation';
import Image from 'next/image';
import ImagePaths from '@/app/constants/ImagePaths';
import styles from './Roulette.module.scss';

export default function RouletteAnimationCard() {
    const gunImages = [
        ImagePaths.caseBattle.gun1,
        ImagePaths.caseBattle.gun2,
        ImagePaths.caseBattle.gun3,
        ImagePaths.caseBattle.gun4,
        ImagePaths.caseBattle.gun5,
        ImagePaths.caseBattle.gun6
    ];

    return (
        <div className="h-full rounded-lg flex-1 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <BattleAnimation className="w-full overflow-hidden h-full flex items-center justify-center">
                <div id="roulette-animation" className={`relative z-10 ${styles.rouletteAnimation}`}>
                    {Array.from({ length: 18 }, (_, i) => (
                        <div key={i} className={`h-[130px] relative flex items-center justify-center ${i === 2 ? styles.itemScale : ''}`}>
                            <Image
                                src={gunImages[i % gunImages.length]}
                                alt=""
                                width={130}
                                height={49}
                                className="mx-auto w-[130px]"
                            />
                        </div>
                    ))}
                </div>
            </BattleAnimation>
        </div>
    );
} 