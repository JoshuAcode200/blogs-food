// background.jsx
import '../index.css';
import image11 from '../assets/pics/pexels-34.jpg';
import image4 from '../assets/pics/pexels-4.jpg';
import image28 from '../assets/pics/pexels-24.jpg';
import image16 from '../assets/pics/pexels-21.jpg';

const Background = ({ heroCount }) => {
  const images = [image11, image4, image28, image16];
  
  return (
    <div className="">
      <img src={images[heroCount]} alt='Background' className="home-background" />;
    </div>
  )
};

export default Background;
