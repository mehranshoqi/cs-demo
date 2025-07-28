import styles from "./AuthModal.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import AppInput from "../commen/Input/Input";
import FillButton from "../commen/FilledButton/FilledButton";

interface ResetPassProps {
  test: () => void;
}

const ResetPass: React.FC<ResetPassProps> = ({ test }) => {
  return (
    <div className={styles.resetContainer} >
      <h4 className={styles.formTitle}>Rest Password </h4>
      <form className={styles.authForm}>
        <AppInput
          iconSrc={ImagePaths.icons.envelope}
          placeholder="Enter your email"
          type="email"
          name="email"
        />

        <FillButton
          title="Send Recovery Email"
          onClick={() => {}}
          height="48px"
          fontSize={16}
          fontWeight={600}
        />

        <p className={styles.resetInfo}>
          You will receive a recovery email where you can reset your password.
        </p>
      </form>
    </div>
  );
};

export default ResetPass;
