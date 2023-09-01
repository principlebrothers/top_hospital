import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetTopHospitalsQuery } from '../../components/api/apiSlice';
import { Dna } from 'react-loader-spinner';

import './Hospitals.css';

const Hospital = () => {
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
                  <img src={image_url} alt={name} />
                </figure>
                <div className='hospital__card__body'>
                  <Link to={`/hospital/${id}`}>
                    <h3>{name}</h3>
                  </Link>
                  <div className='book__appointment__button__container'>
                    <button type='button'>Book Appointment</button>
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
    </>
  );
};

export default Hospital;
