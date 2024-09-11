import React, { useEffect } from 'react';
import './Contact.css';


const Contact = () => {


  return (
    <div className="contact">
      <h2 className='section_title contact_title' data-aos="fade-down">Connect Us To Order</h2>
      <div className='contact_container'>
        <div className='contact_list'>
          {/* Main Factory */}
          <div className='contact_card' data-aos="flip-left" data-aos-delay="100">
            <h3>Main Factory</h3>
            <p><i className='ri-map-pin-line'></i> 471, BM Rollway, Yangon </p>
            <p><i className='ri-phone-line'></i> +95 444424528</p>
            <p><i class='ri-mail-line'></i> <a href="mailto:adg146@gmail.com.com">adg146@gmail.com</a></p>
            <div className='social_links'>
              <a href='https://www.facebook.com/p/ADG-Purified-Drinking-Water-100063767334764' target='_blank' rel='noopener noreferrer'>
                <i className='ri-facebook-line'></i>
              </a>
              <a href='https://t.me/wholesaler2' target='_blank' rel='noopener noreferrer'>
                <i class='ri-telegram-line'></i>
              </a>
            </div>
          </div>

          {/* Wholesaler 1 */}
          <div className='contact_card' data-aos="zoom-in-up" data-aos-delay="200">
            <h3>Wholesaler 1</h3>
            <p><i className='ri-map-pin-line'></i> 156, BayintNaung Road, Yangon</p>
            <p><i className='ri-phone-line'></i> +95 251044988</p>
            <p><i class='ri-mail-line'></i> <a href="mailto:zawl998@gmail.com">zawl998@gmail.com</a></p>
            <div class='social_links'>
              <a href='https://www.facebook.com/p/ADG-Purified-Drinking-Water-100063767334764' target='_blank' rel='noopener noreferrer'>
                <i class='ri-facebook-line'></i>
              </a>
              <a href='https://t.me/wholesaler2' target='_blank' rel='noopener noreferrer'>
                <i class='ri-telegram-line'></i>
              </a>
            </div>
          </div>

          {/* Wholesaler 2 */}
          <div className='contact_card' data-aos="fade-left" data-aos-delay="300">
            <h3>Wholesaler 2</h3>
            <p><i className='ri-map-pin-line'></i> 335, MinyeKyawSwar Road, Yangon</p>
            <p><i className='ri-phone-line'></i> +95 456822355</p>
            <p><i class='ri-mail-line'></i> <a href="mailto:khinla25@gmail.com">khinla25@gmail.com</a></p>
            <div className='social_links'>
              <a href='https://www.facebook.com/p/ADG-Purified-Drinking-Water-100063767334764' target='_blank' rel='noopener noreferrer'>
                <i className='ri-facebook-line'></i>
              </a>
              <a href='https://t.me/wholesaler2' target='_blank' rel='noopener noreferrer'>
                <i class='ri-telegram-line'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;