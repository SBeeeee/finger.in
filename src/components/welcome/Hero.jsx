import React, { useEffect, useState } from 'react';
import TextPressure from '../../effects/TextPressure';
const Hero = () => {
  const sentences = [
    "CHANGE YOUR PERSPECTIVE",
    "EXPLORE NEW HORIZONS",
    "INNOVATE YOUR FUTURE"
  ];

  // currentSentence holds the currently displayed sentence.
  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  // animationPhase: 'idle', 'swipeOut', or 'swipeIn'
  const [animationPhase, setAnimationPhase] = useState('idle');

  useEffect(() => {
    const swapInterval = setInterval(() => {
      // Begin swipe-up out animation
      setAnimationPhase('swipeOut');

      // After 500ms (half of the animation duration), update the sentence and start swipe-up in
      setTimeout(() => {
        setCurrentSentence(prev => {
          const currentIndex = sentences.indexOf(prev);
          const nextIndex = (currentIndex + 1) % sentences.length;
          return sentences[nextIndex];
        });
        setAnimationPhase('swipeIn');
      }, 500);

      // After the full duration (500ms more) return to idle state
      setTimeout(() => {
        setAnimationPhase('idle');
      }, 1000);
    }, 3000);

    return () => clearInterval(swapInterval);
  }, [sentences]);

  const handleGetStarted = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="header"
      className="relative min-h-[100vh] pt-40  bg-fixed bg-black/90 bg-center bg-cover text-center text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto relative mt-12 px-12 z-50">
        <TextPressure
          text="Finger.In!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={12}
        />
        {/* Container for the swipe up effect with reserved space */}
        <div className="relative inline-block mb-6" style={{ perspective: '1000px' }}>
          {/* Invisible placeholder to reserve the same space */}
          <span className="font-body text-2xl opacity-0" aria-hidden="true">
            CHANGE YOUR PERSPECTIVE
          </span>
          {/* Animated text element with swipe classes */}
          <span
            className={`font-body text-2xl block transition-all duration-500 ${
              animationPhase === 'swipeOut'
                ? 'swipe-out'
                : animationPhase === 'swipeIn'
                ? 'swipe-in'
                : ''
            }`}
          >
            {currentSentence}
          </span>
        </div>
        <p className="font-body max-w-2xl mx-auto text-lg leading-relaxed mb-6">
          Bringing cinematic beauty and cutting-edge AI together for an experience that transcends the ordinary.
        </p>
        <button
          className="btn-hero glow border-2 border-white py-2 px-6 rounded-full text-lg font-body transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 shadow-lg"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
