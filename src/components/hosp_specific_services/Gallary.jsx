import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import { useGetHospitalGalleryQuery } from '../api/apiSlice';

import './Gallary.css';

const Gallary = ({ id }) => {
  const { data = [], isFetching } = useGetHospitalGalleryQuery(id);

  return (
    <>
      {data?.length > 0 && (
        <article className='gallary__container'>
          <div className='gallary__headers'>
            <h3>Our Gallery</h3>
          </div>
          <hr />
          <div className='gallary__images'>
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
              data.map((item) => {
                const { id, picture_urls } = item;
                return (
                  <figure key={id} className='gallary__image__container'>
                    <img src={picture_urls} alt='gallery' />
                  </figure>
                );
              })
            )}
          </div>
        </article>
      )}
    </>
  );
}

Gallary.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Gallary