import '../index.css';
import video1 from '../assets/vids/vd1.mp4';
import image1 from '../assets/pics/pexels-1.jpg';

const Landing = ({ heroCount }) => {
  // Show video when heroCount is 0, 1, 2, or 3
  if (heroCount >= 0 && heroCount <= 3) {
    return (
      <video className='landing-background fade-in' autoPlay loop muted key="bg-video">
        <source src={video1} type='video/mp4' />
      </video>
    )
  } else {
    return <img src={image1} alt='Background' />;
  }
};

export default Landing;