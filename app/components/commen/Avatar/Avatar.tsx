import ImagePaths from "@/app/constants/ImagePaths";
import Image from "next/image";


interface AppAvatarProps {
  src?: string;
  radius?: number | undefined;
}

const AppAvatar: React.FC<AppAvatarProps> = ({ src, radius }) => {
  return (
    <Image
      src={src ?? ImagePaths.icons.defaultAvatar}
      width={radius ?? 52}
      height={radius ?? 52}
      alt="avatar"
      style={{ borderRadius: radius }}
    />
  );
};

export default AppAvatar;
