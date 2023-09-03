import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import docAvatar from '../../assets/docAvatar.jpeg';
import { useGetHospitalServicesQuery } from '../api/apiSlice';
import MainAppointment from '../main_appointment_form/MainAppointment';
import PropTypes from 'prop-types';


import './Doctors.css';

const Doctors = ({ id }) => {
  const modalRef = useRef(null);
  const { data = [] } = useGetHospitalServicesQuery(id);
  const specialists = data?.services;
  const [limit, setLimit] = useState(6);
  const [clicked, setClicked] = useState(false);

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  const handleViewAll = () => {
    setClicked(true);
    setLimit(specialists.length);
  };

  const handleViewLess = () => {
    setClicked(false);
    setLimit(6);
  };

  return (
    <article className='specialist__container'>
      <h3>Doctor/Specialist</h3>
      <div className='specialist__cards__container'>
        {specialists?.slice(0, limit)?.map((item) => {
          const { id, name } = item;
          return (
            <div key={id} className='specialist__card'>
              <figure className='specialist__image__container'>
                <img src={docAvatar} alt={name} />
              </figure>
              <div className='specialist__card__body'>
                <h4>{name}</h4>
                <div className='buttom__container'>
                  <Link to='' onClick={handleOpenModal}>
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='view__all__button'>
        {clicked ? (
          <button
            type='button'
            className='display__all__doc'
            onClick={handleViewLess}
          >
            View few doctors
          </button>
        ) : (
          <button
            type='button'
            className='display__all__doc'
            onClick={handleViewAll}
          >
            View all doctors
          </button>
        )}
      </div>
      <MainAppointment handleCloseModal={handleCloseModal} modalRef={modalRef} />
    </article>
  );
};

Doctors.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Doctors;
