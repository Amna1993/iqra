import React from "react";

const Publication = () => {
  const courses = [
    {
      title: "Google Scholar",
      link: "https://scholar.google.ca/citations?user=2M7NFH8AAAAJ&hl=en&oi=ao",
    },
    {
      title: "ORCID",
      link: "https://orcid.org/0000-0003-1518-0334",
    },
    {
      title: "GitHub",
      link: "https://github.com/iqrabatool",
    },
    {
      title: "Web of Science",
      link: "https://www.webofscience.com/wos/author/record/MAH-1278-2025",
    },
    
  ];

  return (
    <section id="publications" className="py-12 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">
          Publications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                {course.title}
              </h3>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold underline hover:text-white"
              >
                Visit {course.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publication;
