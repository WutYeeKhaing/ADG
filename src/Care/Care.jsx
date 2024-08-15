import React from 'react'
import cup from '../../src/Assets/cup.png'
import './Care.css'
const Care = () => {
    return (
        <div>
            <h2 className='section_title' data-aos="fade-down">ENJOY AND TAKE <br />CARE OF YOUR HEALTH</h2>
            <div className='care_container container grid'>
                <ul className="care_list">
                    <li className="care_item" data-aos="fade-right"  data-aos-delay="100">
                        <i className='ri-test-tube-line'></i>
                        <p>Rigorous Testing: We conduct thorough testing to ensure the highest quality of our products.</p>
                    </li>
                    <li className="care_item" data-aos="fade-right"  data-aos-delay="200">
                        <i className='ri-filter-line'></i>
                        <p>Advanced Filtration Techniques: Our state-of-the-art filtration processes guarantee pure water.</p>
                    </li>
                    <i className="care_item" data-aos="fade-right"  data-aos-delay="300">
                        <i className='ri-heart-line'></i>
                        <p>Commitment to Health: We prioritize your well-being through our commitment to product purity.</p>
                    </i>
                    <li className="care_item" data-aos="fade-right"  data-aos-delay="400">
                        <i className='ri-hand-heart-line'></i>
                        <p>Dedication to Quality: Our products reflect our dedication to delivering clean, pure water.</p>
                    </li>
                </ul>
               <img src={cup} alt="care" className='care_img' data-aos="fade-left"  data-aos-delay="100"/>
            </div>
        </div>
    )
}

export default Care