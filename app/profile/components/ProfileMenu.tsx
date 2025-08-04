import { ProfileMenu, ProfileMenuItem } from "@/app/types";
import styles from "../Profile.module.scss";
import profileMenuItems from "@/app/constants/ProfileMenu";
import SolidSvg from "@/app/components/commen/svgMask/svgMask";

import { Key } from "react";

interface ProfileMenuViewProps {
  activeItem: ProfileMenu;
  onChange: (activeItem: ProfileMenu) => void;
}

const ProfileMenuView: React.FC<ProfileMenuViewProps> = ({
  activeItem,
  onChange,
}) => {
  return (
    <div className={styles.MenuContainer}>
      {profileMenuItems.map(
        (i: ProfileMenuItem, index: Key | null | undefined) => (
          <SingleMenu
            key={index}
            item={i}
            onSelect={onChange}
            isSelect={activeItem == i.item}
          />
        )
      )}
    </div>
  );
};

export default ProfileMenuView;

interface SingleMenuProps {
  item: ProfileMenuItem;
  onSelect: (item: ProfileMenu) => void;
  isSelect: boolean;
}

const SingleMenu: React.FC<SingleMenuProps> = ({
  onSelect,
  item,
  isSelect,
}) => {
  return (
    <div
      className={`${styles.menuItem} btn ${isSelect ? styles.active : styles.deactive
        }`}
      onClick={() => onSelect(item.item)}
    >
      <SolidSvg
        path={item.iconSrc}
        width={20}
        height={20}
        color={
          isSelect
            ? "var(--Primary500)"
            : "var(--Text-Color-TextSubtitleGray400)"
        }
      />
      <p>{item.title}</p>
    </div>
  );
};
