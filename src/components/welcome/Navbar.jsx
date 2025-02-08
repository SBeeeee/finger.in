import React, { useEffect } from "react";

const Navbar = () => {
  // Smooth scrolling function
  const handleSmoothScroll = (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur rounded-[50px] z-[999] py-3 px-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <ul className="flex gap-8 font-body">
          {[
            { id: "header", name: "Home" },
            { id: "overview", name: "Overview" },
            { id: "KeyFeatures", name: "Key Features" },
            { id: "our-journey", name: "Our Solution" },
            { id: "team", name: "Team" },
          ].map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={handleSmoothScroll}
                className="nav-link text-base pb-[2px] border-b border-b-transparent transition-colors duration-300 hover:text-white hover:border-b-white text-[#aaaaaa]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
