import styles from "../Profile.module.scss";
const EmptyListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.emptyTransContainer}>
            {children}
        </div>
    );
};

export default EmptyListItem;

