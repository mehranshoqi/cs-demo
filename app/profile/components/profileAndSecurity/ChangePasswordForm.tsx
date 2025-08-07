
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import styles from "../../Profile.module.scss";
import Input from "@/app/components/commen/Input/Input";
import { useState } from "react";
import { useUserStore } from "@/app/store/userStore";
import AuthService from "@/app/services/auth/authService";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { user_id } = useUserStore();

  const handleChangePassword = async () => {
    if (!user_id || !currentPassword || !newPassword || !confirmPassword) {
      console.log("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      console.log("New passwords do not match");
      return;
    }

    setIsUpdating(true);
    try {
      const response = await AuthService.setPassword(
        newPassword,
        "adminToken", // You might want to get this from environment or store
        user_id
      );

      if (response.data.status === 1) {
        console.log("Password changed successfully");
        // Clear form
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        console.log("Password change failed:", response.data);
      }
    } catch (error) {
      console.error("Error changing password:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className={styles.editContainer}>
      <Input
        placeholder="Current Password"
        label="Current Password"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
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
