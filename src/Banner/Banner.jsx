import React from 'react'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner_container'>
            <ul className='banner_list'>
                <li className='banner_item'>
                    <i className='ri-leaf-line'></i>
                    <span>SUSTAINABLE CHOICE</span>
                </li>
                <li className='banner_item'>
                    <i className='ri-recycle-line'></i>
                    <span>RECYCLABLE MATERIALS</span>
                </li>
                <li className='banner_item'>
                    <i className='ri-star-line'></i>
                    <span>PREMIUM QUALITY</span>
                </li>
            </ul>
        </div>
    )
}

export default Banner