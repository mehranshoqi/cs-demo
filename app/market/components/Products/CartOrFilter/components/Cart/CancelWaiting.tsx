import OutlinedButton from "@/app/components/commen/OutlinedButton/OutlinedButton";
import styles from "./CartItem.module.scss";
import FillButton from "@/app/components/commen/FilledButton/FilledButton";

interface CancelWaitingActionsProps {
  onContinue: () => void;
}

const CancelWaitingActions: React.FC<CancelWaitingActionsProps> = ({
  onContinue,
}) => {
  return (
    <div className={styles.waitingCancelContainer}>
      <p>The amount will be refunded to your wallet. Are you sure?</p>
      <div className={styles.cancelActions}>
        <OutlinedButton
          title="Continue"
          height={40}
          onClick={onContinue}
          borderColor="var(--Gray800)"
          titleColor="var(--Text-Color-TextBodyGray300)"
        />
        <FillButton
          height={40}
          title="Cancel Trade"
          filledColor="var(--Blood500)"
        />
      </div>
    </div>
  );
};

export default CancelWaitingActions;
