import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComments, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import image6 from '../assets/pics/pexels-6.jpg';
import image36 from '../assets/pics/pexels-36.jpg';
import image21 from '../assets/pics/pexels-21.jpg';

const events = [
  {
    id: 1,
    title: 'Gourmet Food Festival',
    date: 'October 15, 2024',
    comments: 23,
    description: 'Join us for a delightful experience with top chefs and food lovers from around the world.',
    image: image6,
    link: '/register',
  },
  {
    id: 2,
    title: 'Vegan Cooking Workshop',
    date: 'November 7, 2024',
    comments: 18,
    description: 'A hands-on workshop teaching you the secrets of delicious vegan meals.',
    image: image36,
    link: '/register',
  },
  {
    id: 3,
    title: 'Mastering Italian Cuisine',
    date: 'December 12, 2024',
    comments: 30,
    description: 'Learn to create authentic Italian dishes from master chefs.',
    image: image21,
    link: '/register',
  },
];

const Events = () => {
  return (
  <LazyLoad height={50}>
    <div className="bg-gray-100 py-16 mb-48">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-body font-bold text-center mb-10">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="relative flex justify-center">
              {/* Square Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-80 h-72 object-cover rounded-lg shadow-lg"
              />

              {/* Event Card overlapping the square image */}
              <div className="absolute top-1/2 w-80 bg-white p-6 rounded-lg shadow-lg transform -translate-y-3/4">
                <h3 className="text-2xl font-bold mb-2 font-body">{event.title}</h3>
                <p className="text-gray-600 mb-4 break-words font-body">{event.description}</p>

                <div className="flex justify-between items-center text-gray-500 mb-4 font-body">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faComments} className="mr-2 text-blue-600" />
                    <span>{event.comments} Comments</span>
                  </div>
                </div>

                <Link
                  to={event.link}
                  className="flex items-center justify-center font-body text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition-colors"
                >
                  Register Now
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </LazyLoad>
  );
};

export default Events;
