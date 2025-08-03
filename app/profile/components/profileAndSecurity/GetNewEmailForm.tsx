import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Input from "@/app/components/commen/Input/Input";

const GetNewEmailForm = () => {
  return (
    <div className={styles.editContainer}>
      <h3 className={styles.emailFormTitle}>
        Enter your new email address below. We’ll send you a verification code.
      </h3>
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      <Input
        placeholder="Enter your email"
        label="New Email Address"
        type="password"
        iconSrc={ImagePaths.icons.envelope}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
    </div>
  );
};

export default GetNewEmailForm;
