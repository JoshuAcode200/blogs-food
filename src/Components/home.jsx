import '../index.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMugHot } from '@fortawesome/free-solid-svg-icons'; // Import both icons
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import image35 from '../assets/pics/pexels-35.jpg';
import image16 from '../assets/pics/pexels-16.jpg';
import image3 from '../assets/pics/pexels-3.jpg';
import image26 from '../assets/pics/pexels-26.jpg';
import image19 from '../assets/pics/pexels-19.jpg';
import image2 from '../assets/pics/pexels-2.jpg';

const Home = ({ heroData, heroCount, setHeroCount }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const recipesSectionRef = useRef(null); // Moved ref to the parent component

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    const speed = 100; // Typing speed in milliseconds

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
  }, [heroData]);

  // Function to scroll to the recipe section
  const scrollToRecipes = () => {
    recipesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const recipes = [
    {
      id: 1,
      name: "Vegan Tacos",
      image: image26,
      description: "Delicious vegan tacos with avocado, beans, and fresh salsa.",
      prepTime: "20 mins",
      cookTime: "15 mins"
    },
    {
      id: 2,
      name: "Vegan Tacos",
      image: image19,
      description: "Delicious vegan tacos with avocado, beans, and fresh salsa.",
      prepTime: "20 mins",
      cookTime: "15 mins"
    },
    {
      id: 3,
      name: "Vegan Tacos",
      image: image2,
      description: "Delicious vegan tacos with avocado, beans, and fresh salsa.",
      prepTime: "20 mins",
      cookTime: "15 mins"
    }
  ];
  
  const bloggs = [
    {
      id: 1,
      name: "The Unique Spaghetti Carbonara",
      image: image35,
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      profile: image2
    },
    {
      id: 2,
      name: "Are vegan tacos worth it?",
      image: image35,
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      profile: image2
    },
    {
      id: 3,
      name: "Supersonic sauces",
      image: image35,
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      profile: image2
    },
    {
      id: 4,
      name: "The French fries secret",
      image: image35,
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      profile: image2
    },
    {
      id: 5,
      name: "Spaghetti Carbonara",
      image: image35,
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      profile: image2
    },
    {
      id: 6,
      name: "Grilled Chicken Salad",
      image: image16,
      description: "A healthy salad with grilled chicken, mixed greens, and a tangy vinaigrette.",
      profile: image2
    },
    {
      id: 7,
      name: "Vegan Tacos",
      image: image3,
      description: "Delicious vegan tacos with avocado, beans, and fresh salsa.",
      profile: image2
    }
 ];

  return (
    <LazyLoad height={300} offset={100} once placeholder={<div>Loading..</div>}>
      <div className="home">
      <div className="hero">
        <div className="hero-text typewriter">
          <p id="typed-text1">{text1}</p>
          <p id="typed-text2">{text2}</p>
        </div>
      </div>
      <div className="font-body justify-center flex mt-16">
        {/* Explore Recipes Button */}
        <button
          className="bg-white bg-opacity-20 backdrop-blur-md p-5 rounded-full border-none text-white cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-opacity-40"
          onClick={scrollToRecipes} // Scrolls to the recipe section on click
        >
          Explore Recipes
        </button>
      </div>

      {/* Introduction Content */}
      <div className="mt-32 mb-10 text-center flex items-center justify-center font-body">
        <div className="mr-4">
          <h2 className="text-3xl font-semi-bold font-body">
            Welcome to<span className="font-write text-4xl font-bold"> Food</span>
            <span className="font-logo font-bold text-4xl"> Mongers</span>
          </h2>
          <p className="text-xl mt-4">The No.1 food blog website</p>
        </div>
        <div>
          <img 
            src={image35} 
            alt="Food Mongers" 
            className="rounded-full" 
            style={{ width: '80px', height: '80px' }} // Set the optimal size for the image
          />
        </div>
      </div>
      <div className="bg-gray-200 mb-24 mt-20">
        <p className="font-body mt-20 flex justify-center text-2xl">Check out awesome recipes</p>
        <div ref={recipesSectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 my-20">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[0.9]"
            >
              <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-body">{recipe.name}</h3>
                <p className="text-gray-700 font-body">{recipe.description}</p>
              </div>

              {/* Initially hidden content that reveals on hover */}
              <div className="p-6 border-t flex items-center justify-between font-body h-20">
                <button className="flex mt-2 px-4 py-2 text-md text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  View Recipe
                </button>
                <div className="flex flex-col items-end text-md">
                  <div className="flex items-center">
                    {/* Prep Time with coffee icon */}
                    <FontAwesomeIcon icon={faMugHot} className="text-gray-800 mr-2" />
                    <span className="text-gray-800 text-md">Prep: {recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center">
                    {/* Cook Time with clock icon */}
                    <FontAwesomeIcon icon={faClock} className="text-gray-800 mr-2" />
                    <span className="text-gray-800 text-md">Cook: {recipe.cookTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className='font-body font-bold flex justify-center text-2xl mb-20'>Blogs</div>
        <div className="featured-slider">
          <Swiper
            spaceBetween={30}
            slidesPerView={2.2} // Slightly reduce the number of slides per view to shrink the size of each card
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {bloggs.map((blogg) => (
              <SwiperSlide key={blogg.id}>
                <div
                  className="bg-white rounded-lg font-body shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[0.9] w-[90%] mx-auto"  // Adjust card width
                >
                  <img src={blogg.image} alt={blogg.name} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-wrap font-body">
                    <h3 className="text-2xl font-bold mb-2">{blogg.name}</h3>
                    <p className="text-gray-700 break-words"> {/* Ensure text wraps */}
                      {blogg.description}
                    </p>
                  </div>

                  <div className="p-6 border-t flex flex-row font-body h-20 ">
                    <button className="flex px-4 py-2 text-md text-white bg-blue-600 rounded-md hover:bg-blue-700">
                      Read More
                    </button>
                    <div className="ml-4 mt-2 flex items-center">
                      <img
                        src={blogg.profile}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="ml-6 text-gray-600">Written by John Doe</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <div></div>
    </div>
    </LazyLoad>
  );
};

export default Home;
