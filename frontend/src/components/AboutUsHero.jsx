import heroLogo from "../assets/heroLogo.png";
import styles from "./AboutUsHero.module.css";
import heroBackgroundVideo from "../assets/hero-background-video.mp4";

export default function AboutUsHero() {
    return (
        <div className={styles.heroContainer}>
            <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src={heroBackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.heroContent}>
                <img src={heroLogo} alt="VolunteerGG"/>
                <h1>Volunteer.gg</h1>
                <p>A competitive volunteer matching platform</p>
            </div>
        </div>
    );
}