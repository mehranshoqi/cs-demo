import Image from "next/image";
import styles from "../Profile.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import { ReactNode } from "react";

interface ProfileEditModalProps {
  title: string;
  buttonTitle: string;
  content: ReactNode;
  onClose: () => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  title,
  buttonTitle,
  content,
  onClose,
}) => {
  return (
    <div className={styles.profileEditModal}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <div className={`${styles.closeBtn} btn`} onClick={onClose}>
          <Image src={ImagePaths.icons.xMark} width={20} height={20} alt="" />
        </div>
      </div>

      <div className={styles.content}>
        {content}
        <FillButton
          title={buttonTitle}
          width="100%"
          height={48}
          fontSize={16}
          fontWeight={600}
        />
      </div>
    </div>
  );
};

export default ProfileEditModal;
