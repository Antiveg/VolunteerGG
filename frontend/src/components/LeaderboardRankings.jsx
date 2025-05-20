import styles from './LeaderboardRankings.module.css';

const rankListData = [
  { id: 1, rank: 4, name: 'Lorem Ipsum', points: '2000 Pts', isCurrentUser: false },
  { id: 2, rank: 5, name: 'Lorem Ipsum', points: '2000 Pts', isCurrentUser: false },
  { id: 3, rank: 6, name: 'Lorem Ipsum', points: '2000 Pts', isCurrentUser: false },
  { id: 4, rank: 7, name: 'Lorem Ipsum', points: '2000 Pts', isCurrentUser: false },
  { id: 5, rank: 8, name: 'Lorem Ipsum', points: '2000 Pts', isCurrentUser: false },
];

const currentUserRankData = {
  id: 'current',
  rank: 4,
  name: 'My Own Ranking',
  points: '2000 Pts',
  isCurrentUser: true,
};

const RankListItem = ({ rank, name, points, isCurrentUser }) => {
  return (
    <div className={`${styles.listItem} ${isCurrentUser ? styles.currentUserItem : styles.regularItem}`}>
      <div className={styles.rank}>#{rank}</div>
      <div className={styles.avatarPlaceholder}></div>
      <div className={styles.name}>{name}</div>
      <div className={styles.points}>{points}</div>
    </div>
  );
};

const LeaderboardRankings = () => {
  return (
    <div className={styles.rankListContainer}>
      {rankListData.map((item) => (
        <RankListItem
          key={item.id}
          rank={item.rank}
          name={item.name}
          points={item.points}
          isCurrentUser={item.isCurrentUser}
        />
      ))}
      <div className={styles.separator}></div>
      <RankListItem
        rank={currentUserRankData.rank}
        name={currentUserRankData.name}
        points={currentUserRankData.points}
        isCurrentUser={currentUserRankData.isCurrentUser}
      />
    </div>
  );
};

export default LeaderboardRankings;