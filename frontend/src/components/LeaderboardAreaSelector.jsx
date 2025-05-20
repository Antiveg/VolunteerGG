import styles from './LeaderboardAreaSelector.module.css';

const LeaderboardAreaSelector = () => {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabItem}>National</div>
      <div className={styles.tabItem}>Province</div>
      <div className={styles.tabItem}>Local</div>
    </div>
  );
};

export default LeaderboardAreaSelector;