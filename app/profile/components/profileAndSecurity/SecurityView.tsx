import ProfileRowDetails from "../ProfileRowDetails";
import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import EmailSubscriptionInput from "@/app/components/commen/SubscriptionEmailInput/SubscriptionEmailInput";
import { useModal } from "@/app/context/ModalContext";
import ProfileEditModal from "./ProfileEditModal";
import ChangePasswordForm from "./ChangePasswordForm";
import GetNewEmailForm from "./GetNewEmailForm";
import TwoFAForm from "./2FAForm";
const SecurityView = () => {
  const { openModal, closeModal } = useModal();
  return (
    <div className={styles.viewContainer}>
      <ProfileRowDetails
        title="Security Setting"
        titleFontSize="24px"
        descFontSize="16px"
        desc="Secure your account and stay protected against unauthorized access"
      />
      <div style={{ height: "var(--sds-size-space-1600)" }}></div>

      <div style={{ height: "var(--sds-size-space-800)" }}></div>
      <ProfileRowDetails
        title="Change Password"
        desc="Keep your account secure by changing your password regularly"
        primaryBtn={false}
        buttonLabel="Change Password"
        onButtonClick={() => {
          openModal(
            <ProfileEditModal
              title="Change Password"
              buttonTitle="Change Password"
              onClose={closeModal}
              content={<ChangePasswordForm />}
            />,
            "420px"
          );
        }}
      />
      <div style={{ height: "var(--sds-size-space-600)" }}></div>
      <ProfileRowDetails
        title="Change Email Adress"
        desc="Keep your email up to date to ensure you don’t miss important account notifications"
        primaryBtn={false}
        buttonLabel="Edit"
        onButtonClick={() => {
          openModal(
            // <ProfileEditModal
            //   title="Change Password"
            //   buttonTitle="Change Password"
            //   onClose={closeModal}
            //   content={
            //     <ConfirmEmailForm
            //       email="me33hran@mg.com"
            //       onCodeVerified={() => {}}
            //       onWrongEmail={() => {}}
            //     />
            //   }
            // />,
            <ProfileEditModal
              title="Enter New Email Address"
              buttonTitle="Change Password"
              onClose={closeModal}
              content={<GetNewEmailForm />}
            />,
            "420px"
          );
        }}
      />
      <div style={{ height: "var(--sds-size-space-400)" }}></div>
      <EmailSubscriptionInput
        border="none"
        padding="16px 0"
        showRightIcon={false}
      />
      <div className={styles.border}></div>
      <ProfileRowDetails
        title="Two Factor Authentication (2FA / MFA)"
        desc="Add an extra layer of protection to your account with two-factor authentication"
        primaryBtn={false}
        buttonLabel="Enable Authentication"
        titleIcon={ImagePaths.icons.shieldCheck}
        onButtonClick={() => {
          openModal(
            <ProfileEditModal
              title="Set Up Two Factor Authentication"
              buttonTitle="Enable 2FA"
              onClose={closeModal}
              content={<TwoFAForm />}
            />,
            "420px"
          );
        }}
      />
      <div style={{ height: "var(--sds-size-space-400)" }}></div>
    </div>
  );
};

export default SecurityView;
