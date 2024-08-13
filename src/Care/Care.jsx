import React from 'react'
import coffee from '../../src/Assets/coffee.png'
import './Care.css'
const Care = () => {
    return (
        <div>
            <h2 className='section_title'>ENJOY AND TAKE <br />CARE OF YOUR HEALTH</h2>
            <div className='care_container container grid'>
                <ul className="care_list">
                    <li className="care_item">
                        <i className='ri-test-tube-line'></i>
                        <p>Rigorous Testing: We conduct thorough testing to ensure the highest quality of our products.</p>
                    </li>
                    <li className="care_item">
                        <i className='ri-filter-line'></i>
                        <p>Advanced Filtration Techniques: Our state-of-the-art filtration processes guarantee pure water.</p>
                    </li>
                    <li className="care_item">
                        <i className='ri-heart-line'></i>
                        <p>Commitment to Health: We prioritize your well-being through our commitment to product purity.</p>
                    </li>
                    <li className="care_item">
                        <i className='ri-hand-heart-line'></i>
                        <p>Dedication to Quality: Our products reflect our dedication to delivering clean, pure water.</p>
                    </li>
                </ul>
               <img src={coffee} alt="care" className='care_img'/>
            </div>
        </div>
    )
}

export default Care