import { useRef } from 'react';
import Doctors from '../doctors/Doctors';
import HospitalSpecificServices from '../hosp_specific_services/HospitalSpecificServices';
import Gallary from '../hosp_specific_services/Gallary';
import { useParams, Link } from 'react-router-dom';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { TbMessage2Share, TbCalendarTime } from 'react-icons/tb';

import { useGetHospitalInfoQuery } from '../api/apiSlice';

import './HospitalDetails.css';
import QuickNavigation from '../quick_navigation/QuickNavigation';
import MainAppointment from '../main_appointment_form/MainAppointment';

function HospitalDetails() {
  const modalRef = useRef(null);
  const { id } = useParams();
  const { data = [] } = useGetHospitalInfoQuery(id);

  const { hospital, info } = data;
  const image = hospital?.image_url; // Facility image

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <section className='hospital__details'>
      <div className='details__card'>
        <figure className='details__card__image__container'>
          <img src={image} alt='details' />
        </figure>
        <div className='details__card__body'>
          <h3>About Us</h3>
          <p>{info}</p>
          <div className='book__appointment__button__container'>
            <button type='button' className='' onClick={handleOpenModal}>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <article className='specialist__services'>
        <Doctors id={id} />
        <div className='services__container' role='group'>
          <HospitalSpecificServices id={id} />
          <Gallary id={id} />
        </div>
      </article>
      <article className='quick__nav__and__call__details'>
        <div className='details__page__quick__nav__container'>
          <QuickNavigation />
        </div>
        <div className='call__details__container'>
          <h3>Reach Out To Us</h3>
          <div className='call__details'>
            <Link to='tel: +233308040040'>
              <span>
                <BiSolidPhoneCall />
              </span>
              <span>Call For Appointment</span>
            </Link>
            <Link to='mailto: info@britanniamedical.org'>
              <span>
                <TbMessage2Share />
              </span>
              <span>Send An Enquiry </span>
            </Link>
            <Link onClick={handleOpenModal}>
              <span>
                <TbCalendarTime />
              </span>
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </article>
      <MainAppointment handleCloseModal={handleCloseModal} modalRef={modalRef} />
    </section>
  );
}

export default HospitalDetails;
