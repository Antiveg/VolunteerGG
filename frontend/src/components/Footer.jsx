import styles from './Footer.module.css';
import footerLogo from '../assets/footerLogo.png';
import instagramIcon from '../assets/instagramIcon.png';
import discordIcon from '../assets/discordIcon.png';
import twitterIcon from '../assets/twitterIcon.png';
import youtubeIcon from '../assets/youtubeIcon.png';

export default function Footer() {
  return (
  <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <img src={footerLogo} alt="Company Logo" className={styles.logo} />
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linksColumn}>
            <ul>
              <li><a href="/cookie-policy">Cookie Policy</a></li>
              <li><a href="/legal-notices">Legal Notices</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms and Conditions</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>COUNTRIES</h4>
            <ul>
              <li><a href="/countries/germany">Germany</a></li>
              <li><a href="/countries/indonesia">Indonesia</a></li>
              <li><a href="/countries/usa">USA</a></li>
              <li><a href="/countries/brazil">Brazil</a></li>
              <li><a href="/countries/india">India</a></li>
              <li><a href="/countries/more">More countries</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>CONTACT US</h4>
            <ul>
              <li><a href="mailto:example@example.com">Email</a></li>
              <li><a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>FOLLOW US ON !</h4>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <img src={discordIcon} alt="Discord" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}