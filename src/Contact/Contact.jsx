import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className='section_title contact_title'>Connect Us To Order</h2>
      <div className='contact_container'>
        <div className='contact_list'>
          {/* Main Factory */}
          <div className='contact_card'>
            <h3>Main Factory</h3>
            <p><i className='ri-map-pin-line'></i> 1234 Factory Road, Industrial City, Country</p>
            <p><i className='ri-phone-line'></i> +1 (234) 567-8901</p>
            <p><i className='ri-mail-line'></i> factory@example.com</p>
            <div className='social_links'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-facebook-line'></i>
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-twitter-line'></i>
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-instagram-line'></i>
              </a>
            </div>
          </div>

          {/* Wholesaler 1 */}
          <div className='contact_card'>
            <h3>Wholesaler 1</h3>
            <p><i className='ri-map-pin-line'></i> 5678 Agency Lane, Metropolis, Country</p>
            <p><i className='ri-phone-line'></i> +1 (234) 567-8902</p>
            <p><i className='ri-mail-line'></i> agency1@example.com</p>
            <div className='social_links'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-facebook-line'></i>
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-twitter-line'></i>
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-instagram-line'></i>
              </a>
            </div>
          </div>

          {/* Wholesaler 2 */}
          <div className='contact_card'>
            <h3>Wholesaler 2</h3>
            <p><i className='ri-map-pin-line'></i> 9101 Agency Road, Cityville, Country</p>
            <p><i className='ri-phone-line'></i> +1 (234) 567-8903</p>
            <p><i className='ri-mail-line'></i> agency2@example.com</p>
            <div className='social_links'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-facebook-line'></i>
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-twitter-line'></i>
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <i className='ri-instagram-line'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;