import React from "react";

const timelineItems = [
  {
    title: "About Us",
    description:
      "We are pioneers in redefining digital experiences with cutting-edge technology and innovative solutions. Our expertise blends art and science into visually stunning, highly functional designs.",
    align: "left", // Keeps it on the left
  },
  {
    title: "Projects",
    description:
      "Explore our innovative projects that push the boundaries of technology and design. Each project is a unique blend of creativity and precision, transforming ideas into digital masterpieces.",
    align: "right", // Ensures it moves to the right
  },
  {
    title: "Fingerprint Spoofing",
    description:
      "Fingerprint spoofing involves crafting a fake fingerprint that tricks biometric scanners into accepting it as genuine. Materials like silicone, gelatin, or conductive inks are used to mimic the intricate patterns of a real fingerprint. Modern biometric systems incorporate advanced liveness detection, multispectral imaging, and countermeasures.",
    align: "left", // Moves it back to the left
  },
];

const OurJourney = () => {
  return (
    <section id="our-journey" className="py-16 px-8 text-center bg-black/90">
      <h2
        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Our Journey
      </h2>

      <div className="relative max-w-4xl mx-auto mt-16">
        {/* Timeline Line (Centered) */}
        <div className="absolute top-0 left-1/2 w-[4px] h-full bg-gradient-to-b from-orange-500 to-red-500 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="flex flex-col space-y-16 relative">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                item.align === "left" ? "justify-start" : "justify-end"
              }`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* Timeline Dot (Centered on Line) */}
              <div className="absolute left-1/2 w-6 h-6 bg-gradient-to-r from-red-400 to-orange-500 border-4 border-black rounded-full transform -translate-x-1/2 "></div>

              {/* Timeline Card */}
              <div
                className={`w-full md:w-[45%] p-6 bg-white/5 hover:bg-gray-800 border border-gray-700 shadow-lg rounded-xl text-left backdrop-blur-md ${
                  item.align === "right" ? "ml-auto" : "mr-auto"
                }`}
              >
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
