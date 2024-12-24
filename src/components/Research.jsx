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
      title: "Resource Allocation",
      description:
        "Developing efficient algorithms for dynamic resource management in Device-to-Device (D2D) communications, IoT, and cell-free networks to maximize throughput and minimize latency",
      image: device,
    },
    {
      id: "contribution2",
      title: "Mobility-Aware Networking",
      description:
        "Investigating the impact of user mobility on resource allocation, network slicing, and signal optimization to enhance service quality in highly dynamic environments.",
      image: mobility,
    },
    {
      id: "contribution3",
      title: "AI-Driven Optimization",
      description:
        "Leveraging artificial intelligence, including deep learning and reinforcement learning, to address complex challenges like interference management, energy efficiency, and predictive analytics in network optimization.",
      image: ai,
    },
    {
      id: "contribution4",
      title: "Beamforming and MIMO Systems",
      description:
        "Exploring advanced techniques like massive MIMO and intelligent beamforming to improve signal quality, spectral efficiency, and coverage in dense urban environments.",
      image: beam,
    },
    {
      id: "contribution5",
      title: "Beyond 5G (6G) Networks",
      description:
        "Contributing to the evolution of 6G networks by exploring emerging concepts like terahertz communication, ultra-reliable low-latency communication (URLLC), and AI-native networks.",
      image: network,
    },
  ];

  return (
    <section id="research" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Research Header */}
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

        {/* Research Areas */}
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">
            Research Areas
          </h2>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center space-x-4 mb-6">
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
                    className="flex flex-col md:flex-row items-center gap-6"
                  >
                    {/* Text Section */}
                    <div className="w-full md:w-1/2">
                      <p className="mb-2 text-green-600 text-base uppercase font-bold">
                        {contribution.title}
                      </p>
                      <h2 className="text-2xl lg:text-4xl">
                        {contribution.title}
                      </h2>
                      <p className="mt-4 text-gray-300">{contribution.description}</p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={contribution.image}
                          alt={contribution.title}
                          className="w-full h-auto object-cover"
                        />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              "Designed and simulated realistic network scenarios using frameworks like Sionna to validate resource allocation and throughput prediction models.",
              "Developed synthetic datasets incorporating advanced features like mobility, beamforming, and environmental conditions for network performance analysis.",
              "Published research in leading conferences and journals, advancing the understanding of mobility-aware resource allocation and AI-driven optimization.",
              "Specialized in software fault prediction, healthcare analytics, and serverless edge computing to optimize healthcare outcomes and enable real-time data processing.",
            ].map((content, idx) => (
              <div
                key={idx}
                className="bg-yellow-400 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-black leading-relaxed">{content}</p>
              </div>
            ))}
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
