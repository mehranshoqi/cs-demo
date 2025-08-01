import BattleAnimation from './BattleAnimation';

export default function RouletteCard() {
    return (
        <div className="bg-gray-800 h-full rounded-lg flex-1 relative">
            <BattleAnimation className="w-full h-full">
                {/* Slot content can be added here */}
            </BattleAnimation>
        </div>
    );
} 