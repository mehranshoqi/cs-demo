"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./AuthModal.module.scss";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";
import { CSSTransition } from "react-transition-group";
import ImagePaths from "@/app/constants/ImagePaths";
import OutlinedButton from "../commen/OutlinedButton/OutlinedButton";
import Signup from "./Signup";
import Signin from "./Signin";
import ForgotPass from "./ForgotPass";

const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [showSignup, setShowSignup] = useState(true);
  const [forgotPass, setForgotPass] = useState(false);
  const nodeRef = useRef(null);

  const resetFormState = useCallback(() => {
    closeAuthModal();
    setTimeout(function () {
      setForgotPass(false);
      setShowSignup(true);
    }, 800);
  }, [closeAuthModal]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        nodeRef.current &&
        !(nodeRef.current as HTMLElement).contains(event.target as Node)
      ) {
        resetFormState();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        resetFormState();
      }
    };

    if (isAuthModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    };
  }, [isAuthModalOpen, closeAuthModal, resetFormState]);

  return (
    <CSSTransition
      in={isAuthModalOpen}
      timeout={300}
      classNames="auth-modal-fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div className={styles.modalOverlay}>
        <div ref={nodeRef} className={styles.modalContent}>
          <div className={styles.backgroundContainer}>
            <Image
              src={ImagePaths.general.authPattern}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className={styles.backgroundImage}
            />
          </div>

          <div className={styles.modalLeft}>
            <Image
              src={ImagePaths.logos.logo}
              alt="Logo"
              width={106}
              height={29}
            />

            {forgotPass ? (
              <ForgotPass onBackForgotPass={() => setForgotPass(false)} />
            ) : showSignup ? (
              <Signup
                onSignup={(token, dName) => {
                  login(token, dName);
                  resetFormState();
                }}
              />
            ) : (
              <Signin
                onSignIn={(token, dName) => {
                  login(token, dName);
                  resetFormState();
                }}
                onForgotPass={() => setForgotPass(true)}
              />
            )}
            {!forgotPass && (
              <>
                <div className={styles.signupSigninSwitch}>
                  <h3>
                    {showSignup
                      ? "Already have an account?"
                      : "Don't have an account?"}
                  </h3>
                  <span
                    className={` ${styles.authLink} btn`}
                    onClick={() => {
                      setShowSignup(!showSignup);
                    }}
                  >
                    {showSignup ? "Sign in" : "Sign Up"}
                  </span>
                </div>

                <p className={styles.orDivider}>or</p>
                <div className={styles.socialLogins}>
                  <OutlinedButton
                    fontSize={16}
                    fontWeight={600}
                    width="100%"
                    title="Steam"
                    height={48}
                    iconSrc={ImagePaths.icons.steam}
                    borderColor="var(--Gray800)"
                    bgColor="var(--Gray900)"
                    titleColor="var(--Text-Color-TextBodyGray300)"
                  />
                  <OutlinedButton
                    fontSize={16}
                    fontWeight={600}
                    width="100%"
                    height={48}
                    title="Google"
                    iconSrc={ImagePaths.icons.google}
                    borderColor="var(--Gray800)"
                    iconSize={16}
                    bgColor="var(--Gray900)"
                    titleColor="var(--Text-Color-TextBodyGray300)"
                  />
                  <OutlinedButton
                    fontSize={16}
                    fontWeight={600}
                    width="100%"
                    height={48}
                    title="Discord"
                    iconSrc={ImagePaths.icons.discord}
                    borderColor="var(--Gray800)"
                    iconSize={16}
                    bgColor="var(--Gray900)"
                    titleColor="var(--Text-Color-TextBodyGray300)"
                  />
                </div>
                <p className={styles.signupPolicy}>
                  By signing up to CS2SKIN, you agree to the{" "}
                  <a href="#">Policies, Privacy Notice,</a> and{" "}
                  <a href="#">Cookie Notice</a>.
                </p>
              </>
            )}
          </div>
          <div className={styles.modalRight}>
            <video className={styles.banner} autoPlay muted loop playsInline>
              <source src={ImagePaths.video.authVideo} type="video/mp4" />
            </video>
            <div className={styles.gradient}></div>

            <div className={styles.rightContent}>
              <p className={styles.rightText}>
                <span>BUY</span> or <span>SELL</span> Your CS:GO Skins Safe,
                Simple, Secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default AuthModal;
