// EventCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import EventCardBig from './EventCardBig'; // Assuming EventCardBig.jsx is in the same folder
import styles from './EventCarousel.module.css';

// Original sampleEventsData (can be passed as props or kept as default)
const sampleEventsData = [
  {
    id: 1, imageUrl: 'https://via.placeholder.com/700x400?text=Big+Event+1', points: '75 Pts', multiplier: '3x',
    title: 'Lorem Ipsum Dolores Spectaculum', tags: [ { text: 'Featured', type: 'green' }, { text: 'Popular', type: 'blue' } ],
    dateTime: '01 Aug 2025, 10:00 - 18:00', location: 'Grand Arena, Jakarta', company: 'Epic Events Co.',
    description: 'Experience the most anticipated event of the year! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.'
  },
  {
    id: 2, imageUrl: 'https://via.placeholder.com/700x400?text=Big+Event+2', points: '50 Pts', multiplier: '2x',
    title: 'Festival of Lights Illuminate', tags: [ { text: 'Culture', type: 'green' }, { text: 'Family', type: 'blue' } ],
    dateTime: '15 Aug 2025, 19:00 - 23:00', location: 'City Gardens, Bandung', company: 'Creative Shows Ltd.',
    description: 'A magical night with spectacular light displays and performances. Proin vel justo et ex pharetra scelerisque.'
  },
  {
    id: 3, imageUrl: 'https://via.placeholder.com/700x400?text=Big+Event+3', points: '80 Pts', multiplier: '4x',
    title: 'Summer Music Fest', tags: [ { text: 'Music', type: 'green' }, { text: 'Outdoor', type: 'blue' } ],
    dateTime: '20 Sep 2025, 14:00 - 23:00', location: 'Greenfield Park', company: 'Vibes Ltd.',
    description: 'The biggest summer music festival with top artists and bands. Enjoy great music under the sun and stars!'
  },
  {
    id: 4, imageUrl: 'https://via.placeholder.com/700x400?text=Big+Event+4', points: '60 Pts', multiplier: '2.5x',
    title: 'Tech Innovators Summit', tags: [ { text: 'Tech', type: 'green' }, { text: 'Future', type: 'blue' } ],
    dateTime: '05 Oct 2025, 09:00 - 17:00', location: 'Convention Center', company: 'Innovate Corp.',
    description: 'Join leading tech innovators and thinkers to discuss the future of technology and its impact on society.'
  }
];

const EventCarousel = ({ events = sampleEventsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define layout constants
  // IMPORTANT: MAIN_CARD_WIDTH should match the actual width of EventCardBig as styled in its CSS
  const MAIN_CARD_WIDTH = 700; // e.g., width of EventCardBig in pixels
  const PEEK_WIDTH = 80;       // How much of the adjacent cards is visible on each side (pixels)
  const SLIDE_MARGIN = 20;     // Margin between cards in the track (pixels)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    // For peeking, you might want to allow looping more naturally or handle ends differently
    const newIndex = isFirstSlide ? events.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === events.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!events || events.length === 0) {
    return <div className={styles.emptyCarousel}>No events to display.</div>;
  }

  // Calculate the translateX value for the track
  // We want the active (currentIndex) card to appear centered within the designated "main card" area,
  // and the peeking areas to show parts of the adjacent cards.
  // The track needs to be shifted left by the sum of widths and margins of preceding slides,
  // and then adjusted so the first PEEK_WIDTH area of the viewport shows the end of the previous slide (or empty space).
  const offset = currentIndex * (MAIN_CARD_WIDTH + SLIDE_MARGIN);
  const transformValue = `translateX(calc(-${offset}px + ${PEEK_WIDTH}px))`;

  return (
    <div className={styles.carouselContainer} role="region" aria-label="Event Carousel">
      {events.length > 1 && (
        <button
          onClick={goToPrevious}
          className={`${styles.carouselButton} ${styles.prevButton}`}
          aria-label="Previous event"
          // disabled={currentIndex === 0} // Optional: disable if not looping
        >
          &#10094; {/* Left Arrow */}
        </button>
      )}
      <div className={styles.carouselViewport}>
        <div
          className={styles.carouselTrack}
          style={{ transform: transformValue }}
        >
          {events.map((event, index) => (
            <div
              className={styles.carouselSlide}
              key={event.id || index} // Ensure unique key
              aria-hidden={index !== currentIndex}
              // Add a style to ensure EventCardBig takes up MAIN_CARD_WIDTH
              // This is better handled by EventCardBig.module.css ensuring its root element has this width.
            >
              <EventCardBig eventData={event} />
            </div>
          ))}
        </div>
      </div>
      {events.length > 1 && (
        <button
          onClick={goToNext}
          className={`${styles.carouselButton} ${styles.nextButton}`}
          aria-label="Next event"
          // disabled={currentIndex === events.length - 1} // Optional: disable if not looping
        >
          &#10095; {/* Right Arrow */}
        </button>
      )}
    </div>
  );
};

export default EventCarousel;