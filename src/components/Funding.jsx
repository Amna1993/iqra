const Funding = () => {
    const fundingOpportunities = [
      {
        title: "AI Research Grants",
        description:
          "Apply for grants to fund innovative AI research projects, focusing on advancements in machine learning, ethics, and human-centric AI.",
        deadline: "Deadline: June 30, 2025",
        image: "/path-to-grant-image.jpg",
      },
      {
        title: "Startup Incubation Program",
        description:
          "Support for AI-focused startups, including seed funding, mentorship, and access to cutting-edge resources.",
        deadline: "Deadline: December 15, 2024",
        image: "/path-to-incubation-image.jpg",
      },
      {
        title: "Industry-Academia Collaboration",
        description:
          "Funding for joint research projects between academic institutions and industry partners in AI.",
        deadline: "Deadline: March 31, 2025",
        image: "/path-to-collaboration-image.jpg",
      },
    ];
  
    return (
      <section id="funding" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
            Funding Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {fundingOpportunities.map((funding, index) => (
              <div
                key={index}
                className="bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={funding.image}
                  alt={funding.title}
                  className="rounded-t-lg w-full h-40 object-cover mb-4"
                />
                <h3 className="text-2xl font-bold text-black mb-2">
                  {funding.title}
                </h3>
                <p className="text-black mb-4">{funding.description}</p>
                <span className="block text-black font-semibold">{funding.deadline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Funding;