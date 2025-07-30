"use client";

import styles from "./AuthModal.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import AppInput from "../commen/Input/Input";
import FillButton from "../commen/FilledButton/FilledButton";
import { useState } from "react";
import AuthService from "@/app/services/authService";

interface ForgotPassProps {
  test: () => void;
}

const ForgotPass: React.FC<ForgotPassProps> = ({ test }) => {
  const [showNewPassForm, setShowNewPassForm] = useState(false);

  return (
    <div className={styles.resetContainer}>
      {showNewPassForm ? (
        <SetNewPass onSubmit={() => {}} />
      ) : (
        <SendEmail onSubmit={() => setShowNewPassForm(true)} />
      )}
    </div>
  );
};

interface SendEmailProps {
  onSubmit: () => void;
}
const SendEmail: React.FC<SendEmailProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await AuthService.passRecovery(email);
      if (response.data.status === 1) onSubmit();
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
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
    </>
  );
};

interface SetNewPassProps {
  onSubmit: () => void;
}
const SetNewPass: React.FC<SetNewPassProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await AuthService.passReset(password, "TOKKKKEN"); // TODO: Mehran

      if (response.data.status === 1) {
        // TODO
      }
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h4 className={styles.formTitle}>Set a new password</h4>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <AppInput
          iconSrc={ImagePaths.icons.lockClose}
          placeholder="Enter new password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <AppInput
          iconSrc={ImagePaths.icons.lockClose}
          placeholder="Confirm new password"
          type="password"
          name="password"
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        <FillButton
          title="Set new password"
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
    </>
  );
};

export default ForgotPass;
