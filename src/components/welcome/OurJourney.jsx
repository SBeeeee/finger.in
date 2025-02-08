import React from "react";

const timelineItems = [
  {
    title: "Understanding Fingerprint Spoofing",
    description:
      "Fingerprint spoofing involves creating fake fingerprints using materials like silicone or gelatin to deceive biometric security systems.",
    align: "left",
  },
  {
    title: "Detecting Fake Fingerprints",
    description:
      "Advanced security techniques such as liveness detection, multispectral imaging, and AI-driven anomaly analysis help identify counterfeit fingerprints.",
    align: "right",
  },
  {
    title: "Enhancing Biometric Security",
    description:
      "Ongoing research in AI and biometric analysis continues to improve fingerprint recognition, making it more secure against spoofing attempts.",
    align: "left",
  },
];

const OurJourney = () => {
  return (
    <section id="our-journey" className="py-16 px-8 text-center bg-black/90 font-body">
      <h2
        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 font-logo"
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
              <div className="absolute left-1/2 w-6 h-6 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] border-4 border-black rounded-full transform -translate-x-1/2"></div>

              {/* Timeline Card */}
              <div
                className={`w-full md:w-[45%] p-6 bg-white/5 hover:bg-gray-800 border border-gray-700 shadow-lg rounded-xl text-left backdrop-blur-md ${
                  item.align === "right" ? "ml-auto" : "mr-auto"
                }`}
              >
                <h3 className="text-xl font-bold text-white font-logo">{item.title}</h3>
                <p className="text-gray-400 mt-2 font-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
