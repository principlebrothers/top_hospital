import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSpeakerPhone } from 'react-icons/md';

import './SubHeader.css';

const SubHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [medicalServiceDropdown, setMedicalServiceDropdown] = useState(false);

  const togglePatientServicesDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMedicalServicesDropdown = () => {
    setMedicalServiceDropdown(!medicalServiceDropdown)
  }

  return (
    <nav className='nav'>
      <div role='group'>
        <Link to='/'>Home</Link>
      </div>
      <div role='group'>
        <Link to='/about'>About Top Hospitals</Link>
      </div>
      <div role='group' className='patient__services__subheader'>
        <button type='button' onClick={togglePatientServicesDropdown}>
          Patient Services
        </button>
        {showDropdown ? (
          <div
            className={`sub__links__container animate__animated animate__fadeInDownBig`}
          >
            <Link to='patient-services'>Hotels near the top hospitals</Link>
            <Link to='patient-services'>Medical Coordination Office</Link>
            <Link to='patient-services'>Patients Privilege</Link>
            <Link to='patient-services'>Payment Options</Link>
            <Link to='patient-services'>Tele-consultation with a doctor</Link>
          </div>
        ) : null}
      </div>
      <div role='group' className='medical__travel__subheader'>
        <button type='button' onClick={toggleMedicalServicesDropdown}>
          Medical Travel
        </button>
        {medicalServiceDropdown ? (
          <div className='sub__links__container animate__animated animate__fadeInDownBig'>
            <Link to='medical-travel'>Medical Coordination Office</Link>
            <Link to='medical-travel'>Medical Travel Guides</Link>
            <Link to='medical-travel'>Medication Tourism</Link>
          </div>
        ) : null}
      </div>
      <div role='group' className='packages__subheader'>
        <Link to='packages'>Packages</Link>
        {/* <button type='button'>Packages</button> */}
      </div>
      <div role='group'>
        <Link to='tel: +233308040040'>
          <MdOutlineSpeakerPhone className='phone__icon' />
          <span>+233-308-040-040</span>
        </Link>
      </div>
    </nav>
  );
};

export default SubHeader;
