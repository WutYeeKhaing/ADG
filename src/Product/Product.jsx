import React from 'react'
import './Product.css'
import coffee from '../Assets/coffee.png'
import Liter from '../Assets/20.jpg'

const Product = () => {
    return (
        <div className="products_section">
            <h2 className='section_title'>
                All Products <br /> in One Place
            </h2>
            <div className='products_container container'>
                <div className='products_content grid'>
                    <article className='products_card'>
                        <img src={coffee} alt='500ml Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Convenient Travel Size</span>
                        <h2 className='product_title'>500ml</h2>
                        <span className='product_price'>$1.00</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>

                    <article className='products_card'>
                        <img src={coffee} alt='1 Liter Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Pure Water for On-the-Go</span>
                        <h2 className='product_title'>1 Liter</h2>
                        <span className='product_price'>$1.50</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>

                    <article className='products_card'>
                        <img src={coffee} alt='5 Liter Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Perfect for Office And Kitchen</span>
                        <h2 className='product_title'>5 Liters</h2>
                        <span className='product_price'>$8.00</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>

                    <article className='products_card'>
                        <img src={coffee} alt='10 Liter Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Stay Hydrated at Home</span>
                        <h2 className='product_title'>10 Liters</h2>
                        <span className='product_price'>$15.00</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>

                    <article className='products_card'>
                        <img src={coffee} alt='20 Liter Bottle' className='product_img' loading="lazy" />
                        <span className='products_subtitle'>Family Size Or Business Use</span>
                        <h2 className='product_title'>20 Liters</h2>
                        <span className='product_price'>$25.00</span>
                        <button className='product_button' aria-label="Add to cart">
                            <i className='ri-shopping-cart-line' aria-hidden="true"></i>
                        </button>
                    </article>
                </div>
                <img src={coffee} alt='product' className='products_crab' />
                <img src={coffee} alt='product' className='products_1' />
                <img src={coffee} alt='product' className='products_2' />
            </div>

        </div>
    )
}

export default Product