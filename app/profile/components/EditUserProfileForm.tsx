import AppAvatar from "@/app/components/commen/Avatar/Avatar";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../Profile.module.scss";
import { useState } from "react";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";
import Input from "@/app/components/commen/Input/Input";


const EditUserProfileForm = () => {
  const [imgUploaded, setImageUploaded] = useState(false);
  return (
    <div className={styles.editProfileFormContainer}>
      <AppAvatar radius={98} />
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      {!imgUploaded ? (
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
      <div style={{ height: "var(--sds-size-space-1200)" }}></div>
    </div>
  );
};

export default EditUserProfileForm;
