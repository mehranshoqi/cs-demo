"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./SubscriptionEmailInput.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

interface EmailSubscriptionInputProps {
  placeholder?: string;
  onSubmit?: (email: string) => void;
  className?: string;
  border?: string;
}

const EmailSubscriptionInput: React.FC<EmailSubscriptionInputProps> = ({
  placeholder = "cs2skin@example.com",
  onSubmit,
  className,
  border,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && onSubmit) {
      onSubmit(email);
      setEmail("");
    }
  };

  return (
    <form
      style={{ border: border }}
      onSubmit={handleSubmit}
      className={`${styles.subscriptionForm} ${className || ""}`}
    >
      <Image
        src={ImagePaths.icons.envelope}
        alt="Logo"
        width={20}
        height={20}
      />
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.subscriptionInput}
        aria-label="Email for subscription"
        required
      />
      <button
        type="submit"
        className={styles.subscriptionButton}
        aria-label="Subscribe"
      >
        <Image
          src={ImagePaths.icons.arrowRightCircle}
          alt="Logo"
          width={20}
          height={20}
        />
      </button>
    </form>
  );
};

export default EmailSubscriptionInput;
