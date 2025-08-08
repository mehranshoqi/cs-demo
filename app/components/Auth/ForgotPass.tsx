"use client";

import styles from "./AuthModal.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import AppInput from "../commen/Input/Input";
import FillButton from "../commen/FilledButton/FilledButton";
import { useState } from "react";
import AuthService from "@/app/services/auth/authService";
import Image from "next/image";

interface ForgotPassProps {
  onBackForgotPass: () => void;
}

const ForgotPass: React.FC<ForgotPassProps> = ({ onBackForgotPass }) => {
  const [showNewPassForm, setShowNewPassForm] = useState(false);

  return (
    <div className={styles.resetContainer}>
      {showNewPassForm ? (
        <SetNewPass onSubmit={() => {}} />
      ) : (
        <SendEmail
          onSubmit={() => setShowNewPassForm(true)}
          onBackForgotPass={() => onBackForgotPass()}
        />
      )}
    </div>
  );
};

interface SendEmailProps {
  onSubmit: () => void;
  onBackForgotPass: () => void;
}
const SendEmail: React.FC<SendEmailProps> = ({
  onSubmit,
  onBackForgotPass,
}) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await AuthService.passRecovery(email);
      if (response.data.status === 1) {
        onSubmit();
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        onClick={onBackForgotPass}
        className="btn"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "6px",
          marginBottom: "60px",
        }}
      >
        <Image
          src={ImagePaths.icons.arrowLeft2}
          width={20}
          height={20}
          alt=""
          className={styles.packImage}
        />
        <h6>Back</h6>
      </div>
      <h4 className={styles.formTitle}>Rest Password </h4>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <AppInput
          iconSrc={ImagePaths.icons.envelope}
          placeholder="Enter your email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <FillButton
          title="Send Recovery Email"
          height="48px"
          fontSize={16}
          fontWeight={600}
          disabled={loading}
          loading={loading}
        />

        <p className={styles.resetInfo}>
          You will receive a recovery email where you can reset your password.
        </p>
      </form>
      <div style={{ height: "60px" }}></div>
    </>
  );
};

interface SetNewPassProps {
  onSubmit: () => void;
}
const SetNewPass: React.FC<SetNewPassProps> = ({ onSubmit }) => {
  return (
    <>
      <h4 className={styles.formTitle}>Set a new password</h4>
      <form className={styles.authForm}>
        <AppInput
          iconSrc={ImagePaths.icons.lockClose}
          placeholder="Enter new password"
          type="password"
          name="password"
        />
        <AppInput
          iconSrc={ImagePaths.icons.lockClose}
          placeholder="Confirm new password"
          type="password"
          name="password"
        />

        <FillButton
          title="Set new password"
          onClick={onSubmit}
          height="48px"
          fontSize={16}
          fontWeight={600}
        />

        <p className={styles.resetInfo}>
          You will receive a recovery email where you can reset your password.
        </p>
      </form>
    </>
  );
};

export default ForgotPass;
