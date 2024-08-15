import React from 'react';
import coffee from '../Assets/coffee.png'
import './Home.css'

const Home = () => {
  return (
    <div className='home_container container grid'>
      <div className='home_data' data-aos="fade-right">
        <h1 className="home_title" data-aos="fade-up" data-aos-delay="300">Enjoy <br/>ADG WITH NO <br/> LIMITS</h1>
        <p className='home_description' data-aos="fade-up" data-aos-delay="500">
          Healthy and Purified Water
          When you are thirsty water Remember our brand ADG.
        </p>
        <img src={coffee} alt="seller" className="home_image" data-aos="zoom-in" data-aos-delay="700" />
        <div className='home_buttons'>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="button" data-aos="fade-right" data-aos-delay="900">Drink Now</a>
          <a href="https://example.com"  target="_blank" rel="noopener noreferrer" className="button button_extra"  data-aos="fade-left" data-aos-delay="1100">Order Here</a>
        </div>
      </div>
      <div className='home_images' data-aos="fade-left">
        <div className="home_circle">
          <div className="home_subcircle" data-aos="zoom-in" data-aos-delay="1300"></div>
        </div>
        <img src={coffee} alt="seller" className='home_img' data-aos="zoom-out" data-aos-delay="1500" />
        <img src={coffee} alt="seller" className='home_coff-1' data-aos="fade-up" data-aos-delay="1700" />
        <img src={coffee} alt="seller" className='home_coff-2' data-aos="fade-down" data-aos-delay="1900" />
        <img src={coffee} alt="seller" className='home_coff-3' data-aos="fade-right" data-aos-delay="2100" />
        <img src={coffee} alt="seller" className='home_coff-4' data-aos="fade-left" data-aos-delay="2300" />
        <img src={coffee} alt="seller" className='home_coff-5' data-aos="zoom-in" data-aos-delay="2400" />
        <img src={coffee} alt="seller" className='home_coff-6' data-aos="zoom-out" data-aos-delay="2500" />
      </div>
    </div>
  )
}

export default Home;