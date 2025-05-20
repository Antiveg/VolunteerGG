import LeaderboardAreaSelector from '../components/LeaderboardAreaSelector';
import LeaderboardTopThree from '../components/LeaderboardTopThree';
import LeaderboardRankings from '../components/LeaderboardRankings';

export default function Leaderboard() {
  return (
    <div>
        <LeaderboardAreaSelector />
        <LeaderboardTopThree />
        <LeaderboardRankings />
    </div>
  );
}