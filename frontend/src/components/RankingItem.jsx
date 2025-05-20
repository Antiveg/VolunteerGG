import React from 'react';
import UserAvatar from './UserAvatar';
import styles from './RankingItem.module.css';

const RankingItem = ({ rank, avatarSrc, name, points, isCurrentUser = false }) => {
  return (
    <div className={`${styles.rankingItem} ${isCurrentUser ? styles.currentUser : ''}`}>
      <div className={styles.rankPosition}>
        <span className={styles.rankCircle}>#{rank}</span>
      </div>
      <div className={styles.userInfo}>
        {/* For users #4 onwards, the avatar is not shown in the provided image directly on the rank number,
            but usually, leaderboards show avatars. Let's keep it optional or adjust.
            The image shows #4, #5, #6 etc. with a grey circle, and 'My Own Ranking' also with a grey circle.
            Let's use the UserAvatar component within the grey circle for consistency or remove if not desired.
        */}
        {/* <UserAvatar src={avatarSrc} alt={name} size="40px" /> */}
        <span className={styles.userName}>{name}</span>
      </div>
      <div className={styles.points}>{points} Pts</div>
    </div>
  );
};

export default RankingItem;