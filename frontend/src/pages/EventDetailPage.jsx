import styles from './EventDetailPage.module.css';
import { useState } from 'react'; // Import useState

const CalendarIcon = () => <span>📅</span>;
const LocationIcon = () => <span>📍</span>;
const CompanyIcon = () => <span>🏢</span>;
const PointsIcon = () => <span>⭐</span>;
const PeopleIcon = () => <span>👥</span>;
const StarIcon = ({ filled }) => <span style={{ color: filled ? 'gold' : 'lightgray' }}>★</span>;
const PlusIcon = () => <span className={styles.plusIcon}>+</span>;


const EventDetailPage = () => {
  // State to track if the user has joined
  const [isJoined, setIsJoined] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={i <= rating} />);
    }
    return stars;
  };

  const eventHosts = [
    'https://via.placeholder.com/40/FF0000/FFFFFF?Text=Host1', // Placeholder image URL
    'https://via.placeholder.com/40/00FF00/FFFFFF?Text=Host2',
    'https://via.placeholder.com/40/0000FF/FFFFFF?Text=Host3',
    'https://via.placeholder.com/40/FFFF00/000000?Text=Host4',
  ];

  const handleJoinClick = () => {
    setIsJoined(true);
    // Here you might also want to add logic to actually register the user,
    // e.g., make an API call.
  };

  return (
    <div className={styles.eventPageContainer}>
      <div className={styles.mainContent}>
        <div className={styles.headerImageContainer}>
          <img src="https://via.placeholder.com/800x300?text=Beach+Event+Header" alt="Event Header" className={styles.headerImage} />
        </div>

        <div className={styles.companyInfoCard}>
          <div className={styles.companyLogoContainer}>
            <img src="https://via.placeholder.com/80/000000/FFFFFF?Text=Logo" alt="Company Logo" className={styles.companyLogo} />
          </div>
          <div className={styles.companyDetails}>
            <h2 className={styles.companyName}>Lorem Ipsum Company</h2>
            <div className={styles.companyStats}>
              <div className={styles.rating}>{renderStars(4.2)} 4.2/5.0</div>
              <div className={styles.eventsHosted}>Events Hosted: <strong>102</strong></div>
              <div className={styles.generalCredibility}>General Credibility: <span className={styles.good}>Good</span></div>
            </div>
            <div className={styles.currentEventHosts}>
              <span>Current Event Hosts:</span>
              <div className={styles.hostAvatars}>
                {eventHosts.map((src, index) => (
                  <img key={index} src={src} alt={`Host ${index + 1}`} className={styles.hostAvatar} />
                ))}
                <span className={styles.moreHosts}>and 5+ more</span>
              </div>
            </div>
          </div>
          <a href="#seemore" className={styles.seeMoreAboutUs}>See more about Us ...</a>
        </div>

        <div className={styles.descriptionsAboutEvent}>
          <h3>Descriptions About the Event</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec justo at felis vestibulum volutpat. Curabitur tincidunt, ligula ut hendrerit posuere, metus elit hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et ex pharetra scelerisque. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec justo at felis vestibulum volutpat. Curabitur tincidunt, ligula ut hendrerit posuere, metus elit hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et ex pharetra scelerisque. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec justo at felis vestibulum volutpat. Curabitur tincidunt, ligula ut hendrerit posuere, metus elit hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et ex pharetra scelerisque. Suspendisse potenti.
          </p>
        </div>

        <div className={styles.reviewsSection}>
          <h3>Reviews</h3>
          <div className={styles.review}>
            <PlusIcon />
            <p>Nulla facilisi. Vestibulum nec justo at felis vestibulum volutpat. Curabitur tincidunt, ligula ut hendrerit posuere, metus elit hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et ex pharetra scelerisque. Suspendi...</p>
          </div>
          <div className={styles.review}>
            <PlusIcon />
            <p>Nulla facilisi. Vestibulum nec justo at felis vestibulum volutpat. Curabitur tincidunt, ligula ut hendrerit posuere, metus elit hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et ex pharetra scelerisque. Suspendi...</p>
          </div>
          <div className={styles.review}>
            <PlusIcon />
            <p>Nulla facilisi. Vestibulum nec justo at felis vestibulum volutpat. Curabitur tincidunt, ligula ut hendrerit posuere, metus elit hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et ex pharetra scelerisque. Suspendi...</p>
          </div>
          <a href="#seeMoreReviews" className={styles.seeMoreReviewsLink}>See more reviews...</a>
        </div>
      </div>

      <div className={styles.sidebar}>
        <div className={styles.eventInfoCard}>
          <h1 className={styles.eventTitle}>Lorem Ipsum Dolores ...</h1>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.tagGreen}`}>Tag Content</span>
            <span className={`${styles.tag} ${styles.tagBlue}`}>Tag Content</span>
          </div>
          <div className={styles.eventDetailItem}>
            <CalendarIcon /> 22 Dec 2024, 12:00 - 15:00
          </div>
          <div className={styles.eventDetailItem}>
            <LocationIcon /> Jakarta, Indonesia
          </div>
          <div className={styles.eventDetailItem}>
            <CompanyIcon /> Lorem Ipsum Company
          </div>
          <div className={styles.eventDetailItem}>
            <PointsIcon /> + 50 points
          </div>
          <div className={styles.eventDetailItem}>
            <PeopleIcon /> Friends Joined : None
          </div>

          <div className={styles.eventDescriptionShort}>
            <h4>Event Description :</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec justo at felis vestibulum volutpat. Curabitur tincidunt, ligula ut hendrerit posuere, metus elit hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et ex pharetra scelerisque. Suspendisse potenti. Lorem ipsum vel justo ...
            </p>
          </div>

          {isJoined ? (
            <button className={`${styles.btn} ${styles.btnJoinedConfirmed}`} disabled>
              Registration confirmed. Please arrive on time.
            </button>
          ) : (
            <button
              className={`${styles.btn} ${styles.btnJoin}`}
              onClick={handleJoinClick}
            >
              JOIN HERE
            </button>
          )}
          <button className={`${styles.btn} ${styles.btnContact}`}>Contact Organization</button>
          <button className={`${styles.btn} ${styles.btnReport}`}>Report This Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;