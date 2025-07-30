import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AuthModal.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import AppInput from "../commen/Input/Input";
import FillButton from "../commen/FilledButton/FilledButton";
import AuthService from "@/app/services/authService";

interface SignupProps {
  onSignup: (token: string, display_name: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>(""); // Maps to d_name in backend
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await AuthService.register(email, username, password);

      if (response.data.status === 1) {
        // Get Token
        const loginRes = await AuthService.login(email, password);

        if (loginRes.data.status === 1) {
          const { token, display_name } = loginRes.data.data;
          localStorage.setItem("authToken", token);
          localStorage.setItem("userDisplayName", display_name);
          onSignup(token, display_name);
        } else {
          setError("Login failed. Please check your email and password.");
        }
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.errorCode) {
        setError(`Registration failed: ${err.response.data.errorCode}`);
      } else {
        setError("An unexpected error occurred during registration.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h4 className={styles.formTitle}>Welcome to CS2SKIN</h4>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <AppInput
          iconSrc={ImagePaths.icons.user}
          placeholder="Enter your Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AppInput
          iconSrc={ImagePaths.icons.envelope}
          placeholder="Enter your email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AppInput
          iconSrc={ImagePaths.icons.lockClose}
          placeholder="Enter your password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        <FillButton
          title="Register"
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

export default Signup;
