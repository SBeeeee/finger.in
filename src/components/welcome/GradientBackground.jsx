import React, { useEffect, useRef } from 'react';
import './GradientBackground.css';

const GradientBackground = () => {
  const spillRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spillRef.current) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        // Calculate offset percentages (adjust multiplier as needed)
        const offsetX = ((clientX - centerX) / centerX) * 5;
        const offsetY = ((clientY - centerY) / centerY) * 5;
        spillRef.current.style.background = `radial-gradient(circle at ${50 + offsetX}% ${50 + offsetY}%, #ff5f6d, #ffc371, transparent)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-container">
      <div ref={spillRef} className="spill-effect"></div>
    </div>
  );
};

export default GradientBackground;
