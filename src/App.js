import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './Home/Home';
import BestSeller from './BestSeller/BestSeller';
import Care from './Care/Care';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import Contact from './Contact/Contact';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Layout from './Layout';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [shadow, setShadow] = useState(false);

  const sections = useRef({
    home: null,
    bestseller: null,
    care: null,
    products: null,
    contact: null,
  });

  const handleLinkClick = (section) => {
    setActiveLink(section); // Set the active link
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section

    if (window.innerWidth <= 980) {
      setMenuOpen(false); // Close the menu on small screens
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value to determine when the section is considered visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.keys(sections.current).forEach((key) => {
      const section = document.getElementById(key);
      if (section) observer.observe(section);
    });

    return () => {
      if (observer) {
        Object.keys(sections.current).forEach((key) => {
          const section = document.getElementById(key);
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <div className='adg-con'>
      <header className={`header ${shadow ? 'shadow' : ''}`} id="header">
        <nav className="nav-container">
          <a href="https://example.com" className="nav_logo">ADG Purified Water</a>
          <div className={`nav_menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav_list">
              <li>
                <a
                  href="#home"
                  className={`nav_link ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#bestseller"
                  className={`nav_link ${activeLink === 'bestseller' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('bestseller')}
                >
                  BestSeller
                </a>
              </li>
              <li>
                <a
                  href="#care"
                  className={`nav_link ${activeLink === 'care' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('care')}
                >
                  Care
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className={`nav_link ${activeLink === 'products' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('products')}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav_link ${activeLink === 'contact' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav_close" id="nav_close" onClick={closeMenu}>
              <i className="ri-close-line"></i>
            </div>
            <div className='social-links-container'>
              <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer" className='social-link'>
                <i className='ri-instagram-line'></i>
              </a>
              <a href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer" className='social-link'>
                <i className='ri-twitter-x-line'></i>
              </a>
              <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className='social-link'>
                <i className='ri-facebook-circle-line'></i>
              </a>
            </div>
          </div>
          <div className="nav_toggle" id='nav_toggle' onClick={toggleMenu}>
            <i className='ri-apps-2-line'></i>
          </div>
        </nav>
      </header>
      <Layout>
      <main>
        <section className='home section' id="home" ref={(el) => (sections.current.home = el)}>
          <Home />
        </section>
        <section className='bestseller section' id="bestseller" ref={(el) => (sections.current.bestseller = el)}>
          <BestSeller />
        </section>
        <section className='care section' id="care" ref={(el) => (sections.current.care = el)}>
          <Care />
        </section>
        <div className='banner'>
          <Banner />
        </div>
        <section className='product section' id="products" ref={(el) => (sections.current.products = el)}>
          <Product />
        </section>
        <section id="contact" ref={(el) => (sections.current.contact = el)}>
          <Contact />
        </section>
      </main>
      </Layout>
      <footer className='footer'>
        <div className='footer_container'>
          <a href='#' className='footer_logo'>ADG Purified Water</a>
          <div className='footer_content'>
            <div className='footer_links'>
              <a href="#" className='footer_link'>Terms & Agreements</a>
              <a href="#" className='footer_link'>Privacy Policy</a>
            </div>
            <span className='footer_copy'>
              &copy; {new Date().getFullYear()} ADG Purified Water. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
