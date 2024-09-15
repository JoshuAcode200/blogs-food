import './index.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCarts } from './context/CartContext.js'; // Import useCarts
import { FavoriteProvider } from './context/FavoriteContext';
import Cart from './Components/cart.jsx';
import Checkout from './Components/checkout.jsx';
import Navbar from './Components/navbar.jsx';
import Background from './Components/background.jsx';
import Landing from './Components/landing.jsx';
import Home from './Components/home.jsx';
import Discover from './Components/discover.jsx';
import Favorites from './Components/favorites.jsx';
import Login from './Components/login.jsx';
import Signup from './Components/signup.jsx';
import Footer from './Components/footer.jsx';
import Hero from './Components/hero.jsx';
import Blog from './Components/bloggers.jsx';
import Events from './Components/events.jsx';
import Store from './Components/store.jsx';

function App() {
  return (
    <Router> {/* Only one Router wrapping */}
      <FavoriteProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </FavoriteProvider>
    </Router>
  );
}

function AppContent() {
  const { addToCarts } = useCarts(); // Access addToCarts
  const location = useLocation(); // Get current location

  let heroData = [
    { text1: "Dive into", text2: "a world of flavor" },
    { text1: "Memorable dishes", text2: "for every occasion" },
    { text1: "Feed your soul", text2: "one recipe a time" },
    { text1: "Ready to", text2: "salivate?" }
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 3 ? 0 : count + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Conditionally render the Navbar only if the path is not the landing page */}
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route exact path='/' element={LandingPage({ heroData, heroCount, setHeroCount })} />
        <Route exact path='/home' element={HomePage({ heroData, heroCount, setHeroCount })} />
        <Route exact path='/discover' element={<Discover />} />
        <Route exact path='/bloggers' element={<Blog />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/store' element={<Store />} />
        <Route exact path='/favorites' element={<Favorites handleCartClick={addToCarts} />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

function LandingPage({ heroData, heroCount, setHeroCount }) {
  return (
    <>
      <Landing heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </>
  );
}

function HomePage({ heroData, heroCount, setHeroCount }) {
  return (
    <>
      <Background heroCount={heroCount} />
      <Home
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <Footer />
    </>
  );
}

export default App;
