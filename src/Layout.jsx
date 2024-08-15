import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', refreshAOS);

    return () => {
      window.removeEventListener('scroll', refreshAOS);
    };
  }, []);

  return <>{children}</>;
};

export default Layout;