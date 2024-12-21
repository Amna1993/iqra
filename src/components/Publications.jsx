import React from "react";

const Publications = () => {
  const publications = [
    {
      title: "Ethical AI in Healthcare",
      journal: "Journal of AI Research",
      year: 2023,
      link: "#",
    },
    {
      title: "Advances in Deep Reinforcement Learning",
      journal: "Neural Information Processing Systems",
      year: 2022,
      link: "#",
    },
    {
      title: "Generative Models for Natural Language Understanding",
      journal: "Nature Machine Intelligence",
      year: 2021,
      link: "#",
    },
  ];

  return (
    <section id="publications" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
          Publications
        </h2>
        <div className="space-y-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-black mb-2">
                {publication.title}
              </h3>
              <p className="text-lg text-gray-800">
                Published in <span className="text-black">{publication.journal}</span>, {publication.year}.
              </p>
              <a
                href={publication.link}
                className="text-black font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
