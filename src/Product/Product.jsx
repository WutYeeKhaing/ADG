import React from 'react';
import './Product.css'
import water1 from '../Assets/bottle.png'
import water2 from '../Assets/back.png'
import water3 from '../Assets/5liter.png'
import water from '../Assets/waterdrop.png'

import water5 from '../Assets/20Liter.png'


const Product = () => {
    return (
        <div className="products_section">
            <h2 className='section_title' data-aos="fade-up">
                Check Our All Products <br />
            </h2>
            <div className='products_container container'>
                <div className='products_content grid'>
                    <article className='products_card' data-aos="fade-right" data-aos-delay="200">
                        <img src={water1} alt='500ml Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Convenient Travel Size</span>
                        <h2 className='product_title'>500ml</h2>
                        <span className='product_price'>$1.00</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>

                    <article className='products_card' data-aos="fade-left" data-aos-delay="300">
                        <img src={water2} alt='1 Liter Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Pure Water for On-the-Go</span>
                        <h2 className='product_title'>1 Liter</h2>
                        <span className='product_price'>$1.50</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>

                    <article className='products_card' data-aos="fade-right" data-aos-delay="400">
                        <img src={water3} alt='5 Liter Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Perfect for Office And Kitchen</span>
                        <h2 className='product_title'>5 Liters</h2>
                        <span className='product_price'>$8.00</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>

                    <article className='products_card' data-aos="fade-left" data-aos-delay="500">
                        <img src={water3} alt='10 Liter Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Stay Hydrated at Home</span>
                        <h2 className='product_title'>10 Liters</h2>
                        <span className='product_price'>$15.00</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>

                    <article className='products_card' data-aos="fade-right" data-aos-delay="600">
                        <img src={water5} alt='20 Liter Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Family Size Or Business Use</span>
                        <h2 className='product_title'>20 Liters</h2>
                        <span className='product_price'>$25.00</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>
                </div>
                <img src={water} alt='product' className='products_crab' data-aos="fade-left" data-aos-delay="700" />
                <img src={water} alt='product' className='products_1' data-aos="fade-right" data-aos-delay="800" />
                <img src={water} alt='product' className='products_2' data-aos="fade-up" data-aos-delay="900" />
            </div>
        </div>
    )
}

export default Product