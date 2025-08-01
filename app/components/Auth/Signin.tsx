import React, { useState } from "react";
import styles from "./AuthModal.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import AppInput from "../commen/Input/Input";
import FillButton from "../commen/FilledButton/FilledButton";
import AuthService from "@/app/services/auth/authService";

interface SigninProps {
  onForgotPass: () => void;
  onSignIn: (token: string, display_name: string) => void;
}

const Signin: React.FC<SigninProps> = ({ onForgotPass, onSignIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);


    try {
      const response = await AuthService.login(email, password);

      if (response.data.status === 1) {
        const { token, display_name } = response.data.data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("userDisplayName", display_name);
        onSignIn(token, display_name);
      } else {
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h4 className={styles.formTitle}>Login to CS2SKIN</h4>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <AppInput
          iconSrc={ImagePaths.icons.envelope}
          placeholder="Enter your email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <AppInput
            iconSrc={ImagePaths.icons.lockClose}
            placeholder="Enter your password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={onForgotPass} className={styles.forgotButton}>
            Forgot password?
          </span>
        </div>
        <FillButton
          title="Continue"
          height="48px"
          fontSize={16}
          fontWeight={600}
          disabled={loading}
          loading={loading}
        />
      </form>
    </>
  );
};

export default Signin;
