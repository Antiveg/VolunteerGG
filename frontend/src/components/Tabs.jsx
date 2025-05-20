import styles from './Tabs.module.css';

const Tabs = () => {
  return (
    <div className={styles.tabsContainer}>
      <button className={styles.tabButton}>National</button>
      <button className={`${styles.tabButton} ${styles.active}`}>Province</button>
      <button className={styles.tabButton}>Local</button>
    </div>
  );
};

export default Tabs;