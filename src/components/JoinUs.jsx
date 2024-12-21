const JoinUs = () => {
    const joinUsOptions = [
      {
        title: "Research Fellow",
        description:
          "Join our team as a research fellow and contribute to groundbreaking AI projects in a collaborative environment.",
        applyLink: "#",
      },
      {
        title: "AI Internship Program",
        description:
          "Gain hands-on experience in AI development and research through our comprehensive internship program.",
        applyLink: "#",
      },
      {
        title: "Collaborator Opportunities",
        description:
          "Work with us as an external collaborator on innovative projects in AI and machine learning.",
        applyLink: "#",
      },
    ];
  
    return (
      <section id="join-us" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
            Join Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {joinUsOptions.map((option, index) => (
              <div
                key={index}
                className="bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between"
              >
                <h3 className="text-2xl font-bold text-black mb-2">
                  {option.title}
                </h3>
                <p className="text-black mb-4">{option.description}</p>
                <a
                  href={option.applyLink}
                  className="text-yellow-400 hover:text-yellow-500 font-bold text-center"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default JoinUs;
