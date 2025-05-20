import React from 'react';
import RankingItem from './RankingItem';
import styles from './RankingList.module.css';

const RankingList = ({ users, myRanking }) => {
  return (
    <div className={styles.rankingListContainer}>
      {users.map((user) => (
        <RankingItem
          key={user.rank}
          rank={user.rank}
          avatarSrc={user.avatar}
          name={user.name}
          points={user.points}
        />
      ))}
      {myRanking && (
        <RankingItem
          rank={myRanking.rank}
          avatarSrc={myRanking.avatar}
          name={myRanking.name}
          points={myRanking.points}
          isCurrentUser={myRanking.isCurrentUser}
        />
      )}
    </div>
  );
};

export default RankingList;