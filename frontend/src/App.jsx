import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
// import Events from './pages/Events';
// import Leaderboard from './pages/Leaderboard';
import Shop from './pages/Shop';
// import Community from './pages/Community';
// import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path="/events" element={<Events />} />
            <Route path="/leaderboard" element={<Leaderboard />} /> */}
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