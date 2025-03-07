import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

const slides = [
  { 
    id: 1,
    image: 'https://imgs.search.brave.com/I8HgNYEs93rDQo5cAhHoWhq3LC2OO8lKKeZATk33Lmg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jaW1n/LmNvL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzAzLzA0MTcy/NjIwLzE3NDExMDkx/ODAtaW1hZ2UtMTc0/MTEwOTE0NDkwMF9v/cHRpbWl6ZWQtNzY4/eDQzMS5qcGc' ,
    title: 'Welcome to Our Website', 
    description: 'Discover our amazing features and services.'
  },
  { 
    id: 2, 
    image: 'https://imgs.search.brave.com/QsPZIp3sq0EHb-yiUYAG6cs_hOfJDNlK3Hl5XAMgfxo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jcnlw/dG8ubmV3cy9hcHAv/dXBsb2Fkcy8yMDI0/LzExL2NyeXB0by1u/ZXdzLURhbi1GaW5s/ZXktTGF1bmNoZWQt/Q09OU0VOVC1Ub2tl/bi1vcHRpb24wMi04/ODB4NTIzLndlYnA', 
    title: 'Explore Our Products', 
    description: 'Find the perfect solution for your needs.'
  },
  { 
    id: 3, 
    image: 'https://imgs.search.brave.com/RR_d1OMJBxOJEKzjtOoiD4RzinKKY1zHaQpBQP64FyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29pbmRlc2suY29t/L19uZXh0L2ltYWdl/P3VybD1odHRwczov/L2Nkbi5zYW5pdHku/aW8vaW1hZ2VzL3Mz/eTN2Y25vL3Byb2R1/Y3Rpb24vMzEwZjc2/OWFhZjMwOTIxMzFi/YzgzOGYxODhhOWIz/Mzk2NmViMzgzMy0x/ODE0eDg0Ni5wbmc_/YXV0bz1mb3JtYXQm/dz0zODQwJnE9NzU', 
    title: 'Join Our Community', 
    description: 'Connect with like-minded individuals.'
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-1 rounded-full hover:bg-opacity-50 transition-all text-sm"
      >
       <ArrowLeft className="mr-1 h-4 w-4" /> 
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-1 rounded-full hover:bg-opacity-50 transition-all text-sm"
      >
        <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
};

export default Slider;
