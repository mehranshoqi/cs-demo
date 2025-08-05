import { ProfileMenu, ProfileMenuItem } from "../types";
import ImagePaths from "./ImagePaths";

const profileMenuItems: ProfileMenuItem[] = [
  {
    title: "Profile",
    iconSrc: ImagePaths.profileMenu.profileMenu,
    item: ProfileMenu.profile,
  },
  {
    title: "Security",
    iconSrc: ImagePaths.profileMenu.securityMenu,
    item: ProfileMenu.security,
  },
  {
    title: "Transactions",
    iconSrc: ImagePaths.profileMenu.transactions,
    item: ProfileMenu.transactions,
  },
  {
    title: "Game History",
    iconSrc: ImagePaths.profileMenu.clock,
    item: ProfileMenu.gameHistory,
  },
  {
    title: "Statistics",
    iconSrc: ImagePaths.profileMenu.statistics,
    item: ProfileMenu.statistics,
  },
  {
    title: "Trades",
    iconSrc: ImagePaths.profileMenu.trades,
    item: ProfileMenu.trades,
  },
  {
    title: "Verify Identity",
    iconSrc: ImagePaths.profileMenu.userCheck,
    item: ProfileMenu.verifyIdentity,
  },
];


export default profileMenuItems;