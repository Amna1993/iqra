import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">About</h3>
            <p className="text-gray-300">
              This website represents the journey of an AI Engineer, researcher, and innovator dedicated to advancing the boundaries of Artificial Intelligence and making impactful contributions to the field.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="text-gray-300 space-y-3">
              <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="#publications" className="hover:text-yellow-400 transition">Publications</a></li>
              <li><a href="#team" className="hover:text-yellow-400 transition">Team</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact</h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <span className="font-bold text-white">Address:</span> San Francisco, California
              </li>
              <li>
                <span className="font-bold text-white">Phone:</span> +1 223 456 789
              </li>
              <li>
                <span className="font-bold text-white">Email:</span>{" "}
                <a
                  href="mailto:info@aiwebsite.com"
                  className="hover:text-yellow-400 transition"
                >
                  info@aiwebsite.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} Dr. [Your Name]. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
