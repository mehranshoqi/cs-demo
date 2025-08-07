import AppAvatar from "@/app/components/commen/Avatar/Avatar";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import { useState, useRef, ChangeEvent } from "react";
import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";
import Input from "@/app/components/commen/Input/Input";
import { useUserStore } from "@/app/store/userStore";
import AuthService from "@/app/services/auth/authService";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";

const EditUserProfileForm = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [newDisplayName, setNewDisplayName] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { displayName, token, user_id, steam_id, setDisplayName } = useUserStore();
  const handleChoosePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleRemovePhoto = () => {
    setProfileImage(null);
  };

  const handleUpdateProfile = async () => {
    if (!token || !newDisplayName.trim()) return;

    setIsUpdating(true);

    try {
      const response = await AuthService.updateProfile(
        token,
        newDisplayName.trim(),
        "",
        "",
        steam_id
      );

      if (response.data.status === 1) {
        setDisplayName(newDisplayName.trim());
        onClose();
        console.log("Profile updated successfully");
      } else {
        console.log("Profile update failed:", response.data);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className={styles.editContainer}>
      <AppAvatar
        radius={98}
        src={profileImage || ImagePaths.icons.defaultAvatar}
      />

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*"
      />
      <div style={{ height: "var(--sds-size-space-800)" }}></div>

      {!profileImage ? (
        <OutlinedButton
          title="Choose photo"
          iconSrc={ImagePaths.icons.plus}
          width="100%"
          borderColor="var(--Gray800)"
          height={48}
          fontSize={16}
          fontWeight={600}
          titleColor="var(--Text-Color-TextBodyGray300)"
          iconColor="var(--Text-Color-TextBodyGray300)"
          onClick={handleChoosePhotoClick}
        />
      ) : (
        <div className={styles.uploadedActions}>
          <OutlinedButton
            title="Remove"
            iconSrc={ImagePaths.icons.trash}
            width="100%"
            borderColor="var(--Gray800)"
            height={48}
            fontSize={16}
            iconSize={17}
            fontWeight={600}
            titleColor="var(--Text-Color-TextBodyGray300)"
            iconColor="var(--Text-Color-TextBodyGray300)"
            onClick={handleRemovePhoto}
          />
          <OutlinedButton
            title="Change"
            iconSrc={ImagePaths.icons.autoTrade}
            width="100%"
            borderColor="var(--Gray800)"
            height={48}
            fontSize={16}
            iconSize={20}
            fontWeight={600}
            titleColor="var(--Text-Color-TextBodyGray300)"
            iconColor="var(--Text-Color-TextBodyGray300)"
            onClick={handleChoosePhotoClick}
          />
        </div>
      )}
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      <Input
        placeholder="Username"
        value={newDisplayName || displayName || ""}
        onChange={(e) => setNewDisplayName(e.target.value)}
        iconSrc={ImagePaths.icons.user}
        label="Username"
        height={48}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>

      <FillButton
        title={isUpdating ? "Updating..." : "Save Changes"}
        width="100%"
        height={48}
        fontSize={16}
        fontWeight={600}
        filledColor="rgba(255,255,255,.06)"
        onClick={handleUpdateProfile}
      />
    </div>
  );
};

export default EditUserProfileForm;
