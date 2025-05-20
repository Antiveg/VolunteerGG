// EventCardSmall.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './EventCardSmall.module.css';

const EventCardSmall = ({ eventData }) => {
  if (!eventData) {
    return <div className={styles.cardPlaceholder}>Loading card...</div>;
  }

  // Ensure eventData has an 'id' property. Your sample data does.
  const {
    id, // Make sure 'id' is present in your eventData objects
    imageUrl = "https://via.placeholder.com/300x200?text=Event+Image",
    points = "?? Pts",
    tags = [],
    title = "Event Title ...",
    dateTime = "Date N/A",
    location = "Location N/A",
    friendsJoined = 0,
  } = eventData;

  const eventDetailUrl = `/event/${id}`;

  return (
    // Wrap the entire card structure with a Link component
    <Link to={eventDetailUrl} className={styles.cardLinkWrapper}>
      <div className={styles.card}> {/* Original card div is now a child */}
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} className={styles.eventImage} />
          <div className={styles.pointsBadge}>
            <span className={styles.pointsIcon}>♦️</span>
            {points}
          </div>
        </div>
        <div className={styles.contentArea}>
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${styles.tag} ${styles[tag.type] || styles.defaultTag}`}
              >
                {tag.text}
              </span>
            ))}
          </div>
          <h3 className={styles.title}>{title}</h3>
          {/* Wrap info items if needed, or they can be direct children */}
          <div>
            <div className={styles.infoItem}>
              <div className={`${styles.iconWrapper} ${styles.timeIconWrapper}`}>
                <span className={styles.icon}>🕒</span>
              </div>
              <span>{dateTime}</span>
            </div>
            <div className={styles.infoItem}>
              <div className={`${styles.iconWrapper} ${styles.locationIconWrapper}`}>
                <span className={styles.icon}>📍</span>
              </div>
              <span>{location}</span>
            </div>
          </div>
        </div>
        {friendsJoined > 0 && (
          <div className={styles.friendsJoinedBadge}>
            {friendsJoined} Friend{friendsJoined !== 1 ? 's' : ''} Joined
          </div>
        )}
      </div>
    </Link>
  );
};

export default EventCardSmall;