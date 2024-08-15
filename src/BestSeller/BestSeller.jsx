import React from 'react';
import coffee from '../Assets/coffee.png';
import './BestSeller.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BestSeller = () => {
  return (
    <div className='bestseller_container container grid'>
      <div className='bestseller_data' data-aos="fade-right">
        <h2 className='section_title' data-aos="fade-up" data-aos-delay="100">
          Explore Our <br /> Top-Selling Products
        </h2>
        <p className="seller_des" data-aos="fade-up" data-aos-delay="200">
          Our best-selling products are customer favorites for a reason. They deliver unmatched purity and taste, ensuring that every sip is as refreshing as the first. See why so many trust ADG Purified Water for their daily hydration needs.
        </p>
        <img src={coffee} alt='seller' className='bestseller1_1' />
        <img src={coffee} alt='seller' className='bestseller1_2' />
      </div>

      <Swiper
        className="bestseller_swiper swiper"
        loop={true}
        grabCursor={true}
        slidesPerView="auto"
        centeredSlides="auto"
        spaceBetween={5}
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <SwiperSlide className="bestseller_article swiper-slide">
          <img src={coffee} alt='seller1' className='bestseller-1' data-aos="zoom-in" data-aos-delay="600"/>
          <img src={coffee} alt='seller2' className='bestseller-2' />
          <img src={coffee} alt='seller3' className='bestseller-3' />
        </SwiperSlide>
        <SwiperSlide className="bestseller_article swiper-slide">
          <img src={coffee} alt='seller1' className='bestseller-1' data-aos="zoom-in" data-aos-delay="600"/>
          <img src={coffee} alt='seller2' className='bestseller-2' />
          <img src={coffee} alt='seller3' className='bestseller-3' />
        </SwiperSlide>
        <SwiperSlide className="bestseller_article swiper-slide">
          <img src={coffee} alt='seller1' className='bestseller-1' data-aos="zoom-in" data-aos-delay="600"/>
          <img src={coffee} alt='seller2' className='bestseller-2' />
          <img src={coffee} alt='seller3' className='bestseller-3' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BestSeller;