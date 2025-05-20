// EventCardBig.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import styles from './EventCardBig.module.css';

const EventCardBig = ({ eventData }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  if (!eventData) {
    return null;
  }

  // Ensure eventData has an 'id' property. Your sample data does.
  const {
    id, // Make sure 'id' is present in your eventData objects
    imageUrl = "https://via.placeholder.com/300x400?text=Event+Image",
    points = "75 Pts",
    multiplier = "3x",
    title = "Lorem Ipsum Dolores ...",
    tags = [],
    dateTime = "Date N/A",
    location = "Location N/A",
    company = "Company N/A",
    description = "No description available."
  } = eventData;

  const eventDetailUrl = `/event/${id}`;

  const handleNavigate = () => {
    navigate(eventDetailUrl);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Make the image clickable */}
        <Link to={eventDetailUrl} className={styles.imageLink}>
          <img src={imageUrl} alt={title} className={styles.eventImage} />
        </Link>
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
          {/* Make buttons navigate onClick */}
          <button className={`${styles.button} ${styles.moreDetailsButton}`} onClick={handleNavigate}>
            More Details
          </button>
          <button className={`${styles.button} ${styles.joinButton}`} onClick={handleNavigate}>
            {/* Or if "JOIN HERE" should do something else first, then navigate:
            onClick={() => { console.log("Join logic first"); navigate(eventDetailUrl); }} */}
            JOIN HERE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCardBig;