import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Jane Smith",
      role: "AI Research Scientist",
      image: "/path-to-your-image/jane-smith.jpg",
    },
    {
      name: "Dr. John Doe",
      role: "Machine Learning Engineer",
      image: "/path-to-your-image/john-doe.jpg",
    },
    {
      name: "Dr. Emily White",
      role: "Data Scientist",
      image: "/path-to-your-image/emily-white.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-black text-center">
                {member.name}
              </h3>
              <p className="text-lg text-gray-800 text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
