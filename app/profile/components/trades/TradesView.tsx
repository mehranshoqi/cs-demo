import styles from "../../Profile.module.scss";
import ProfileRowDetails from "../ProfileRowDetails";

const TradesView = () => {
    return (
        <div className={`${styles.viewContainer} flex flex-col gap-4`}>
            <ProfileRowDetails
                title="Trades"
                titleFontSize="24px"
                descFontSize="16px"
                desc="Keep track of every item you've bought or sold in the marketplace"
            />

            <div
                className={styles.border}
                style={{ margin: "var(--sds-size-space-300) 0 " }}
            ></div>

            <div className="p-2.5 flex bg-[#121925] rounded-lg items-center justify-center gap-2">
                <div>Your trades will appear here once you start trading</div>
            </div>
        </div>
    );
};

export default TradesView; 