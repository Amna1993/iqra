import React from "react";

const Research = () => {
  const researchAreas = [
    {
      title: "Entertainment Computing",
      description:
        "Our research focuses on enhancing user experiences in entertainment and interactive systems. From video games to social media platforms, we develop models to boost engagement, create intelligent Non-Player Characters (NPCs) using advanced stochastic methods, and leverage generative AI in gaming. We also explore the impact of serious games in education and healthcare, alongside projects on in-game advertising, simulation games, and eSports.",
      image: "/path-to-entertainment-image.jpg",
    },
    {
      title: "Human-Centered AI",
      description:
        "We design AI systems that prioritize human values such as trust, fairness, and explainability. Our work includes analyzing foundation models like text-to-image generation for accuracy and ethical considerations. Current projects include ensuring fairness in AI systems like recommendation engines and autonomous vehicles, along with studies on ethical responsibility in AI deployment.",
      image: "/path-to-human-centered-ai-image.jpg",
    },
    {
      title: "Human-System Interactions in Complex Environments",
      description:
        "Our research develops intelligent systems to support decision-making in high-stakes environments. This includes augmented reality aids for industries like healthcare and transportation, computational models of operator behavior, and addressing privacy issues in wearables. Projects range from AR navigation tools to studies on technostress and privacy in emerging sociotechnical systems.",
      image: "/path-to-human-system-interactions-image.jpg",
    },
  ];

  return (
    <section id="research" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
          Research Focus Areas
        </h2>
        <div className="space-y-12">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2">
                <img
                  src={area.image}
                  alt={area.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:px-8 mt-6 md:mt-0">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-300 text-lg">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
