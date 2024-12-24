import React, { useState } from "react";
import device from "../assets/device.png";
import mobility from "../assets/mobility.webp";
import ai from "../assets/ai.jpeg";
import beam from "../assets/beam.png";
import network from "../assets/network.png";

const Research = () => {
  const [tab, setTab] = useState("contribution1");

  const contributions = [
    {
      id: "contribution1",
      title: "Network Simulation",
      subtitle: "Realistic Network Scenarios",
      description:
        "Designed and simulated realistic network scenarios using frameworks like Sionna to validate resource allocation and throughput prediction models.",
      image: device,
    },
    {
      id: "contribution2",
      title: "Synthetic Datasets",
      subtitle: "Advanced Data Modeling",
      description:
        "Developed synthetic datasets incorporating advanced features like mobility, beamforming, and environmental conditions for network performance analysis.",
      image: mobility,
    },
    {
      id: "contribution3",
      title: "Research Publications",
      subtitle: "Advancing Wireless Research",
      description:
        "Published research in leading conferences and journals, advancing the understanding of mobility-aware resource allocation and AI-driven optimization.",
      image: ai,
    },
    {
      id: "contribution4",
      title: "Interdisciplinary Expertise",
      subtitle: "AI and Healthcare Analytics",
      description:
        "Specialized in software fault prediction, healthcare analytics, and serverless edge computing to optimize healthcare outcomes and enable real-time data processing.",
      image: beam,
    },
  ];

  return (
    <section id="research" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-6">
          Research
        </h1>
        <h2 className="text-3xl font-bold text-center mb-4">
          5G/6G Wireless Communication and Networks
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-12">
          As a researcher in 5G/6G wireless communication and networks, my work
          focuses on advancing the technologies that drive next-generation
          wireless systems. These networks represent the future of connectivity,
          offering unprecedented speed, reliability, and efficiency to support
          a wide range of applications, from autonomous vehicles and smart cities
          to immersive virtual reality and precision healthcare.
        </p>

        {/* Contributions Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">
            Research Areas
          </h2>
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-10">
            {contributions.map((contribution) => (
              <button
                key={contribution.id}
                onClick={() => setTab(contribution.id)}
                className={`px-4 py-2 font-bold text-sm uppercase border-b-2 ${
                  tab === contribution.id
                    ? "border-green-500 text-green-600"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {contribution.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative">
            {contributions.map(
              (contribution) =>
                tab === contribution.id && (
                  <div
                    key={contribution.id}
                    className="items-center flex-wrap relative flex"
                  >
                    <div
                      className="transform -translate-x-10 rounded-br-[20%] rounded-tl-[20%] absolute top-0 left-0 w-[45%] h-[37%] md:w-[60%] md:h-[50%] bg-green-100 opacity-30 -z-10"
                      aria-hidden="true"
                    ></div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2">
                      <div className="md:mr-10 lg:mx-20">
                        <p className="mb-2 text-green-600 text-base uppercase font-bold">
                          {contribution.subtitle}
                        </p>
                        <h2 className="text-2xl lg:text-4xl">
                          {contribution.title}
                        </h2>
                        <p className="mt-4">{contribution.description}</p>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 md:mt-10 md:mb-5">
                      <div className="rounded-tr-[20%] md:rounded-tr-[25%] rounded-bl-[20%] md:rounded-bl-[25%] overflow-hidden pb-[63.7%] relative">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <img
                            src={contribution.image}
                            alt={contribution.title}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        {/* Contributions Section */}
        <div className="mt-16">
  <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">
    Contributions
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Contribution 1 */}
    <div className="flex flex-col bg-yellow-400 p-8 rounded-lg shadow-lg hover:shadow-yellow-400 transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-black mb-4">
        Network Simulation
      </h3>
      <p className="text-black leading-relaxed">
        Designed and simulated realistic network scenarios using frameworks like 
        Sionna to validate resource allocation and throughput prediction models.
      </p>
    </div>

    {/* Contribution 2 */}
    <div className="flex flex-col bg-yellow-400 p-8 rounded-lg shadow-lg hover:shadow-yellow-400 transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-black mb-4">
        Synthetic Datasets
      </h3>
      <p className="text-black leading-relaxed">
        Developed synthetic datasets incorporating advanced features like mobility, 
        beamforming, and environmental conditions for network performance analysis.
      </p>
    </div>

    {/* Contribution 3 */}
    <div className="flex flex-col bg-yellow-400 p-8 rounded-lg shadow-lg hover:shadow-yellow-400 transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-black mb-4">
        Research Publications
      </h3>
      <p className="text-black leading-relaxed">
        Published research in leading conferences and journals, advancing the 
        understanding of mobility-aware resource allocation and AI-driven optimization.
      </p>
    </div>

    {/* Contribution 4 */}
    <div className="flex flex-col bg-yellow-400 p-8 rounded-lg shadow-lg hover:shadow-yellow-400 transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-black mb-4">
        Interdisciplinary Expertise
      </h3>
      <p className="text-black leading-relaxed">
        Specialized in software fault prediction, healthcare analytics, and serverless 
        edge computing to optimize healthcare outcomes and enable real-time data processing.
      </p>
    </div>
  </div>
</div>
        {/* Future Goals Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-6">
            Future Goals
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            I aim to contribute to the realization of 6G networks, focusing on the
            integration of AI, quantum communication, and green networking solutions.
            My goal is to help bridge the gap between theoretical advancements and
            real-world applications, ensuring that next-generation networks are secure,
            efficient, and inclusive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;

