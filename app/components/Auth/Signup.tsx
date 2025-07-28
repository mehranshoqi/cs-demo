import styles from "./AuthModal.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import AppInput from "../commen/Input/Input";
import FillButton from "../commen/FilledButton/FilledButton";


const Signup = () => {
  return (
    <>
      <h4 className={styles.formTitle}>Welcome to CS2SKIN</h4>
      <form className={styles.authForm}>
        <AppInput
          iconSrc={ImagePaths.icons.user}
          placeholder="Enter your Username"
          type="text"
          name="username"
        />
        <AppInput
          iconSrc={ImagePaths.icons.envelope}
          placeholder="Enter your email"
          type="email"
          name="email"
        />
        <AppInput
          iconSrc={ImagePaths.icons.lockClose}
          placeholder="Enter your password"
          type="password"
          name="password"
        />
        <FillButton
          title="Register"
          onClick={() => {}}
          height="48px"
          fontSize={16}
          fontWeight={600}
        />
      </form>
    </>
  );
};

export default Signup;
