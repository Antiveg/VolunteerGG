import styles from './EventCardBig.module.css'; // Re-use the same CSS module

const EventCardBig = ({ eventData }) => {
  if (!eventData) {
    return null; // Or a loading/placeholder state
  }

  const {
    imageUrl = "https://via.placeholder.com/300x400?text=Event+Image",
    points = "75 Pts",
    multiplier = "3x",
    title = "Lorem Ipsum Dolores ...",
    tags = [
      { text: 'Tag Content', type: 'green' },
      { text: 'Tag Content', type: 'green' },
      { text: 'Tag Content', type: 'blue' },
    ],
    dateTime = "22 Dec 2024, 12:00 - 15:00",
    location = "Jakarta, Indonesia",
    company = "Lorem Ipsum Company",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec justo at felis vestibulum volutpat. Curabitur tincidunt, ligula at hendrerit posuere, metus elit hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et ex pharetra scelerisque. Suspendisse potenti ..."
  } = eventData;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.eventImage} />
        {points && (
          <div className={styles.pointsBadge}>
            <span className={styles.pointsIcon}>👁️</span> {points}
          </div>
        )}
        {multiplier && (
          <div className={styles.multiplierBadge}>
            {multiplier}
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${styles.tag} ${tag.type === 'green' ? styles.tagGreen : styles.tagBlue}`}
            >
              {tag.text}
            </span>
          ))}
        </div>
        <div className={styles.eventInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>🕒</span> {dateTime}
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📍</span> {location}
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>👤</span> {company}
          </div>
        </div>
        <p className={styles.description}>
          <strong>Event Description :</strong>
          <br />
          {description}
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.moreDetailsButton}`}>More Details</button>
          <button className={`${styles.button} ${styles.joinButton}`}>JOIN HERE</button>
        </div>
      </div>
    </div>
  );
};

export default EventCardBig;