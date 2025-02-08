import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("header, section");

    const observerOptions = { threshold: 0.5 }; // Adjusting threshold for better accuracy

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active class from all links
          navLinks.forEach((link) => link.classList.remove("active"));

          // Find and add active class to the corresponding nav link
          const activeLink = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    }, observerOptions);

    // Observe each section
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur rounded-[50px] z-[999] py-3 px-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <ul className="flex gap-8 font-body">
          <li>
            <a
              href="#header"
              className="nav-link text-[#aaaaaa] text-base pb-[2px] border-b border-b-transparent transition-colors duration-300 hover:text-white hover:border-b-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#overview"
              className="nav-link text-[#aaaaaa] text-base pb-[2px] border-b border-b-transparent transition-colors duration-300 hover:text-white hover:border-b-white"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="nav-link text-[#aaaaaa] text-base pb-[2px] border-b border-b-transparent transition-colors duration-300 hover:text-white hover:border-b-white"
            >
              Key Features
            </a>
          </li>
          <li>
            <a
              href="#timeline-section"
              className="nav-link text-[#aaaaaa] text-base pb-[2px] border-b border-b-transparent transition-colors duration-300 hover:text-white hover:border-b-white"
            >
              Our Journey
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
