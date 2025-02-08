import React from "react";
import detectiveGif from "../../assets/detective.gif"; // Adjust path if needed

const Overview = () => {
  return (
    <div className=" bg-black/90 px-8 md:px-16 relative min-h-screen">
      <section
        id="overview"
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center"
      >
        {/* Content */}
        <div className="relative md:w-1/2 mb-5 z-10 mt-10">
          <h2 className="text-3xl md:text-4xl font-logo font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">
            Forensic Fingerprint
          </h2>
          <h2 className="text-3xl md:text-4xl font-logo font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent mb-4">
            Analysis Redefined
          </h2>
          <p className="text-[#aaaaaa] text-lg leading-relaxed font-body">
            Experience a groundbreaking approach to fingerprint detection powered
            by advanced deep learning. Our system delivers real-time forensic
            insights with unprecedented accuracy and speed, capturing every
            minute detail and transforming it into actionable intelligence.
          </p>
          <p className="text-[#aaaaaa] text-lg leading-relaxed mt-4 font-body">
            At the same time, a refined UI design ensures sleek, minimal, and
            powerful interactions that put aesthetics front and center—
            revolutionizing the way forensic evidence is analyzed.
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src={detectiveGif}
            alt="Detective Analysis"
            className="w-full h-96 rounded-lg shadow-lg bg-transparent"
          />
        </div>
      </section>
      <section id="overview"
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center">
        <div className="hidden md:block mt-10">
          <img
            src=""
            alt="Detective Analysis"
            className="w-full h-96 rounded-lg shadow-lg bg-transparent"
          />
        </div>
        <div className="relative md:w-1/2 mb-5 z-10">
          <h2 className="text-3xl md:text-4xl font-logo font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">
            Forensic Fingerprint
          </h2>
          <h2 className="text-3xl md:text-4xl font-logo font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent mb-4">
            Analysis Redefined
          </h2>
          <p className="text-[#aaaaaa] text-lg leading-relaxed font-body">
            Experience a groundbreaking approach to fingerprint detection powered
            by advanced deep learning. Our system delivers real-time forensic
            insights with unprecedented accuracy and speed, capturing every
            minute detail and transforming it into actionable intelligence.
          </p>
          <p className="text-[#aaaaaa] text-lg leading-relaxed mt-4 font-body">
            At the same time, a refined UI design ensures sleek, minimal, and
            powerful interactions that put aesthetics front and center—
            revolutionizing the way forensic evidence is analyzed.
          </p>
        </div>
      </section>
    </div>

  );
};

export default Overview;
