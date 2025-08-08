"use client";

import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";
import SolidSvg from "@/app/components/commen/svgMask/svgMask";

export default function CaseBattleHeader() {
  return (
    <div
      className="flex w-full items-center"
      style={{ height: '52px' }}
    >
      {/* Left side */}
      <div
        className="flex w-[250px] gap-2 items-center cursor-pointer"
        onClick={() => console.log("Leave clicked")}
      >
        <Image
          src={ImagePaths.caseBattle.arrowLeft}
          alt="arrow-left"
          width={20}
          height={20}
        />
        <span style={{ color: "var(--Text-Color-TextBodyGray300)" }}>
          Leave
        </span>
      </div>

      {/* Center - always centered */}
      <div className="flex-1 flex justify-center gap-10">
        <div className="flex gap-2 items-center">
          <span className="text-gray-500 text-sm">Cost:</span>
          <span className="text-white">743.00</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500 text-sm">Round:</span>
          <span className="text-white">1/4</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500 text-sm">Solo:</span>
          <span className="text-white">6x1</span>
        </div>
      </div>

      {/* right side */}
      <div className="flex w-[240px] gap-4 items-center relative">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => console.log("Volume toggled")}
        >
          <SolidSvg
            path={ImagePaths.caseBattle.volumeHigh}
            color="var(--Text-Color-TextBodyGray300)"
            width={20}
            height={20}
          />
        </div>
        <div
          className="flex gap-2 items-center text-gray-300 cursor-pointer"
          onClick={() => console.log("Fairness clicked")}
        >
          <SolidSvg
            path={ImagePaths.caseBattle.shieldCheck}
            color="var(--Text-Color-TextBodyGray300)"
            width={20}
            height={20}
          />
          Fairness
        </div>
        <div
          className="flex gap-2 items-center text-gray-300 cursor-pointer"
          onClick={() => console.log("Share clicked")}
        >
          <SolidSvg
            path={ImagePaths.caseBattle.share}
            color="var(--Text-Color-TextBodyGray300)"
            width={20}
            height={20}
          />
          Share
        </div>
      </div>
    </div>
  );
}
