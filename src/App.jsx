import './index.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar.jsx';
import Background from './Components/background.jsx';
import Landing from './Components/landing.jsx';
import Home from './Components/home.jsx';
import Discover from './Components/discover.jsx';
import Favourites from './Components/favourites.jsx';
import Login from './Components/login.jsx';
import Signup from './Components/signup.jsx';
import Footer from './Components/footer.jsx';
import Hero from './Components/hero.jsx';
import Blog from './Components/bloggers.jsx';


function App() {

  let heroData = [
    { text1: "Dive into", text2: "a world of flavor" },
    { text1: "Memorable dishes", text2: "for every occasion" },
    { text1: "Feed your soul", text2: "one recipe a time" },
    { text1: "Ready to", text2: "salivate?" }
  ]

  const [heroCount, setHeroCount] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=> {
      setHeroCount((count)=>{return count===3? 0:count+1})
    }, 8000);

    return () => clearInterval(interval);
  }, [])

 /* const text = {heroData};   First code for the landing page text effect
  const speed = 1000;  
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typed-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typing on page load
  window.onload = typeWriter;
*/

// <Background heroCount={heroCount} />  To be used

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={LandingPage ({ heroData, heroCount, setHeroCount }) }/>
          <Route exact path='/home' element={HomePage ({ heroData, heroCount, setHeroCount }) } />
          <Route exact path='/discover' element={<Discover />} />
          <Route exact path='/bloggers' element={<Blog />} />
          <Route exact path='/favourites' element={<Favourites />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
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
      <Navbar />
      <Home
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      />
      <Footer/>
    </>
  );
}


export default App;
