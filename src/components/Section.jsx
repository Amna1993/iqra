import React from 'react';

const Section = ({ id, title, content, bgColor = 'bg-white' }) => {
  return (
    <section id={id} className={`${bgColor} py-16 px-6`}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-gray-600 text-lg">{content}</p>
      </div>
    </section>
  );
};

export default Section;
