import React from 'react';
import coffee from '../Assets/coffee.png';
import './BestSeller.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BestSeller = () => {
  return (
    <div className='bestseller_container container grid'>
      <div className='bestseller_data'>
        <h2 className='section_title'>
          Discover Your <br /> FAVORITE DESIGN
        </h2>
        <p className="seller_des">
          Our best-selling products are customer favorites for a reason. They deliver unmatched purity and taste, ensuring that every sip is as refreshing as the first. See why so many trust ADG Purified Water for their daily hydration needs.
        </p>
        <img src={coffee} alt='image' className='bestseller1_1' />
        <img src={coffee} alt='image' className='bestseller1_2' />
      </div>

      <Swiper
  className="bestseller_swiper swiper"
  loop={true}
  grabCursor={true}
  slidesPerView="auto"
  centeredSlides="auto"
  spaceBetween={5}
>
 
      
        <SwiperSlide className="bestseller_article swiper-slide">
         
            <img src={coffee} alt='image' className='bestseller-1' />
            <img src={coffee} alt='image' className='bestseller-2' />
            <img src={coffee} alt='image' className='bestseller-3' />
        
        </SwiperSlide>
        <SwiperSlide className="bestseller_article swiper-slide">
          
            <img src={coffee} alt='image' className='bestseller-1' />
            <img src={coffee} alt='image' className='bestseller-2' />
            <img src={coffee} alt='image' className='bestseller-3' />
         
        </SwiperSlide>
        <SwiperSlide className="bestseller_article swiper-slide">
         
            <img src={coffee} alt='image' className='bestseller-1' />
            <img src={coffee} alt='image' className='bestseller-2' />
            <img src={coffee} alt='image' className='bestseller-3' />
        
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default BestSeller;