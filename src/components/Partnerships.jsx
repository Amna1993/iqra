const Partnerships = () => {
    const partnerships = [
      {
        title: "Tech Innovations Ltd.",
        description:
          "Collaborating on cutting-edge AI research and development to push the boundaries of machine learning and automation.",
        logo: "/path-to-tech-innovations-logo.jpg",
      },
      {
        title: "Healthcare AI Alliance",
        description:
          "Joint initiatives to develop AI-powered healthcare solutions, improving patient care and operational efficiency.",
        logo: "/path-to-healthcare-logo.jpg",
      },
      {
        title: "Future Robotics Inc.",
        description:
          "Partnership focused on integrating AI and robotics for industrial automation and smart manufacturing.",
        logo: "/path-to-robotics-logo.jpg",
      },
    ];
  
    return (
      <section id="partnerships" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
            Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.title}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-2xl font-bold text-black mb-2">
                  {partner.title}
                </h3>
                <p className="text-black text-center">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Partnerships;