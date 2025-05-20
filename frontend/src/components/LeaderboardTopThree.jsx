import React from 'react';
import styles from './LeaderboardTopThree.module.css';

// Data for the leaderboard cards
const leaderboardData = [
  {
    rank: 2,
    name: 'Lorem Ipsum',
    points: '3000 pts',
    avatarUrl: 'http://googleusercontent.com/image_collection/image_retrieval/13861919431641801834', // Placeholder avatar
    color: '#f0f2f5', // Light grey for #2
    textColor: '#000000',
  },
  {
    rank: 1,
    name: 'Lorem Ipsum',
    points: '4000 pts',
    avatarUrl: 'http://googleusercontent.com/image_collection/image_retrieval/13861919431641801834', // Placeholder avatar
    color: '#fffbe6', // Light yellow for #1
    textColor: '#000000',
    isTop: true, // To make it slightly larger or more prominent
  },
  {
    rank: 3,
    name: 'Lorem Ipsum',
    points: '2500 pts',
    avatarUrl: 'http://googleusercontent.com/image_collection/image_retrieval/13861919431641801834', // Placeholder avatar
    color: '#ffebd9', // Light peach for #3
    textColor: '#000000',
  },
];

const LeaderboardCard = ({ rank, name, points, avatarUrl, color, textColor, isTop }) => {
  return (
    <div
      className={`${styles.card} ${isTop ? styles.topCard : ''}`}
      style={{ backgroundColor: color, color: textColor }}
    >
      <div className={styles.avatarContainer}>
        <img src={avatarUrl} alt={`${name}'s avatar`} className={styles.avatar} />
      </div>
      <div className={styles.rank}>#{rank}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.points}>{points}</div>
    </div>
  );
};

const LeaderboardTopThree = () => {
  // Sort data to ensure #1 is in the middle if not already
  const sortedData = [...leaderboardData].sort((a, b) => {
    if (a.rank === 1) return -1; // #1 comes first for mapping to middle
    if (b.rank === 1) return 1;
    return a.rank - b.rank;
  });

  // Reorder for display: #2, #1, #3
  const displayOrderData = [
    sortedData.find(item => item.rank === 2),
    sortedData.find(item => item.rank === 1),
    sortedData.find(item => item.rank === 3),
  ].filter(Boolean); // Filter out undefined if any rank is missing

  return (
    <div className={styles.leaderboardContainer}>
      {displayOrderData.map((item) => (
        <LeaderboardCard
          key={item.rank}
          rank={item.rank}
          name={item.name}
          points={item.points}
          avatarUrl={item.avatarUrl}
          color={item.color}
          textColor={item.textColor}
          isTop={item.isTop}
        />
      ))}
    </div>
  );
};

export default LeaderboardTopThree;