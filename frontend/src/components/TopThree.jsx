import React from 'react';
import UserAvatar from './UserAvatar';
import styles from './TopThree.module.css';

const TopThree = ({ users }) => {
  // Assuming users are pre-sorted or we sort them here if needed
  // For static, we expect users[0] = #2, users[1] = #1, users[2] = #3
  const user2 = users.find(u => u.rank === 2);
  const user1 = users.find(u => u.rank === 1);
  const user3 = users.find(u => u.rank === 3);

  return (
    <div className={styles.topThreeContainer}>
      {user2 && (
        <div className={`${styles.rankCard} ${styles.rankTwo}`}>
          <UserAvatar src={user2.avatar} alt={user2.name} size="80px" />
          <div className={styles.rankNumber}>#2</div>
          <div className={styles.userName}>{user2.name}</div>
          <div className={styles.userPoints}>{user2.points} pts</div>
        </div>
      )}

      {user1 && (
        <div className={`${styles.rankCard} ${styles.rankOne}`}>
          <UserAvatar src={user1.avatar} alt={user1.name} size="100px" />
          <div className={styles.rankNumber}>#1</div>
          <div className={styles.userName}>{user1.name}</div>
          <div className={styles.userPoints}>{user1.points} pts</div>
        </div>
      )}

      {user3 && (
        <div className={`${styles.rankCard} ${styles.rankThree}`}>
          <UserAvatar src={user3.avatar} alt={user3.name} size="80px" />
          <div className={styles.rankNumber}>#3</div>
          <div className={styles.userName}>{user3.name}</div>
          <div className={styles.userPoints}>{user3.points} pts</div>
        </div>
      )}
    </div>
  );
};

export default TopThree;