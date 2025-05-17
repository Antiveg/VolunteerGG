import styles from './AboutUsSDG.module.css';
import sdgLogo from '../assets/sdgLogo.png';

export default function AboutUsSDG() {
    return (
        <div className={styles.sdgContainer}>
            <div className={styles.sdgContent}>
                <h1>SUSTAINABLE DEVELOPMENT GOALS</h1>
                <a href="https://sdgs.un.org/goals/goal17" target="_blank"><img src={sdgLogo} alt="SDG Logo" className={styles.sdgLogo} /></a>
                <h2>SDG 17: Partnerships for the goal</h2>
                <p>SDG 17, “Partnerships for the Goals,” calls for cross-sector collaboration—uniting governments, NGOs, businesses, academia, and individuals. Volunteer.gg advances this by matching organizations and volunteers via smart filters (location, interests, activity), sharing impact data and reviews for transparency, and using multi-level leaderboards and gamified achievements to motivate participation and peer mentoring. Our ad, premium, and event-fee revenue sustains the platform and funds tools and workshops that strengthen these partnerships, driving progress on SDG 17.</p>
            </div>
        </div>
    );
}