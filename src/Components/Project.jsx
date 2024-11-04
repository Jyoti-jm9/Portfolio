import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projectStyles.css';

const Project = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change the threshold as needed
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen width
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto text-white mt-10 px-6" id="Projects">
      <div className="relative mb-8">
        <h2 className="font-bold text-3xl">Work Experience</h2>
      </div>
      <div className="slider-container mt-8 ">
        <Slider {...settings}>
        <div className="experience bg-gray-800 rounded-lg p-6 m-10">
    <h4 className="text-xl font-semibold">Blogging Web App using Appwrite</h4>
    <div className="flex items-center justify-between mt-4">
        <span>
            <h6 className="text-sm">September 2024 - Present</h6>
        </span>
        <span>
            <a href="https://blogging-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                Live
            </a>
        </span>
    </div>
    <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Full-stack blogging platform built with React and Appwrite for backend functionality.</li>
        <li>Features user authentication, content creation, and real-time updates for seamless interaction.</li>
        <li>Includes categories, tags, and search functionality for efficient content discovery.</li>
        <li>Designed with a responsive UI to provide an optimal experience on any device.</li>
    </ul>
</div>

<div className="experience bg-gray-800 rounded-lg p-6 m-10">
    <h4 className="text-xl font-semibold">Weather Forecast Web App</h4>
    <h6 className="text-sm mt-4">July 2024</h6>
    <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Developed a 5-day weather forecast application using React and Tailwind CSS.</li>
        <li>Integrates with weather APIs to display real-time data on temperature, humidity, and forecasts.</li>
        <li>Includes a sleek, minimalist UI with interactive design elements for ease of use.</li>
        <li>Responsive layout ensuring functionality across desktop and mobile devices.</li>
    </ul>
</div>

<div className="experience bg-gray-800 rounded-lg p-6 m-10">
    <h4 className="text-xl font-semibold">Football Score Simulator</h4>
    <h6 className="text-sm mt-4">March 2024</h6>
    <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Simulated football scoring game built using HTML, CSS, and JavaScript.</li>
        <li>Allows users to select teams, simulate matches, and track score updates in real-time.</li>
        <li>Dynamic, engaging interface that mimics live game scenarios for an immersive experience.</li>
        <li>Designed for easy navigation and enhanced user engagement through interactivity.</li>
    </ul>
</div>

<div className="experience bg-gray-800 rounded-lg p-6 m-10">
    <h4 className="text-xl font-semibold">Football Goal Line Technology</h4>
    <h6 className="text-sm mt-4">May , 2023</h6>
    <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Utilized OpenCV and Arduino to develop a prototype goal-line detection system for football.</li>
        <li>Incorporates image processing techniques to accurately detect ball position on the goal line.</li>
        <li>Improves the accuracy of goal-line decisions, ensuring fair game outcomes.</li>
        <li>Demonstrated at small-scale projects and showcases a blend of hardware and software integration.</li>
    </ul>
</div>

        </Slider>
      </div>
    </div>
  );
};

export default Project;
