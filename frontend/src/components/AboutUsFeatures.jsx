import AboutUsFeatureImg1 from "../assets/AboutUsFeatureImg1.png";
import AboutUsFeatureImg2 from "../assets/AboutUsFeatureImg2.png";
import AboutUsFeatureImg3 from "../assets/AboutUsFeatureImg3.png";
import AboutUsFeatureImg4 from "../assets/AboutUsFeatureImg4.png";

import styles from "./AboutUsFeatures.module.css";

export default function AboutUsFeatures() {
    return (
        <div className={styles.featuresContainer}>
            <div className={styles.featuresContent}>
                <div
                    style={{ backgroundImage: `url(${AboutUsFeatureImg1})` }}
                    className={styles.featureItem}
                >
                    <h2>Volunteer Matching</h2>
                    <p>Connect with organizations that match your interests and skills.</p>
                </div>
                <div
                    style={{ backgroundImage: `url(${AboutUsFeatureImg2})` }}
                    className={styles.featureItem}
                >
                    <h2>Impact Tracking</h2>
                    <p>Track your volunteer hours and impact on the community.</p>
                </div>
                <div
                    style={{ backgroundImage: `url(${AboutUsFeatureImg3})` }}
                    className={styles.featureItem}
                >
                    <h2>Gamification</h2>
                    <p>Earn badges and rewards for your volunteer efforts.</p>
                </div>
                <div
                    style={{ backgroundImage: `url(${AboutUsFeatureImg4})` }}
                    className={styles.featureItem}
                >
                    <h2>Community Engagement</h2>
                    <p>Join a community of like-minded volunteers and organizations.</p>
                </div>
            </div>
        </div>
    );
}