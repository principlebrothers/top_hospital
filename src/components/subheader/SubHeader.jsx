import { Link } from 'react-router-dom';
import { MdOutlineSpeakerPhone } from 'react-icons/md';

import './SubHeader.css';

const SubHeader = () => {
  return (
    <nav className='nav'>
      <div role='group'>
        <Link to='/about'>About Top Hospitals</Link>
      </div>
      <div role='group'>
        <Link to='/patient-services'>Patient Services</Link>
      </div>
      <div role='group'>
        <Link to='/medical-travel'>Medical Travel</Link>
      </div>
      <div role='group'>
        <Link to='/packages'>Packages</Link>
      </div>
      <div role='group'>
        <Link to='/contact'>Contact Us</Link>
      </div>
      <div role='group'>
        <Link to='tel: +233308040040'>
          <MdOutlineSpeakerPhone className='phone__icon' />
          <span>
            +233-308-040-040
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default SubHeader