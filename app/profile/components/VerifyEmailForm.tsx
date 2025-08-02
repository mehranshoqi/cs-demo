import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../Profile.module.scss";
import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";

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
      <p className={styles.inputLabel}>Didn’t receive an email?</p>
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

interface VerificationCodeInputProps {
  length: number;
  onComplete: (code: string) => void;
  onChange: (code: string) => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  length,
  onComplete,
  onChange,
}) => {
  const [code, setCode] = useState(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    onChange(newCode.join(""));

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newCode.every((digit) => digit !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className={styles.codeInputContainer}>
      {code.map((digit, index) => {
        const isLast = index == 5;
        const isFirst = index == 0;
        return (
          <div key={index} className={styles.inputWrapper}>
            <input
              ref={(el) => {
                inputRefs.current[index] = el!;
              }}
              type="text"
              maxLength={1}
              value={digit}
              placeholder="0"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={styles.codeInput}
            />
            {!isLast && <div className={styles.rightBorder}></div>}
          </div>
        );
      })}
    </div>
  );
};
