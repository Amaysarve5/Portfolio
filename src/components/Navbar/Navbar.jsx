import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
    
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      } animate-fadeInUp`}
    >
      <div className="py-5 flex justify-between items-center text-body">
        {/* Logo */}
          <a
          href="#about"
          onClick={() => handleMenuItemClick('about')}
          className="text-lg font-semibold cursor-pointer flex items-center space-x-2"
          aria-label="Homepage"
        >
          <span className="text-accent">&lt;</span>
          <span className="text-heading">Amay</span>
          <span className="text-accent">/</span>
          <span className="text-heading">Sarve</span>
          <span className="text-accent">&gt;</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-body">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-accent ${
                activeSection === item.id ? "text-accent" : ""
              } transition transform hover:-translate-y-0.5`}
              aria-label={item.label}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Amaysarve5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body hover:text-accent"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/amay-sarve-72b1b9292"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body hover:text-accent"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-accent cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-accent cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-body">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-accent" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Amaysarve5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/amay-sarve-72b1b9292"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
