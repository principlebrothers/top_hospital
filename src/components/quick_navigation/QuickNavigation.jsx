import { useState } from 'react';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { IoIosAirplane } from 'react-icons/io';
import { LiaBusinessTimeSolid } from 'react-icons/lia';

import './QuickNavigation.css';
import { Link } from 'react-router-dom';

const QuickNavigation = () => {
  const [show, setShow] = useState(true);

  const handleHide = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className='sticky__quick__access'>
      <article className='quick__navigation'>
        <div
          role='group'
          aria-label='quick navigation'
          className='quick__nav__header'
        >
          <h3>Quick Navigation</h3>
          {show ? (
            <button
              type='button'
              className='hide__quick__nav'
              onClick={handleHide}
            >
              Hide
            </button>
          ) : (
            <button
              type='button'
              className='hide__quick__nav'
              onClick={handleShow}
            >
              show
            </button>
          )}
        </div>
        {show ? (
          <div className='quick__navigation__buttons'>
            <button type='button' className='quick__navigation__button'>
              <FaBriefcaseMedical />
              <Link to={`/medical-services`}>
                <span>Medical Services</span>
              </Link>
            </button>
            <button type='button' className='quick__navigation__button'>
              <IoIosAirplane />
              <Link to={`/pre-travel-services`}>
                <span>Pre-travel services</span>
              </Link>
            </button>
            <button type='button' className='quick__navigation__button'>
              <LiaBusinessTimeSolid />
              <Link to={`/post-treatment-services`}>
                <span>Post Treatment services</span>
              </Link>
            </button>
          </div>
        ) : null}
      </article>
    </div>
  );
};

export default QuickNavigation;
