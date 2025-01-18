import React from "react";

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education Item 1 */}
          <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">PhD in Computer Science</h3>
            <p className="text-lg">
              Western University, London, Ontario <br />
              <span className="italic font-semibold">91%</span>
            </p>
          </div>

          {/* Education Item 2 */}
          <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">
              Master's in Software Engineering
            </h3>
            <p className="text-lg">
              Bahria University, Islamabad <br />
              <span className="italic font-semibold">87%</span>
            </p>
          </div>

          {/* Education Item 3 */}
          <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">
              Bachelor's in Computer Science
            </h3>
            <p className="text-lg">
              University of Azad Jammu and Kashmir <br />
              <span className="italic font-semibold">89%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

