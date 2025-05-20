// Events.jsx
import React from 'react';
import styles from './Events.module.css';

import EventCarousel from '../components/EventCarousel';
import EventSearchbar from '../components/EventSearchbar';
import EventSidebarFilter from '../components/EventSidebarFilter';
import EventCardSmall from '../components/EventCardSmall';

const miniEventCardsData = [
  {
    id: 'mini1', imageUrl: 'https://via.placeholder.com/300x200?text=Nature+Walk', points: "25 Pts",
    tags: [{ text: "Hike", type: "pinkishPurple" }, { text: "Scenic", type: "cyan" }],
    title: "Forest Trail Discovery", dateTime: "01 Aug 2025, 08:00", location: "Green Valley", friendsJoined: 3,
  },
  {
    id: 'mini2', imageUrl: 'https://via.placeholder.com/300x200?text=Art+Class', points: "15 Pts",
    tags: [{ text: "Creative", type: "cyan" }, { text: "Relax", type: "salmonPink" }],
    title: "Watercolor Workshop", dateTime: "03 Aug 2025, 13:00", location: "Art Center", friendsJoined: 5,
  },
  {
    id: 'mini3', imageUrl: 'https://via.placeholder.com/300x200?text=Music+Night', points: "30 Pts",
    tags: [{ text: "Live", type: "pinkishPurple" }, { text: "Acoustic", type: "salmonPink" }],
    title: "Acoustic Evening", dateTime: "05 Aug 2025, 19:30", location: "The Local Pub", friendsJoined: 12,
  },
  {
    id: 'mini4', imageUrl: 'https://via.placeholder.com/300x200?text=Food+Fest', points: "20 Pts",
    tags: [{ text: "Taste", type: "cyan" }, { text: "Local", type: "pinkishPurple" }],
    title: "Culinary Delights", dateTime: "07 Aug 2025, 11:00", location: "Market Square", friendsJoined: 0,
  },
  {
    id: 'mini5', imageUrl: 'https://via.placeholder.com/300x200?text=Book+Club', points: "10 Pts",
    tags: [{ text: "Read", type: "salmonPink" }, { text: "Discuss", type: "cyan" }],
    title: "Monthly Book Club", dateTime: "09 Aug 2025, 18:00", location: "Library Hall", friendsJoined: 7,
  },
  {
    id: 'mini6', imageUrl: 'https://via.placeholder.com/300x200?text=Tech+Talk', points: "25 Pts",
    tags: [{ text: "Learn", type: "pinkishPurple" }, { text: "Network", type: "cyan" }],
    title: "Future of AI", dateTime: "11 Aug 2025, 17:00", location: "Tech Park", friendsJoined: 4,
  },
];

// Sample data for the main EventCarousel (from your EventCarousel.jsx)
const mainCarouselEventsData = [
  {
    id: 1, imageUrl: 'https://via.placeholder.com/600x400?text=Big+Event+1', points: '75 Pts', multiplier: '3x',
    title: 'Lorem Ipsum Dolores Spectaculum', tags: [ { text: 'Featured', type: 'green' }, { text: 'Popular', type: 'blue' } ],
    dateTime: '01 Aug 2025, 10:00 - 18:00', location: 'Grand Arena, Jakarta', company: 'Epic Events Co.',
    description: 'Experience the most anticipated event of the year! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.'
  },
  {
    id: 2, imageUrl: 'https://via.placeholder.com/600x400?text=Big+Event+2', points: '50 Pts', multiplier: '2x',
    title: 'Festival of Lights Illuminate', tags: [ { text: 'Culture', type: 'green' }, { text: 'Family', type: 'blue' } ],
    dateTime: '15 Aug 2025, 19:00 - 23:00', location: 'City Gardens, Bandung', company: 'Creative Shows Ltd.',
    description: 'A magical night with spectacular light displays and performances. Proin vel justo et ex pharetra scelerisque.'
  },
   {
    id: 3, imageUrl: 'https://via.placeholder.com/600x400?text=Big+Event+3', points: '80 Pts', multiplier: '4x',
    title: 'Summer Music Fest', tags: [ { text: 'Music', type: 'green' }, { text: 'Outdoor', type: 'blue' } ],
    dateTime: '20 Sep 2025, 14:00 - 23:00', location: 'Greenfield Park', company: 'Vibes Ltd.',
    description: 'The biggest summer music festival with top artists and bands. Enjoy great music under the sun and stars!'
  }
];


const Events = () => {
  return (
    <div className={styles.eventsPageWrapper}> {/* Optional overall wrapper */}
      <section className={styles.carouselSectionFullWidth}>
        {/* EventCarousel's internal container will handle centering its content */}
        <EventCarousel events={mainCarouselEventsData} />
      </section>

      {/* Container for the rest of the page content (sidebar, search, grid) */}
      <div className={styles.pageContentConstrained}>
        <section className={styles.contentLayoutSection}>
          <aside className={styles.sidebarArea}>
            <EventSidebarFilter />
          </aside>
          <div className={styles.mainContentArea}>
            <div className={styles.searchArea}>
              <EventSearchbar />
            </div>
            <main className={styles.resultsGrid}>
              {miniEventCardsData.map(event => (
                <EventCardSmall key={event.id} eventData={event} />
              ))}
            </main>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;