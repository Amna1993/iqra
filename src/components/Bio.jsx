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
            I am a PhD researcher and lecturer in the Department of Computer Science at Western
            University, specializing in wireless communications, artificial intelligence (AI). My
            academic journey includes a master's degree in Software Engineering from Bahria
            University, where I developed a strong foundation in software systems and AI technologies.
            My research focuses on advancing next-generation technologies in 5G/6G wireless
            communication networks, with expertise in areas such as resource allocation, mobilityaware networking, and AI-driven optimization. I work on designing innovative solutions for
            dynamic resource allocation, beamforming, and interference management to improve
            network eFiciency and reliability. My work also involves creating synthetic datasets and
            simulations using frameworks like Sionna to model realistic wireless communication
            scenarios.
            In addition to wireless communications, I have made significant contributions to software
            fault prediction, applying machine learning techniques to enhance software reliability by
            proactively identifying and mitigating potential issues. This interdisciplinary expertise
            allows me to address challenges across multiple domains, bridging software and network
            engineering.
            As a lecturer, I am passionate about mentoring students and fostering innovation. I
            integrate cutting-edge research insights into my teaching to ensure students are equipped 
            with the skills and knowledge needed to excel in the ever-evolving field of computer
            science.
            With a strong academic background and a track record of impactful research, I am
            committed to contributing to advancements in AI-driven technologies and wireless
            communication systems, shaping the future of these fields.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
