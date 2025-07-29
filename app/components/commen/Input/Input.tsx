"use client";

import React, { InputHTMLAttributes, forwardRef, useState } from "react";
import Image from "next/image";
import styles from "./Input.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconSrc?: string;
  iconAlt?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      iconSrc,
      iconAlt = "Input icon",
      className,
      id,
      onFocus,
      onBlur,
      type,
      value,
      onChange,
      ...rest
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [internalValue, setInternalValue] = useState(value || "");

    React.useEffect(() => {
      setInternalValue(value || "");
    }, [value]);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(event.target.value);
      onChange?.(event);
    };

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const actualInputType = type === "password" && showPassword ? "text" : type;

    const shouldIconBeWhite =
      isFocused || (internalValue && internalValue.toString().length > 0);

    return (
      <div className={`${styles.inputWrapper} ${className || ""}`}>
        {label && (
          <label htmlFor={inputId} className={styles.inputLabel}>
            {label}
          </label>
        )}
        <div className={styles.inputContainer}>
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={20}
              height={20}
              className={`${styles.inputIcon} ${shouldIconBeWhite ? styles.iconFocused : styles.iconBlurred
                }`}
            />
          )}
          <input
            id={inputId}
            ref={ref}
            className={styles.inputField}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={internalValue}
            type={actualInputType}
            {...rest}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.passwordToggle}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <Image
                src={
                  showPassword
                    ? ImagePaths.icons.eyeOn
                    : ImagePaths.icons.eyeOff
                }
                alt={showPassword ? "Hide password" : "Show password"}
                className={
                  shouldIconBeWhite ? styles.iconFocused : styles.iconBlurred
                }
                width={20}
                height={20}
              />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
