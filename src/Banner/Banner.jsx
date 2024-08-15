import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner_container' data-aos="fade-up" data-aos-delay="600">
            <ul className='banner_list'>
                <li className='banner_item' data-aos="zoom-out" data-aos-delay="600">
                    <i className='ri-leaf-line'></i>
                    <span>SUSTAINABLE CHOICE</span>
                </li>
                <li className='banner_item' data-aos="zoom-out" data-aos-delay="800">
                    <i className='ri-recycle-line'></i>
                    <span>RECYCLABLE MATERIALS</span>
                </li>
                <li className='banner_item' data-aos="zoom-out" data-aos-delay="1000">
                    <i className='ri-star-line'></i>
                    <span>PREMIUM QUALITY</span>
                </li>
            </ul>
        </div>
    );
};

export default Banner;
