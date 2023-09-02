import { Link } from 'react-router-dom';
import { MdOutlineSpeakerPhone } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Slide, Zoom } from 'react-awesome-reveal';
import amtcLogo from '../../assets/amtcLogo.png';

import './MobileMenu.css';
import 'animate.css';

const MobileMenu = ({ handleCloseModal, modalRef }) => {
  return (
    <dialog
      ref={modalRef}
      className='mobile__modal animate__animated animate__fadeInDownBig'
    >
      <nav id='mobile__nav'>
        <Slide>
          <div role='group'>
            <Link to='/' onClick={handleCloseModal}>
              Home
            </Link>
          </div>
          <div role='group'>
            <Link to='/about' onClick={handleCloseModal}>
              About Top Hospitals
            </Link>
          </div>
          <div role='group'>
            <Link to='/patient-services' onClick={handleCloseModal}>
              Patient Services
            </Link>
          </div>
          <div role='group'>
            <Link to='/medical-travel' onClick={handleCloseModal}>
              Medical Travel
            </Link>
          </div>
          <div role='group'>
            <Link to='/packages' onClick={handleCloseModal}>
              Packages
            </Link>
          </div>
          <div role='group'>
            <Link to='/contact' onClick={handleCloseModal}>
              Contact Us
            </Link>
          </div>
          <div role='group'>
            <Link to='#'>
              <MdOutlineSpeakerPhone className='phone__icon' />
              <span>+233-308-040-040</span>
            </Link>
          </div>
        </Slide>
        <Zoom>
        <figure className='amtc__logo__mobile'>
          <img src={amtcLogo} alt='amtc' />
          <figcaption>Powered by Africa Medical Tourism Council</figcaption>
          </figure>
        </Zoom>
        <div role='group' className='closed__btn__container'>
          <p className='closed__btn' onClick={handleCloseModal}>
            x
          </p>
        </div>
      </nav>
    </dialog>
  );
};

MobileMenu.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default MobileMenu;
