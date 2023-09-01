import Doctors from '../doctors/Doctors';
import HospitalSpecificServices from '../hosp_specific_services/HospitalSpecificServices';
import Gallary from '../hosp_specific_services/Gallary';
import { useParams } from 'react-router-dom';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { TbMessage2Share, TbCalendarTime } from 'react-icons/tb';

import { useGetHospitalInfoQuery } from '../api/apiSlice';

import './HospitalDetails.css';
import QuickNavigation from '../quick_navigation/QuickNavigation';

const HospitalDetails = () => {
  const { id } = useParams();
  const { data = [] } = useGetHospitalInfoQuery(id);

  const { hospital, info } = data;
  const image = hospital?.image_url; // Facility image


  return (
    <section className='hospital__details'>
      <div className='details__card'>
        <figure className='details__card__image__container'>
          <img src={image} alt='details' />
        </figure>
        <div className='details__card__body'>
          <h3>About Us</h3>
          <p>
            {info}
          </p>
          <div className='book__appointment__button__container'>
            <button type='button' className=''>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <article className='specialist__services'>
        <Doctors />
        <div className='services__container' role='group'>
          <HospitalSpecificServices id={id} />
          <Gallary id={ id } />
        </div>
      </article>
      <article className='quick__nav__and__call__details'>
        <div className='details__page__quick__nav__container'>
          <QuickNavigation />
        </div>
        <div className='call__details__container'>
          <h3>Call Britannia Medical</h3>
          <div className='call__details'>
            <p>
              <span>
                <BiSolidPhoneCall />
              </span>
              <span>Call For Appointment</span>
            </p>
            <p>
              <span>
                <TbMessage2Share />
              </span>
              <span>Send An Enquiry </span>
            </p>
            <p>
              <span>
                <TbCalendarTime />
              </span>
              <span>Book Appointment</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HospitalDetails;
