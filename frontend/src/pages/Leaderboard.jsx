import Tabs from '../components/Tabs';
import TopThree from '../components/TopThree';
import RankingList from '../components/RankingList';
import styles from './Leaderboard.module.css';

const topUsersData = [
  { rank: 2, name: 'Lorem Ipsum', points: 3000, avatar: '/src/assets/avatar.png' },
  { rank: 1, name: 'Lorem Ipsum', points: 4000, avatar: '/src/assets/avatar.png' },
  { rank: 3, name: 'Lorem Ipsum', points: 2500, avatar: '/src/assets/avatar.png' },
];

const rankingListData = [
  { rank: 4, name: 'Lorem Ipsum', points: 2000, avatar: '/src/assets/avatar.png' },
  { rank: 5, name: 'Lorem Ipsum', points: 2000, avatar: '/src/assets/avatar.png' },
  { rank: 6, name: 'Lorem Ipsum', points: 2000, avatar: '/src/assets/avatar.png' },
  { rank: 7, name: 'Lorem Ipsum', points: 2000, avatar: '/src/assets/avatar.png' },
  { rank: 8, name: 'Lorem Ipsum', points: 2000, avatar: '/src/assets/avatar.png' },
];

const myRankingData = { rank: 4, name: 'My Own Ranking', points: 2000, avatar: '/src/assets/avatar.png', isCurrentUser: true };


const Leaderboard = () => {
  return (
    <div className={styles.leaderboardContainer}>
      <Tabs />
      <TopThree users={topUsersData} />
      <RankingList users={rankingListData} myRanking={myRankingData} />
    </div>
  );
};

export default Leaderboard;