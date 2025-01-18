import React from "react";

const Publications = () => {
  const publications = [
    {
      title: "Bachelors of Computer Science (Silver Medal)",
      link: "#",
    },
    {
      title: "Master of Software Engineering (Gold Medal)",
      link: "#",
    },
    {
      title: "PhD in Computer Science (Full Funded Scholarship)",
      link: "#",
    },
    {
      title: "Youngest researcher award bahria university Islamabad (2022)",
      link: "#",
    },
    {
      title: "Best researcher of the year bahria university Islamabad (2023)",
      link: "#",
    },
    

  ];

  return (
    <section id="awards" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
          Awards
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
  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
