import React from 'react';
import { useGetHospitalServicesQuery } from '../api/apiSlice';

import './HospitalSpecificServices.css';

const HospitalSpecificServices = ({ id }) => {
  const { data = [], isFetching } = useGetHospitalServicesQuery(id);
  const hospitalServices = data?.services;

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
    </article>
  );
};

export default HospitalSpecificServices;
