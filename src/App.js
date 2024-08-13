import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Home/Home';
import BestSeller from './BestSeller/BestSeller';
import Care from './Care/Care';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import Contact from './Contact/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [shadow, setShadow] = useState(false);
  const handleLinkClick = (section) => {
    setActiveLink(section); // Set the active link
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section

    if (window.innerWidth <= 1150) {
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


  return (
    <div >
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
                  href="#best-seller"
                  className={`nav_link ${activeLink === 'best-seller' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('best-seller')}
                >
                  Best Seller
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
              <a href='https://www.instragram.com/' target="_blank" rel="noopener noreferrer" className='social-link'>
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
      <main>
        <section className='home section' id="home">
          <Home />
        </section>
        <section className='best-seller section' id="best-seller">
          <BestSeller />
        </section>
        <section className='care section' id="care">
          <Care />

        </section>
        <div className='banner'>
          <Banner />
        </div>
        <section className='product section' id="products">
          <Product />
        </section>
        <section className=' section' id="contact">
          <Contact />
        </section>
      </main>
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
    </div>
  );
}

export default App;
