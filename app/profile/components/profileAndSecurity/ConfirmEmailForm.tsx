import styles from "../../Profile.module.scss";
import { useState } from "react";
import VerificationCodeInput from "./VerificationCodeInput";

interface ConfirmEmailFormProps {
  email: string;
  onCodeVerified: (code: string) => void;
  onWrongEmail: () => void;
}

const ConfirmEmailForm: React.FC<ConfirmEmailFormProps> = ({
  email,
  onCodeVerified,
  onWrongEmail,
}) => {
  const [resendCountdown, setResendCountdown] = useState(54);
  const [code, setCode] = useState("");

  return (
    <div className={styles.verifyEmailContainer}>
      <h3 className={styles.emailFormTitle}>
        For security reasons, please confirm your current email before making
        any changes.
      </h3>
      <div style={{ height: "var(--sds-size-space-800)" }}></div>{" "}
      <p>We’ve sent a 6-digit verification code to:</p>
      <div style={{ height: "var(--sds-size-space-300)" }}></div>{" "}
      <p className={styles.email}>Mehran@gmail.com</p>
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

export default ConfirmEmailForm;
