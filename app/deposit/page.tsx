import DepositSkins from "./components/DepositSkins";
import CryptoCurrency from "./components/CryptoCurrency";
import AlternativeCashDeposits from "./components/AlternativeCashDeposits";
import ImagePaths from "@/app/constants/ImagePaths";
import Image from "next/image";

export default function Deposit() {
  return (
    <div
      className="text-white flex flex-col text-center min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-6 lg:px-8"
      style={{
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", width: "100%" }}>
        <Image
          src={ImagePaths.general.depositBG}
          width={100}
          height={100}
          objectFit="cover"
          style={{ width: "100%", top: "-150px", position: "absolute" }}
          alt="bg"
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Header Section */}
        <div className="px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            Deposit
          </h1>
          <h2 className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Choose a preferred method from the options below to deposit funds.
          </h2>
        </div>

        <DepositSkins />
        <CryptoCurrency />
        <AlternativeCashDeposits />
      </div>
    </div>
  );
}
