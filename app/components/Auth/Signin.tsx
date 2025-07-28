import styles from "./AuthModal.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import AppInput from "../commen/Input/Input";
import FillButton from "../commen/FilledButton/FilledButton";

interface SigninProps {
  onForgotPass: () => void;
}

const Signin: React.FC<SigninProps> = ({ onForgotPass }) => {
  return (
    <>
      <h4 className={styles.formTitle}>Login to CS2SKIN</h4>
      <form className={styles.authForm}>
        <AppInput
          iconSrc={ImagePaths.icons.envelope}
          placeholder="Enter your email"
          type="email"
          name="email"
        />
        <div>
          <AppInput
            iconSrc={ImagePaths.icons.lockClose}
            placeholder="Enter your password"
            type="password"
            name="password"
          />
          <span onClick={onForgotPass} className={styles.forgotButton}>
            Forgot password?
          </span>
        </div>
        <FillButton
          title="Continue"
          onClick={() => {}}
          height="48px"
          fontSize={16}
          fontWeight={600}
        />
      </form>
    </>
  );
};

export default Signin;
