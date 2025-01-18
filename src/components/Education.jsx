import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "PhD in Computer Science",
      institution: "Western University, London, Ontario",
      percentage: "91%",
    },
    {
      degree: "Master's in Software Engineering",
      institution: "Bahria University, Islamabad",
      percentage: "87%",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of Azad Jammu and Kashmir",
      percentage: "89%",
    },
  ];

  return (
    <section id="education" className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">
          Education
        </h2>
        <div className="relative">
          {/* Background Design */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-400 to-transparent opacity-10 pointer-events-none"
            aria-hidden="true"
          ></div>

          {/* Timeline */}
          <div className="flex flex-col items-center">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto mb-12"
              >
                {/* Connector Line */}
                <div
                  className={`hidden md:block w-1 ${
                    index === educationData.length - 1
                      ? "bg-transparent"
                      : "bg-yellow-400"
                  }`}
                  style={{ height: "50px" }}
                ></div>

                {/* Education Item */}
                <div className="flex flex-1 bg-yellow-400 text-black p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="w-full text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                    <p className="text-lg">{item.institution}</p>
                    <p className="text-lg font-semibold mt-2 italic">
                      {item.percentage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
