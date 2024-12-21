import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-yellow-400 p-6 rounded-lg shadow-xl">
              <img
                src="/path-to-your-image/ai-engineer.jpg"
                alt="AI Engineer"
                className="rounded-lg shadow-lg w-3/4 md:w-full"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Hi, I'm <span className="text-yellow-400">Dr. [Your Name]</span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I am an <span className="text-yellow-400">AI Engineer</span> and researcher with a Ph.D. in 
              <span className="text-yellow-400">Artificial Intelligence</span>. My expertise lies in developing cutting-edge 
              machine learning models, natural language processing systems, and AI-powered solutions that bridge the gap 
              between theoretical innovation and practical implementation.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Over the past decade, I have worked on groundbreaking projects in AI, authored 
              numerous publications in top-tier journals, and collaborated with global teams to 
              tackle complex challenges in <span className="text-yellow-400">computer vision</span>, 
              <span className="text-yellow-400">NLP</span>, and <span className="text-yellow-400">reinforcement learning</span>.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>
                <strong className="text-white">Specialization:</strong> <span className="text-yellow-400">Deep Learning, NLP, Reinforcement Learning</span>
              </li>
              <li>
                <strong className="text-white">Research Interests:</strong> <span className="text-yellow-400">Ethical AI, Generative Models, AI in Healthcare</span>
              </li>
              <li>
                <strong className="text-white">Experience:</strong> <span className="text-yellow-400">10+ years in AI Research and Development</span>
              </li>
              <li>
                <strong className="text-white">Email:</strong> <span className="text-yellow-400">your.email@example.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
