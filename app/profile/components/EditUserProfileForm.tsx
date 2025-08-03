import AppAvatar from "@/app/components/commen/Avatar/Avatar";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../Profile.module.scss";
import { useState, useRef, ChangeEvent } from "react";
import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";
import Input from "@/app/components/commen/Input/Input";

const EditUserProfileForm = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        value="Mehran"
        iconSrc={ImagePaths.icons.user}
        label="Username"
        height={48}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
    </div>
  );
};

export default EditUserProfileForm;
