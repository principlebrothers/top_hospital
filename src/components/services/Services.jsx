import { useRef, useState } from 'react';
import { AiOutlineFile } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { PiWarningCircleBold } from 'react-icons/pi';

import './Services.css';
import Appointment from './appointment_from/Appointment';
import BookAppointment from './BookAppointment';
import TreatmentCost from './TreatmentCost';
import GeneralEnquiry from './GeneralEnquiry';

const Services = () => {
  const modalRef = useRef(null);
  const [showform, setShowForm] = useState(false);
  const [showtreatment, setShowTreatment] = useState(false);
  const [showenquiry, setShowEnquiry] = useState(false);

  const handleShowTreatment = () => {
    setShowForm(false);
    setShowEnquiry(false);
    setShowTreatment(true);
  };

  const handleShowForm = () => {
    setShowEnquiry(false);
    setShowTreatment(false);
    setShowForm(true);
  };

  const handleShowEnquiry = () => {
    setShowForm(false);
    setShowTreatment(false);
    setShowEnquiry(true);
  };

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <>
      <div className='services__buttons__container'>
        <button
          type='button'
          className='services__button'
          onClick={handleShowForm}
        >
          <AiOutlineFile />
          <span>Book appointment</span>
        </button>
        <button
          type='button'
          className='services__button'
          onClick={handleShowTreatment}
        >
          <FaRegMoneyBillAlt />
          <span>Treatment Cost Estimate</span>
        </button>
        <button
          type='button'
          className='services__button general__enquiry_btn'
          onClick={handleShowEnquiry}
        >
          <PiWarningCircleBold />
          <span>General Enquires</span>
        </button>
      </div>
      {showform === false &&
      showtreatment === false &&
      showenquiry === false ? null : (
        <div className='services__info' role='form'>
          {showform ? (
            <BookAppointment handleOpenModal={handleOpenModal} />
          ) : showtreatment ? (
            <TreatmentCost />
          ) : (
            <GeneralEnquiry />
          )}
        </div>
      )}
      <Appointment modalRef={modalRef} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Services;
