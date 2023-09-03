import { HiArrowSmRight } from 'react-icons/hi';
import PropTypes from 'prop-types';

const BookAppointment = ({ handleOpenModal }) => {
  return (
    <>
      <div className='services__info__left'>
        <h3>In-person appointment Request</h3>
        <div className='appointment_type'>
          <p>Which type of appointment are you interested in?</p>
          <div className='services__info__form'>
            <button
              type='button'
              className='services__info__button'
              onClick={handleOpenModal}
            >
              <span>Book In Person Appointment</span>
              <HiArrowSmRight className='forward__arrow' />
            </button>
            <button type='button' className='services__info__button'>
              <span>Book Video Consultation</span>
              <HiArrowSmRight className='forward__arrow' />
            </button>
          </div>
        </div>
      </div>
      <div className='services__info__levels'>
        <p>
          <span className='position__number first_place'>1</span>
          <span>Appointment type</span>
        </p>
        <p>
          <span className='position__number second_place'>2</span>
          <span>Appointment Details</span>
        </p>
      </div>
    </>
  );
}

BookAppointment.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,

};

export default BookAppointment