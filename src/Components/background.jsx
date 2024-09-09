// background.jsx
import '../index.css';
import image34 from '../assets/pics/pexels-34.jpg';
import image4 from '../assets/pics/pexels-4.jpg';
import image24 from '../assets/pics/pexels-24.jpg';
import image21 from '../assets/pics/pexels-21.jpg';

const Background = ({ heroCount }) => {
  const images = [image34, image4, image24, image21];
  
  return (
    <div className="">
      <img src={images[heroCount]} alt='Background' className="home-background" />;
    </div>
  )
};

export default Background;
