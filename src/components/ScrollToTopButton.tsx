import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopButtonProps {
  showAt?: number;
  position?: 'bottom-right' | 'bottom-left';
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  showAt = 300,
  position = 'bottom-left', // Changed to bottom-left for RTL layout
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAt) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAt]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const positionClass = position === 'bottom-right' 
    ? 'bottom-6 right-6' 
    : 'bottom-6 left-6';

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed ${positionClass} bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 z-50`}
          aria-label="العودة إلى الأعلى"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;