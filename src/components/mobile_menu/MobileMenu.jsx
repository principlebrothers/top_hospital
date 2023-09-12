import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSpeakerPhone } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Slide, Zoom } from 'react-awesome-reveal';
import amtcLogo from '../../assets/amtcLogo.png';

import './MobileMenu.css';
import 'animate.css';

const MobileMenu = ({ handleCloseModal, modalRef }) => {
  const [showPatientServiceDropdown, setShowPatientServiceDropdown] =
    useState(false);
  const [showMedicalServiceDropdown, setShowMedicalServiceDropdown] =
    useState(false);

  const togglePatientServicesDropdown = () => {
    setShowPatientServiceDropdown(!showPatientServiceDropdown);
  };

  const toggleMedicalServicesDropdown = () => {
    setShowMedicalServiceDropdown(!showMedicalServiceDropdown);
  };
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
          <div role='group' className={`mobile__btn__links__container`}>
            <button type='button' onClick={togglePatientServicesDropdown}>
              Patient Services
            </button>
            {showPatientServiceDropdown ? (
              <div>
                <Link to='patient-services' onClick={handleCloseModal}>
                  Hotels near the top hospitals
                </Link>
                <Link to='patient-services' onClick={handleCloseModal}>Medical Coordination Office</Link>
                <Link to='patient-services' onClick={handleCloseModal}>Patients Privilege</Link>
                <Link to='patient-services' onClick={handleCloseModal}>Payment Options</Link>
                <Link to='patient-services' onClick={handleCloseModal}>
                  Tele-consultation with a doctor
                </Link>
              </div>
            ) : null}
          </div>
          <div role='group' className={`mobile__btn__links__container`}>
            <button type='button' onClick={toggleMedicalServicesDropdown}>
              Medical Travel
            </button>
            {showMedicalServiceDropdown ? (
              <div>
                <Link to='medical-travel' onClick={handleCloseModal}>Medical Coordination Office</Link>
                <Link to='medical-travel' onClick={handleCloseModal}>Medical Travel Guides</Link>
                <Link to='medical-travel' onClick={handleCloseModal}>Medication Tourism</Link>
              </div>
            ) : null}
          </div>
          <div role='group'>
            <Link to='/packages' onClick={handleCloseModal}>
              Packages
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
