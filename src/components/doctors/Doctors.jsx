import { useState } from 'react';
import { Link } from 'react-router-dom';
import { specialists } from '../../utils/Utils';

import './Doctors.css';

const Doctors = () => {
  const [limit, setLimit] = useState(3);
  const [clicked, setClicked] = useState(false);

  const handleViewAll = () => {
    setClicked(true);
    setLimit(specialists.length);
  };

  const handleViewLess = () => {
    setClicked(false);
    setLimit(3);
  };

  return (
    <article className='specialist__container'>
      <h3>Doctor/Specialist</h3>
      <div className='specialist__cards__container'>
        {specialists?.slice(0, limit)?.map((item) => {
          const { id, image, name, info } = item;
          return (
            <div key={id} className='specialist__card'>
              <figure className='specialist__image__container'>
                <img src={image} alt={name} />
              </figure>
              <div className='specialist__card__body'>
                <h4>{name}</h4>
                <p>{info}</p>
                <div className='buttom__container'>
                  <Link to={`/doctors/${id}`}>View profile</Link>
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
    </article>
  );
};

export default Doctors;
