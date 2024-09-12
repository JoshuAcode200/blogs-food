import '../index.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMugHot } from '@fortawesome/free-solid-svg-icons'; // Import both icons
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
      name: "Spaghetti Carbonara",
      image: image35,
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      prepTime: "15 mins", // Adding prep time
      cookTime: "30 mins"  // Adding cook time
    },
    {
      id: 2,
      name: "Grilled Chicken Salad",
      image: image16,
      description: "A healthy salad with grilled chicken, mixed greens, and a tangy vinaigrette.",
      prepTime: "10 mins",
      cookTime: "20 mins"
    },
    {
      id: 3,
      name: "Vegan Tacos",
      image: image3,
      description: "Delicious vegan tacos with avocado, beans, and fresh salsa.",
      prepTime: "20 mins",
      cookTime: "15 mins"
    },
    {
      id: 4,
      name: "Vegan Tacos",
      image: image26,
      description: "Delicious vegan tacos with avocado, beans, and fresh salsa.",
      prepTime: "20 mins",
      cookTime: "15 mins"
    },
    {
      id: 5,
      name: "Vegan Tacos",
      image: image19,
      description: "Delicious vegan tacos with avocado, beans, and fresh salsa.",
      prepTime: "20 mins",
      cookTime: "15 mins"
    },
    {
      id: 6,
      name: "Vegan Tacos",
      image: image2,
      description: "Delicious vegan tacos with avocado, beans, and fresh salsa.",
      prepTime: "20 mins",
      cookTime: "15 mins"
    }
  ];
  

  return (
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

      {/* Some content here to simulate scrolling */}
      <div className="mt-20 mb-10 text-center">
        <h2 className="text-4xl font-bold">Welcome to Food Mongers</h2>
        <p className="text-lg mt-4">Scroll down to explore delicious recipes.</p>
      </div>

      <div ref={recipesSectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[0.9] group"
          >
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{recipe.name}</h3>
              <p className="text-gray-700">{recipe.description}</p>
            </div>

            {/* Initially hidden content that reveals on hover */}
            <div className="p-6 border-t flex-row font-body opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <button className="flex mt-2 px-4 py-2 text-md text-white bg-blue-600 rounded-md hover:bg-blue-700">
                View Recipe
              </button>
              <div className="flex flex-col items-center ml-11 text-md">
                <div className="flex items-center">
                  {/* Prep Time with coffee icon */}
                  <FontAwesomeIcon icon={faMugHot} className="text-gray-500 mr-2" />  
                  <span className="text-gray-600 text-md">Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center">
                  {/* Cook Time with clock icon */}
                  <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-2" />
                  <span className="text-gray-600 text-md">Cook: {recipe.cookTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  );
};

export default Home;
