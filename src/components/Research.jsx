import React from "react";

const Research = () => {
  const researchAreas = [
    {
      title: "Resource Allocation",
      description:
        "Developing efficient algorithms for dynamic resource management in Device-to-Device (D2D) communications, IoT, and cell-free networks to maximize throughput and minimize latency.",
      image: "/path-to-entertainment-image.jpg",
    },
    {
      title: "Mobility-Aware Networking",
      description:
        "Investigating the impact of user mobility on resource allocation, network slicing, and signal optimization to enhance service quality in highly dynamic environments.",
      image: "/path-to-human-centered-ai-image.jpg",
    },
    {
      title: "AI-Driven Optimization",
      description:
        "Leveraging artificial intelligence, including deep learning and reinforcement learning, to address complex challenges like interference management, energy efficiency, and predictive analytics in network optimization.",
      image: "/path-to-human-system-interactions-image.jpg",
    },
    {
      title: "Beamforming and MIMO Systems",
      description:
        "Exploring advanced techniques like massive MIMO and intelligent beamforming to improve signal quality, spectral efficiency, and coverage in dense urban environments.",
      image: "/path-to-human-system-interactions-image.jpg",
    },
    {
      title: "Beyond 5G (6G) Networks",
      description:
        "Contributing to the evolution of 6G networks by exploring emerging concepts like terahertz communication, ultra-reliable low-latency communication (URLLC), and AI-native networks.",
      image: "/path-to-human-system-interactions-image.jpg",
    },
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
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

        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-6">
          Research Focus
        </h2>
        <h3 className="text-xl text-center text-gray-200 mb-12">
          My research delves into the following key aspects of 5G/6G networks:
        </h3>

        <div className="space-y-16">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 p-4">
                <img
                  src={area.image}
                  alt={area.title}
                  className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 md:px-8 mt-6 md:mt-0">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;




// import React from "react";

// const Research = () => {
//   const researchAreas = [
//     {
//       title: "Resource Allocation",
//       description:
//       "Developing eFicient algorithms for dynamic resource management in Device-to-Device (D2D) communications, IoT, and cell-free networks to maximize throughput and minimize latency.",
//       image: "/path-to-entertainment-image.jpg",
//     },
//     {
//       title: "Mobility-Aware Networking",
//       description:
//       "Investigating the impact of user mobility on resource allocation, network slicing, and signal optimization to enhance service quality in highly dynamic environments.",
//       image: "/path-to-human-centered-ai-image.jpg",
//     },
//     {
//       title: "AI-Driven Optimization",
//       description:
//       "Leveraging artificial intelligence, including deep learning and reinforcement learning, to address complex challenges like interference management,energy eFiciency, and predictive analytics in network optimization.",
//       image: "/path-to-human-system-interactions-image.jpg",
//     },
//     {
//       title: "Beamforming and MIMO Systems",
//       description:
//       "Exploring advanced techniques like massive MIMO and intelligent beamforming to improve signal quality, spectral eFiciency, and coverage in dense urban environments.",
//       image: "/path-to-human-system-interactions-image.jpg",
//     },
//     {
//       title: "Beyond 5G (6G) Networks",
//       description:
//       "Contributing to the evolution of 6G networks by exploring emerging concepts like terahertz communication, ultra-reliable low-latency communication (URLLC), and AI-native networks.",
//       image: "/path-to-human-system-interactions-image.jpg",
//     },
//   ];

//   return (
//     <section id="research" className="py-20 bg-black text-white">
//       <div className="container mx-auto px-6">
//       <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
//           Research
//         </h1>
//         <h2>5G/6G Wireless communication and Networks</h2>
//         <p>As a researcher in 5G/6G wireless communication and networks, my work focuses on
//         advancing the technologies that drive next-generation wireless systems. These networks
//         represent the future of connectivity, oFering unprecedented speed, reliability, and
//         eFiciency to support a wide range of applications, from autonomous vehicles and smart
//         cities to immersive virtual reality and precision healthcare.</p>
//         <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
//           Research Focus 
//         </h2>
//         <h3 className="text-center">My research delves into the following key aspects of 5G/6G networks:</h3>
//         <div className="space-y-12">
//           {researchAreas.map((area, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               }`}
//             >
//               <div className="md:w-1/2">
//                 <img
//                   src={area.image}
//                   alt={area.title}
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//               <div className="md:w-1/2 md:px-8 mt-6 md:mt-0">
//                 <h3 className="text-2xl font-bold text-yellow-400 mb-4">
//                   {area.title}
//                 </h3>
//                 <p className="text-gray-300 text-lg">{area.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Research;
