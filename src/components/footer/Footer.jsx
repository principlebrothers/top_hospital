import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidPhone } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { FiYoutube } from 'react-icons/fi';
import { ImPinterest2 } from 'react-icons/im';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='upper__footer'>
        <div className='contact__details'>
          <BiSolidPhone className='phone__icon upper__footer__icon' />
          <p>contact Top Hospitals</p>
          <p>+234 803 123 4567</p>
          <p>Available 24 hours everyday</p>
        </div>
        <div className='news__letter'>
          <MdEmail className='email__icon upper__footer__icon' />
          <p>Subscribe to our newsletter</p>
          <button type='button' className='news__letter__button'>
            Sign Up Now
          </button>
        </div>
        <div className='direction'>
          <MdLocationOn className='location__icon upper__footer__icon' />
          <p>Maps and Direction</p>
          <button type='button' className='direction__button'>
            Get Directions
          </button>
        </div>
      </div>
      <div className='lower__footer'>
        <div className='footer__services'>
          <Link to='/services' className='services__link'>
            Services
          </Link>
        </div>
        <div className='footer__Corporate'>
          <Link to='/corporate' className='corporate__link'>
            Corporate
          </Link>
        </div>
        <div className='footer__blog'>
          <Link to='/blog' className='blog__link'>
            Blog news
          </Link>
        </div>
        <div className='social__media__link'>
          <CiFacebook className='facebook__icon' />
          <TiSocialTwitterCircular className='twitter__icon' />
          <TiSocialLinkedinCircular className='linkedin__icon' />
          <ImPinterest2 className='pinterest__icon' />
          <FiYoutube className='youtube__icon' />
          <BsInstagram className='instagram__icon' />
        </div>
      </div>
    </footer>
  );
}

export default Footer