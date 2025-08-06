// components/LottiePlayer.tsx
"use client";

import Lottie from "lottie-react";
import animationData from "@/public/images/bg1.json";

const MyLottiePlayer = () => {
  return (
    <div style={{ width: 160, height: 160, transform: "scale(.75)" }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default MyLottiePlayer;
