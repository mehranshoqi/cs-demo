import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";
import { defaultEasing } from "framer-motion";

interface CaseBattleRoulette2Props {
  itemCount: number;
}

const CaseBattlePlayers: React.FC<CaseBattleRoulette2Props> = ({
  itemCount,
}) => {
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

  // Function to get avatar image based on player index
  const getAvatarImage = (playerIndex: number) => {
    const avatarImages = [
      ImagePaths.avatars.avatar1,
      ImagePaths.avatars.avatar2,
      ImagePaths.avatars.avatar3,
      ImagePaths.avatars.avatar4,
      ImagePaths.avatars.avatar5,
      ImagePaths.avatars.avatar6,
    ];
    return avatarImages[playerIndex] || avatarImages[0];
  };

  const isTeamMate = false;

  return (
    <div className="relative p-[8px] rounded-lg w-full mx-auto">
      <div className="relative rounded-lg w-full h-full p-0 flex gap-[4px]">
        <div className="flex gap-[6px] w-full h-full">
          {Array.from({ length: itemCount }, (_, i) => (
            <div key={i} className="flex-1 grid gap-[4px]">
              {/* Player */}
              <div
                className="p-2 rounded-lg flex-1 gap-2 flex items-center relative before:content-[''] before:absolute before:top-[-8px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:border-b-[8px] before:border-b-gray-800 before:z-10"
                style={{
                  backgroundColor: !isTeamMate
                    ? "var(--Gray900)"
                    : "var(--Gray800)",
                }}
              >
                <Image
                  src={getAvatarImage(i)}
                  alt={`Player ${i + 1} Avatar`}
                  width={52}
                  height={52}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 gap-1 grid text-left">
                  <div
                    className="text-sm"
                    style={{
                      color: "var(--Text-Color-TextBodyGray300)",
                      fontWeight: 600,
                    }}
                  >
                    Pouya
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Image
                      src={ImagePaths.icons.coin}
                      alt="coin"
                      width={16}
                      height={16}
                    />
                    <div className="text-sm">0.10</div>
                  </div>
                </div>
              </div>

              {/* VS */}
              <div
                style={{
                  display: itemCount == 6 ? "initial" : "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                  gap: "6px",
                }}
              >
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{
                      border:
                        "0.4px solid var(--Border-Color-BorderGray800, #222D3B)",
                      borderRadius: "8px",
                      width: itemCount === 6 ? "100%" : "105px",
                    }}
                  >
                    <div
                      className="min-h-[140px] text-sm text-center p-2 rounded-lg"
                      style={{
                        backgroundColor: !isTeamMate
                          ? "var(--Gray930)"
                          : "var(--Gray900)",
                      }}
                    >
                      <div
                        style={{
                          color: "var(--Gray600)",
                          display: "flex",
                          gap: "10px",
                          marginBottom: "6px",
                        }}
                        className="flex text-xs font-thin items-center justify-between"
                      >
                        <div>03</div>
                        <div>40%</div>
                      </div>
                      <Image
                        src={getRandomGun()}
                        alt="gun"
                        width={63}
                        height={25}
                        className="mx-auto w-[103px]"
                      />
                      <div
                        style={{
                          color: "var(--Gray600)",
                          fontSize: "12px",
                          fontWeight: 400,
                          marginBottom: "4px",
                        }}
                        className=""
                      >
                        Emerlad
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 400,
                          marginBottom: "4px",
                        }}
                        className="text-[#FF5E15]"
                      >
                        Titan Katowice 2014
                      </div>
                      <div className="flex justify-center items-center gap-1 mx-auto">
                        <Image
                          src={ImagePaths.icons.coin}
                          alt="coin"
                          width={12}
                          height={12}
                        />
                        <div style={{ fontSize: "12px", fontWeight: 400 }}>
                          0.10
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseBattlePlayers;
