
import styles from "../../Profile.module.scss";
import Input from "@/app/components/commen/Input/Input";

const ChangePasswordForm = () => {
  return (
    <div className={styles.editContainer}>
      <Input
        placeholder="Current Password"
        label="Current Password"
        type="password"
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
      <Input placeholder="New Password" label="New Password" type="password" />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
      <Input
        placeholder="Confirm Password"
        label="Confirm Password"
        type="password"
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
    </div>
  );
};

export default ChangePasswordForm;
