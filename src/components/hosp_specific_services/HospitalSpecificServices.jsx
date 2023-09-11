import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGetHospitalServicesQuery } from '../api/apiSlice';
import MainAppointment from '../main_appointment_form/MainAppointment';
import PropTypes from 'prop-types';

import './HospitalSpecificServices.css';

const HospitalSpecificServices = ({ id }) => {
  const modalRef = useRef(null);
  const { data = [] } = useGetHospitalServicesQuery(id);
  const hospitalServices = data?.services;

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <article className='services__only__container'>
      <h3>Services Offerings</h3>
      <ul>
        {hospitalServices && hospitalServices.length > 0 ? (
          hospitalServices.map((item) => {
            const { id, name } = item;
            return (
              <li key={id}>
                <p>{name}</p>
              </li>
            );
          })
        ) : (
          <li className='no__services'>
            <p>No services available</p>
          </li>
        )}
      </ul>
      <div className='buttom__container'>
        <button type='button' onClick={handleOpenModal}>
          Book Appointment
        </button>
      </div>
      <MainAppointment
        handleCloseModal={handleCloseModal}
        modalRef={modalRef}
      />
    </article>
  );
};

HospitalSpecificServices.propTypes = {
  id: PropTypes.string.isRequired,
};

export default HospitalSpecificServices;
