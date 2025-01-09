import React, { useEffect, useRef } from 'react';
import './BestSeller.css'; // Make sure to keep your existing styles
import water from '../Assets/water.png';
import water1 from '../Assets/bottle.png';
import water2 from '../Assets/back.png';
import water3 from '../Assets/5liter.png';
import water6 from '../Assets/10L.png';
import water4 from '../Assets/waterdrop.png';
import water5 from '../Assets/iceleaf.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const BestSeller = () => {
    const bubblesContainerRef = useRef(null);


    useEffect(() => {
        const createBubbles = () => {
          const container = bubblesContainerRef.current;
          if (!container) return;

          const numberOfBubbles = 40; // Adjust number of bubbles
            for (let i = 0; i < numberOfBubbles; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            const size = Math.random() * 10 + 8; // Adjust bubble size
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
              const animationDelay = Math.random() * 1;
            bubble.style.animationDelay = `${animationDelay}s`;
              container.appendChild(bubble);
          }
          
          const cleanUp = () => {
            if (container) {
                container.innerHTML = ''; // Clear all generated bubbles
            }
            };

          return () => cleanUp();

        };

        createBubbles();

    }, []);

  return (
    <div className='bestseller_container container grid'>
         <div className="bubbles-container" ref={bubblesContainerRef}></div> {/* This is the container for bubbles */}
      <div className='bestseller_data' data-aos="fade-right">
        <h2 className='section_title' data-aos="fade-up" data-aos-delay="100">
          Explore Our <br /> Top-Selling Products
        </h2>
        <p className="seller_des" data-aos="fade-up" data-aos-delay="200">
          Our best-selling products are customer favorites for a reason. They deliver unmatched purity and taste, ensuring that every sip is as refreshing as the first. See why so many trust ADG Purified Water for their daily hydration needs.
        </p>
        <img src={water} alt='seller' className='bestseller1_1' />
        <img src={water} alt='seller' className='bestseller1_2' />
      </div>

      <Swiper
        className="bestseller_swiper swiper"
        loop={true}
        grabCursor={true}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={5}
        data-aos="fade-left"
        data-aos-delay="500"
      >
        
        <SwiperSlide className="bestseller_article swiper-slide">
          <img src={water1} alt='seller1' className='bestseller-1' data-aos="zoom-in" data-aos-delay="600"/>
          <img src={water4} alt='seller2' className='bestseller-2' />
          <img src={water5} alt='seller3' className='bestseller-3' />
          <img src={water4} alt='seller2' className='bestseller-3' />
        </SwiperSlide>
        
        <SwiperSlide className="bestseller_article swiper-slide">
          <img src={water2} alt='seller1' className='bestseller-1' data-aos="zoom-in" data-aos-delay="600"/>
          <img src={water4} alt='seller2' className='bestseller-2' />
          <img src={water5} alt='seller3' className='bestseller-3' />
          <img src={water4} alt='seller2' className='bestseller-3' />
        </SwiperSlide>
        <SwiperSlide className="bestseller_article swiper-slide">
          <img src={water6} alt='seller1' className='bestseller-1' data-aos="zoom-in" data-aos-delay="600"/>
          <img src={water4} alt='seller2' className='bestseller-2' />
          <img src={water5} alt='seller3' className='bestseller-3' />
          <img src={water4} alt='seller2' className='bestseller-3' />
        </SwiperSlide>
        <SwiperSlide className="bestseller_article swiper-slide">
          <img src={water3} alt='seller1' className='bestseller-1' data-aos="zoom-in" data-aos-delay="600"/>
          <img src={water4} alt='seller2' className='bestseller-2' />
          <img src={water5} alt='seller3' className='bestseller-3' />
          <img src={water4} alt='seller2' className='bestseller-3' />
        </SwiperSlide>

      </Swiper>
      
    </div>
  );
}

export default BestSeller;