import React from "react";

const Skills = () => {
  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Reinforcement Learning",
    "Ethical AI",
    "Generative Models",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Data Analysis",
    "Big Data",
    "Cloud Computing",
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">
          My Technical Skills
        </h2>
        <div className="relative overflow-hidden">
          <div className="animate-scroll flex items-center space-x-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[150px] h-24 bg-yellow-500 text-black flex items-center justify-center rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
              >
                <p className="text-lg font-semibold text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
