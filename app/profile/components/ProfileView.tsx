import AppAvatar from "@/app/components/commen/Avatar/Avatar";
import ProfileRowDetails from "./ProfileRowDetrails";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../Profile.module.scss";
import EmailSubscriptionInput from "@/app/components/commen/SubscriptionEmailInput/SubscriptionEmailInput";
import { useModal } from "@/app/context/ModalContext";
import ProfileEditModal from "./ProfileEditModal";
import EditUserProfileForm from "./EditUserProfileForm";
import VerifyEmailForm from "./VerifyEmailForm";
const ProfileView = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div className={styles.profileViewContainer}>
      <ProfileRowDetails
        title="Pooya"
        titleFontSize="22px"
        desc="Personalize your profile by updating your name and avatar"
        primaryBtn={false}
        buttonLabel="Edit Profile"
        buttonWidth="110px"
        left={<AppAvatar radius={52} src={ImagePaths.icons.avatar} />}
        onButtonClick={() => {
          openModal(
            <ProfileEditModal
              title="User Info"
              buttonTitle="Save"
              onClose={closeModal}
              content={<EditUserProfileForm />}
            />,
            "420px"
          );
        }}
      />
      <div style={{ height: "var(--sds-size-space-1600)" }}></div>
      <ProfileRowDetails
        title="Linked Accounts"
        desc="Connect your Steam or Discord account for a more integrated experience."
      />
      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      <ProfileRowDetails
        title="Steam Account"
        desc="Link your Steam account to sync your inventory and trades."
        primaryBtn={false}
        buttonLabel="Link Steam Account"
        titleIcon={ImagePaths.icons.steam2}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
      <ProfileRowDetails
        title="Discord Account"
        desc="Connect to get support, alerts, and community access."
        primaryBtn={false}
        buttonLabel="Link Steam Account"
        titleIcon={ImagePaths.icons.discord}
        disabled={true}
      />
      <div className={styles.border}></div>
      <ProfileRowDetails
        title="Email Address"
        desc="Verify your email address to secure your account and receive updates"
        primaryBtn={true}
        buttonLabel="Verify"
        titleRightBadge={<div className={styles.verifiedBadge}>Verified</div>}
        onButtonClick={() => {
          openModal(
            <ProfileEditModal
              title="Verify Your Email"
              buttonTitle="Verify"
              onClose={closeModal}
              content={
                <VerifyEmailForm
                  email="me33hran@mg.com"
                  onCodeVerified={() => {}}
                  onWrongEmail={() => {}}
                />
              }
            />,
            "420px"
          );
        }}
      />
      <div style={{ height: "var(--sds-size-space-400)" }}></div>
      <EmailSubscriptionInput border="solid 1px var(--Gray800)" />
    </div>
  );
};

export default ProfileView;
