import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGetTopHospitalsQuery } from '../../components/api/apiSlice';
import { Dna } from 'react-loader-spinner';
import Appointment from '../services/appointment_from/Appointment';

import './Hospitals.css';

const Hospital = () => {
  const modalRef = useRef(null);
  const { data = [], isFetching } = useGetTopHospitalsQuery();
  const [limit, setLimit] = useState(6);
  const [clicked, setClicked] = useState(false);

  const allHospital = data?.data; // The data contains all registered hospitals

  const handleViewAll = () => {
    setClicked(true);
    setLimit(allHospital.length);
  };

  const handleReset = () => {
    setClicked(false);
    setLimit(6);
  };

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <>
      <h2>Recommended Top Hospitals</h2>
      {isFetching ? (
        <div className='loader__container'>
          <Dna
            visible={true}
            height='140'
            width='140'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper'
          />
        </div>
      ) : (
        <div className='hospitals__container' role='group'>
          {allHospital?.slice(0, limit)?.map((item) => {
            const { id, image_url, name } = item.attributes;
            return (
              <article
                key={id}
                className='hospital__card'
                role='group'
                aria-label='hospital card'
              >
                <figure className='hospital__card__image'>
                  <Link to={`/hospital/${id}`}><img src={image_url} alt={name} /></Link>
                </figure>
                <div className='hospital__card__body'>
                  <Link to={`/hospital/${id}`}>
                    <h3>{name}</h3>
                  </Link>
                  <div className='book__appointment__button__container'>
                    <button type='button' onClick={ handleOpenModal }>Book Appointment</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
      <div className='view__all__button' role='group'>
        {clicked ? (
          <button onClick={handleReset} type='button'>
            View few hospitals
          </button>
        ) : (
          <button onClick={handleViewAll} type='button'>
            View all hospitals
          </button>
        )}
      </div>
      <Appointment modalRef={modalRef} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Hospital;
