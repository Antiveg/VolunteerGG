import heroLogo from "../assets/heroLogo.png";
import styles from "./AboutUsHero.module.css";

export default function AboutUsHero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <img src={heroLogo} alt="VolunteerGG"/>
                <h1>Volunteer.gg</h1>
                <p>A competitive volunteer matching platform</p>
            </div>
        </div>
    );
}