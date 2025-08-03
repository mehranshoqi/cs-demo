import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import { useState } from "react";
import Image from "next/image";
import VerificationCodeInput from "./VerificationCodeInput";

interface VerifyEmailFormProps {
  email: string;
  onCodeVerified: (code: string) => void;
  onWrongEmail: () => void;
}

const VerifyEmailForm: React.FC<VerifyEmailFormProps> = ({
  email,
  onCodeVerified,
  onWrongEmail,
}) => {
  const [resendCountdown, setResendCountdown] = useState(54);
  const [code, setCode] = useState("");

  return (
    <div className={styles.verifyEmailContainer}>
      <Image src={ImagePaths.icons.bigLock} width={72} height={72} alt="" />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>{" "}
      <p>We’ve sent a 6-digit verification code to:</p>
      <div style={{ height: "var(--sds-size-space-300)" }}></div>{" "}
      <p className={styles.email}>Mehran@gmail.com</p>
      <div style={{ height: "var(--sds-size-space-300)" }}></div>{" "}
      <p className={styles.wrongEmail}>Wrong email adress?</p>
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      <p className={styles.inputLabel}>Enter verification code</p>
      <div style={{ height: "var(--sds-size-space-200)" }}></div>
      <VerificationCodeInput
        length={6}
        onComplete={onCodeVerified}
        onChange={setCode}
      />
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      <p className={styles.didNotGetCode}>Didn’t receive an email?</p>
      <div style={{ height: "var(--sds-size-space-100)" }}></div>
      <button
        className={`${styles.resendBtn} ${styles.wrongEmail}`}
        disabled={resendCountdown > 0}
      >
        Resend- {resendCountdown}s
      </button>
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
    </div>
  );
};

export default VerifyEmailForm;
