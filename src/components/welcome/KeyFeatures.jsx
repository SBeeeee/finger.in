import React from "react";

const features = [
  {
    title: "Real-Time Analysis",
    description:
      "Leverage advanced AI to instantly detect anomalies in fingerprint data and provide accurate results under any condition.",
  },
  {
    title: "Fraud Detection",
    description:
      "Stay one step ahead of malicious actors with sophisticated liveness checks and robust anti-spoofing measures.",
  },
  {
    title: "API Integration",
    description:
      "Effortlessly connect with your existing systems for a unified, powerful workflow that scales with your ambitions.",
  },
  {
    title: "Encryption",
    description:
      "Your data remains confidential thanks to end-to-end encryption and advanced security protocols.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-black/90 text-white py-16 px-8 font-body">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] font-heading">
          Key Features: Designed For You
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We meticulously crafted each element to elevate your projects. From
          robust fraud detection to mesmerizing transitions, everything is
          designed for a frictionless, visually stunning experience.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 p-7 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 min-h-[200px] w-80"
          >
            <h3 className="text-xl font-bold text-white font-heading">{feature.title}</h3>
            <p className="text-gray-400 text-lg mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
