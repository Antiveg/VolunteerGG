// EventCardSmall.jsx
import React from 'react';
import styles from './EventCardSmall.module.css'; // Assuming this path is correct

const EventCardSmall = ({ eventData }) => { // Accept eventData as a prop
  if (!eventData) {
    // You can return null or a placeholder/loading component
    return <div className={styles.cardPlaceholder}>Loading card...</div>;
  }

  // Destructure from eventData prop, with default values
  const {
    imageUrl = "https://via.placeholder.com/300x200?text=Event+Image",
    points = "?? Pts",
    tags = [],
    title = "Event Title ...",
    dateTime = "Date & Time N/A",
    location = "Location N/A",
    friendsJoined = 0,
  } = eventData;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.eventImage} />
        <div className={styles.pointsBadge}>
          <span className={styles.pointsIcon}>♦️</span> {/* Or your preferred icon */}
          {points}
        </div>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${styles.tag} ${styles[tag.type] || styles.defaultTag}`} // Added fallback class
            >
              {tag.text}
            </span>
          ))}
        </div>
        <h3 className={styles.title}>{title}</h3>
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
      {friendsJoined > 0 && (
        <div className={styles.friendsJoinedBadge}>
          {friendsJoined} Friend{friendsJoined !== 1 ? 's' : ''} Joined
        </div>
      )}
    </div>
  );
};

export default EventCardSmall;