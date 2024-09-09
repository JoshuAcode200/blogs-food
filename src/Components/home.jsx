import '../index.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = ({ heroData, heroCount, setHeroCount }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    const speed = 100; // Typing speed in milliseconds

    // Reset text for each heroData transition
    setText1('');
    setText2('');

    // Typing effect for text1
    const typeWriter1 = () => {
      if (index1 < heroData.text1.length) {
        setText1(heroData.text1.slice(0, index1 + 1)); // Update state with sliced text
        index1++;
        setTimeout(typeWriter1, speed);
      }
    };

    // Typing effect for text2
    const typeWriter2 = () => {
      if (index2 < heroData.text2.length) {
        setText2(heroData.text2.slice(0, index2 + 1)); // Update state with sliced text
        index2++;
        setTimeout(typeWriter2, speed);
      }
    };

    // Start the typing effect for both text1 and text2
    typeWriter1();
    typeWriter2();

  }, [heroData]); // Re-run when `heroData` changes

  return (
    <div className='home'>
      <div className='hero'>
        <div className="hero-text typewriter">
          <p id='typed-text1'>{text1}</p>
          <p id='typed-text2'>{text2}</p>
        </div>
        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(3)} className={heroCount === 3 ? "hero-dot orange" : "hero-dot"}></li>
          </ul>
        </div>
      </div>
      <div className="second">
        <div>
          <img />
        </div>
      </div>
    </div>

  );
};

export default Home;
