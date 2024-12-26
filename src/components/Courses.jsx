import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "CS3550 Computer Organization and Design",
      
    },
    {
      title: "CS1027 Computer Science Fundamental",
      
    },
    {
      title: "CS1032 Information System and Desing",
      
    },
    {
      title: "CSC-711 Advance artificial intelligence",
      
    },
    {
      title: "CSC-221 Data structure and Algorithm",
      
    },
    {
      title: "CEN-222 Data Communication and Networking",
      
    },
    {
      title: "EET_455 Wireless Communication",
      
    },
  ];

  return (
    <section id="courses" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
          Courses
        </h2>
        <h3 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">Undergraduate Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-black mb-2">
                {course.title}
              </h3>
              <p className="text-black mb-4">{course.description}</p>
              <span className="block text-black font-semibold">{course.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;