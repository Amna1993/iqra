import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "Foundations of AI",
      description:
        "Learn the basics of Artificial Intelligence, including machine learning, natural language processing, and computer vision, with hands-on projects to build a strong foundation.",
      duration: "6 Weeks",
      image: "/path-to-ai-course-image.jpg",
    },
    {
      title: "Advanced Machine Learning",
      description:
        "Master advanced machine learning techniques, such as reinforcement learning, neural networks, and generative models, to solve real-world problems effectively.",
      duration: "8 Weeks",
      image: "/path-to-ml-course-image.jpg",
    },
    {
      title: "Ethical AI and Governance",
      description:
        "Explore the ethical implications of AI, focusing on transparency, fairness, and bias mitigation. Learn frameworks for responsible AI deployment.",
      duration: "4 Weeks",
      image: "/path-to-ethical-ai-image.jpg",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
          Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-t-lg w-full h-40 object-cover mb-4"
              />
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