// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assuming path is correct
import Footer from './components/Footer'; // Assuming path is correct
import AboutUs from './pages/AboutUs';    // Assuming path is correct
import Events from './pages/Events';      // Assuming path is correct
import Leaderboard from './pages/Leaderboard'; // Assuming path is correct
import Shop from './pages/Shop';          // Assuming path is correct
import EventDetailPage from './pages/EventDetailPage'; // Add this import

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:eventId" element={<EventDetailPage />} /> {/* New Route */}
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/community" element={<Community />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
}