import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../Profile.module.scss";
import { useState } from "react";
import Image from "next/image";
import VerificationCodeInput from "./VerificationCodeInput";

const TwoFAForm: React.FC = ({}) => {
  const [code, setCode] = useState("");

  return (
    <div className={styles.verifyEmailContainer}>
      <Image
        className={styles.qrImg}
        src={ImagePaths.temp.qrTest}
        width={164}
        height={164}
        alt="qr-img"
      />
      <div style={{ height: "var(--sds-size-space-300)" }}></div>
      <span className={styles.qrContent}>2e42 23klr ljkl kljk</span>
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      <ul className={styles.info}>
        <li>Install Authy , Microsoft Authenticator or similar app.</li>
        <li>Scan the QR code above or enter key manually.</li>
        <li>Enter the 6-digit code below to verify & enable 2FA.</li>
      </ul>
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      <VerificationCodeInput
        length={6}
        onComplete={() => {}}
        onChange={setCode}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
    </div>
  );
};

export default TwoFAForm;
