const Funding = () => {
    const fundingOpportunities = [
      {

        

        title: "Scholarship and Grants",
       
      },
      {
        title: "Western University Ontario, NSERC",
      }
        
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