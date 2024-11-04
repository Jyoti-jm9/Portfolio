import React from 'react';
import './HomeStyles.css'; 

function App() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-center items-center p-6">
      <div className="flex-1 flex items-center justify-center">
        <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-3">
        <section className="shadow-lg rounded-lg p-8 w-full max-w-2xl border-4 border-indigo-900">
          <h2 className="text-2xl font-bold mb-4 typing-text">Welcome to My Portfolio</h2>
          <p className="text-lg mb-4">
          Hello! I'm Jyoti Mondal, currently a final-year B.Tech student specializing
           in Electronics and Communication Engineering at Narula Institute of Technology.
            I have a deep passion for web development, which has driven me to explore and
            create innovative projects in the tech space.
            I'm always eager to take on new challenges that allow me 
            to apply my technical knowledge and problem-solving abilities, 
            with the goal of making meaningful contributions to the ever-evolving 
            world of technology.
          </p>
        </section>
      </div>
      
    </div>
  );
}

export default App;
