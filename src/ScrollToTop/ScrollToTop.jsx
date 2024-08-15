import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Show button if scrolled more than 300px
        setVisible(window.scrollY > 300);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <button
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      &uarr;
    </button>
  )
}

export default ScrollToTop