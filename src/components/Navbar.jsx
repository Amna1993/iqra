import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu on navigation
  };

  return (
    <nav className="bg-black text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest">
          <span className="hover:text-yellow-400 transition duration-300">
            Iqra Batool
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-yellow-400 text-3xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent px-6 md:px-0 py-4 md:py-0`}
        >
          {[
            "home",
            "research",
            "team",
            "bio",
            "publications",
            "courses",
            "awards",
            "funding",
            "join-us",
          ].map((section, index) => (
            <li
              key={section}
              className="text-lg text-center md:text-left"
            >
              <button
                onClick={() => handleScroll(section)}
                className="block md:inline hover:text-yellow-400 focus:outline-none w-full py-2 transition duration-300"
              >
                {section
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
