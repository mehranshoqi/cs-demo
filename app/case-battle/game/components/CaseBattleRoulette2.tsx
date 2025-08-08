import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";
import RouletteCard from "./RouletteCard";
import bg from "@/public/images/battle-bg.png";
import RouletteAnimationCard2 from "./RouletteAnimationCard2";




interface CaseBattleRoulette2Props {
  itemCount: number,
}

const CaseBattleRoulette2: React.FC<CaseBattleRoulette2Props> = ({itemCount})=>  {


  return (
    <div
      style={{
        height: "370px",
        borderRadius: "12px",
        padding: "8px",
        border: "1px solid #7F8D9F",
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        // backgroundColor: "#4f4f4f44",
        // background:
        //   "url('/images/battle-bg.png') lightgray 0% 0% / 8.275000005960464px 8.275000005960464px repeat",

        // boxShadow: "0 16px 4px 0 rgba(0, 0, 0, 0.25)",
      }}
      className="relative w-full"
    >
      <div className="relative  rounded-lg w-full h-full flex ">
        <div className="flex w-full h-full" style={{ gap: "5px" }}>
          {Array.from({ length: itemCount }, (_, i) => {
            // if (i === 3) {
            //   return <RouletteCard key={i} />;
            // }
            return <RouletteAnimationCard2 idx={i} key={i} />;
          })}
        </div>

        {Array.from({ length: itemCount - 1 }, (_, i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `calc(${((i + 1) * 100) / itemCount}% - 13px)`, // 13px = half of VS width
              zIndex: 10,
            }}
          >
            <Image
              src={ImagePaths.caseBattle.playWith}
              alt="VS"
              width={26}
              height={26}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default CaseBattleRoulette2;
