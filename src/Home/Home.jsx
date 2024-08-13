import React from 'react'
import coffee from '../Assets/coffee.png'
import './Home.css'
const Home = () => {
  return (
    <div className='home_container container grid'>
        <div className='home_data'>
         <h1 className="home_title">Enjoy <br/>ADG WITH NO <br/> LIMITS</h1>
         <p className='home_description'>
            Healthy and Purified Water
            When you are thirsty water Remember our brand ADG.
         </p>
         <img src={coffee} alt="seller" className="home_image" />
         <div className='home_buttons'>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="button">Drink Now</a>
            <a href="https://example.com"  target="_blank" rel="noopener noreferrer" className="button button_extra">Order Here</a>
         </div>
        </div>
        <div className='home_images'>
        <div className="home_circle">
            <div className="home_subcircle"></div>
        </div>
        <img src={coffee}  alt="seller" className='home_img' />
        <img src={coffee} alt="seller" className='home_coff-1' />
        <img src={coffee}  alt="seller" className='home_coff-2' />
        <img src={coffee}  alt="seller" className='home_coff-3' />
        <img src={coffee}  alt="seller" className='home_coff-4' />
        <img src={coffee}  alt="seller" className='home_coff-5' />
        <img src={coffee}  alt="seller" className='home_coff-6' />
        </div>
    </div>
  )
}

export default Home