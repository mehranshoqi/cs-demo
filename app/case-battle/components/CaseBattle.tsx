import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";

export default function CaseBattle() {
  return (
    <div
      style={{
        height: "86px",
        width: "453px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "12px",
        borderColor: "var(--Gray800)",
      }}
      className="relative border-l border-r border-b  h-[80px] w-[453px] flex gap-4 items-center justify-center overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          display: "flex",
          gap: "12px",
          flexDirection: "column",
          background:
            "linear-gradient(to right, var(--Gray800), #FFFFFF80, var(--Gray800))",
        }}
      ></div>
      <div className="flex gap-2 items-center absolute top-2 right-2">
        <Image
          src={ImagePaths.caseBattle.flash}
          className="opacity-50"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={ImagePaths.caseBattle.equal}
          className="opacity-50"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={ImagePaths.caseBattle.grinTongueWink}
          className="cursor-pointer"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={ImagePaths.caseBattle.crown}
          className="cursor-pointer"
          alt=""
          width={20}
          height={20}
        />
      </div>
      <div className="flex gap-2 items-end" style={{ marginTop: "12px" }}>
        <Image
          src={ImagePaths.caseBattle.case3}
          alt="case-3"
          className="opacity-0"
          width={50}
          height={50}
        />
        <Image
          src={ImagePaths.caseBattle.case3}
          alt="case-3"
          className="opacity-50"
          width={50}
          height={50}
        />
        <div className="relative flex items-center justify-center">
          <Image
            src={ImagePaths.caseBattle.battleX}
            className="opacity-30 absolute mx-auto"
            alt=""
            width={70}
            height={70}
          />
          <Image
            src={ImagePaths.caseBattle.case2}
            alt="case-2"
            className="opacity-100"
            width={70}
            height={70}
          />
        </div>
        <Image
          src={ImagePaths.caseBattle.case4}
          alt="case-4"
          className="opacity-50"
          width={50}
          height={50}
        />
        <Image
          src={ImagePaths.caseBattle.case4}
          alt="case-4"
          className="opacity-50"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
