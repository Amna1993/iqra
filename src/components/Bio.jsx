import React from "react";

const Bio = () => {
  return (
    <section id="bio" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
          Biography
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-yellow-400 p-6 rounded-lg shadow-xl">
              <img
                src="/path-to-your-image/ai-profile.jpg"
                alt="AI Engineer"
                className="rounded-lg shadow-lg w-3/4 md:w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
            <p className="text-lg text-gray-300 mb-6">
              Hi, I'm <span className="text-yellow-400">Dr. [Your Name]</span>, an AI Engineer with over a decade of
              experience in cutting-edge research and innovation. I specialize in <span className="text-yellow-400">deep learning</span>, 
              <span className="text-yellow-400">natural language processing</span>, and <span className="text-yellow-400">computer vision</span>, 
              contributing to projects that bridge the gap between research and real-world applications.
            </p>
            <p className="text-lg text-gray-300">
              My journey in AI has led to impactful collaborations, top-tier publications, and a deep commitment to building 
              ethical AI systems that make a difference. When I'm not coding or researching, I mentor aspiring AI engineers 
              and contribute to the global AI community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
