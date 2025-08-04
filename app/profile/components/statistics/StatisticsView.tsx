import styles from "../../Profile.module.scss";
import ProfileRowDetails from "../ProfileRowDetails";

const StatisticsView = () => {
    return (
        <div className={`${styles.viewContainer} flex flex-col gap-4`}>
            <ProfileRowDetails
                title="Statistics"
                titleFontSize="24px"
                descFontSize="16px"
                desc="Detailed breakdown of your in-game performance"
            />

            <div
                className={styles.border}
                style={{ margin: "var(--sds-size-space-300) 0 " }}
            ></div>

            <div className="p-2.5 flex bg-[#121925] rounded-lg items-center justify-center gap-2">
                <div>Statistics content will be displayed here</div>
            </div>
        </div>
    );
};

export default StatisticsView; 