import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center px-6 md:px-20 lg:px-32"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full animate-fade-in">
        {/* Left Side - Circular Image */}
        <div className="mb-10 md:mb-0">
          <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-4 border-yellow-400">
            <img
              src="/path-to-your-image.jpg"
              alt="Iqra"
              className="w-full h-full object-cover hover:scale-105 transform transition duration-500"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left md:ml-12 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            I'm <span className="text-yellow-400 gradient-text">Iqra Batool</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            An <span className="text-yellow-400">AI Engineer</span> specializing in
            developing cutting-edge machine learning models and solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition transform duration-300"
            >
              See My Research Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400 hover:text-black transition transform duration-300 shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
