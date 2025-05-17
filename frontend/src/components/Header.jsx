import styles from './Header.module.css';
import userIcon from '../assets/userIcon.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/community">Community & Org.</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user}>
        <span className={styles.userText}>Hello, XXXX</span>
        <img src={userIcon} alt="User Profile" className={styles.userImage} />
      </div>
    </header>
  );
}