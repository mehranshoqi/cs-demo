import ImagePaths from "@/app/constants/ImagePaths";
import styles from "../../Profile.module.scss";
import Image from "next/image";
import { useModal } from "@/app/context/ModalContext";
import ProfileEditModal from "../profileAndSecurity/ProfileEditModal";
import CryptoDepositDetails from "./CryptoDepositDetails";

const TransactionItem = () => {
  const { openModal, closeModal } = useModal();

  return (
    <div
      className={`${styles.transItem} btn`}
      onClick={() => {
        openModal(
          // <ProfileEditModal
          //   title="Daily Case Open"
          //   onClose={closeModal}
          //   buttonTitle="Close"
          //   primaryBtn={false}
          //   content={<DailyCasesOpenDetails />}

          // />,
          <ProfileEditModal
            title="Daily Case Open"
            onClose={closeModal}
            buttonTitle="Close"
            primaryBtn={false}
            content={<CryptoDepositDetails />}
          />,
          "400px"
        );
      }}
    >
      <Image
        src={ImagePaths.transactions.fiatIcon}
        width={20}
        height={20}
        alt=""
      />

      <h3 className={styles.transTitle}>Daily Case Open</h3>

      <div className={styles.badgeWrapper}>
        {/* TODO: complete - pending - withdraw */}
        <div className={`${styles.transStatusBadge} ${styles.complete}`}>
          Complete
        </div>
      </div>

      <div className={styles.coin}>
        <Image src={ImagePaths.icons.coin} width={20} height={20} alt="" />
        <h3>2.55</h3>
      </div>
      <h4 className={styles.date}>April 23, 2024 10:15 AM</h4>
    </div>
  );
};

export default TransactionItem;
