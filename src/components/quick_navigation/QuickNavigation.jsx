import { FaBriefcaseMedical } from 'react-icons/fa';
import { IoIosAirplane } from 'react-icons/io';
import { LiaBusinessTimeSolid } from 'react-icons/lia';

import './QuickNavigation.css';

const QuickNavigation = () => {
  return (
    <>
      <article className='quick__navigation'>
        <div
          role='group'
          aria-label='quick navigation'
          className='quick__nav__header'
        >
          <h3>Quick Navigation</h3>
          <button type='button' className='hide__quick__nav'>
            Hide
          </button>
        </div>
        <div className='quick__navigation__buttons'>
          <button type='button' className='quick__navigation__button'>
            <FaBriefcaseMedical />
            <span>Medical Services</span>
          </button>
          <button type='button' className='quick__navigation__button'>
            <IoIosAirplane />
            <span>Pre-travel services</span>
          </button>
          <button type='button' className='quick__navigation__button'>
            <LiaBusinessTimeSolid />
            <span>Post Treatment services</span>
          </button>
        </div>
      </article>
    </>
  );
};

export default QuickNavigation;
