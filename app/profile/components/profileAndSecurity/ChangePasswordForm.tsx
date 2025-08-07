
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import styles from "../../Profile.module.scss";
import Input from "@/app/components/commen/Input/Input";
import { useState } from "react";
import { useUserStore } from "@/app/store/userStore";
import AuthService from "@/app/services/auth/authService";
import toast from "react-hot-toast";

const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { user_id, token } = useUserStore();

  const handleChangePassword = async () => {
    if (!user_id || !token || !newPassword || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    setIsUpdating(true);
    try {
      const response = await AuthService.passReset(
        newPassword,
        token
      );

      if (response.data.status === 1) {
        toast.success("Password changed successfully");
        // Clear form
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error("Password change failed");
      }
    } catch (error) {
      toast.error("Error changing password");
      console.error("Error changing password:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className={styles.editContainer}>
      <Input
        placeholder="New Password"
        label="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
      <Input
        placeholder="Confirm Password"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
      <FillButton
        title={isUpdating ? "Changing Password..." : "Change Password"}
        width="100%"
        height={48}
        fontSize={16}
        fontWeight={600}
        filledColor="rgba(255,255,255,.06)"
        onClick={handleChangePassword}
      />
    </div>
  );
};

export default ChangePasswordForm;
