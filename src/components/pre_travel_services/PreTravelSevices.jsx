import { useRef, useState } from 'react';
import { preTravelServices, preTravelIcons } from '../../utils/Utils';
import QuickNavForm from '../quick__nav_form/QuickNavForm';

const PreTravelSevices = () => {
  const modalRef = useRef(null);
  const [formName, setFormName] = useState('');

  const handleOpenVisaAssistanceModal = () => {
    if (modalRef.current) modalRef.current.showModal();
    setFormName('visa-assistance');
  };

  // const handleOpenHotelBookingModal = () => {
  //   if (modalRef.current) modalRef.current.showModal();
  //   setFormName('hotel-booking');
  // };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <section className='medical__services__container'>
      {preTravelServices?.map((service) => {
        const { id, title, description, button_info } = service;
        const IconComponent = preTravelIcons[id - 1];
        return (
          <div key={id} className='medical__services__card'>
            <div className='medical__services__container__header'>
              <div className='icon__container'>
                <IconComponent />
              </div>
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            {id === 4 ? (
              <div className='book__service__btn__container'>
                <button type='button' className='book__service__btn'>
                  <a href={`tel: ${button_info}`}>Call {button_info}</a>
                </button>
              </div>
            ) : id === 3 ? (
              <div className='book__service__btn__container'>
                <button type='button' className='book__service__btn'>
                  <a
                    href={`https://wa.me/233550641351?text=Hello, I would like to request an airport transfer to a top hospital in Ghana. Kindly get in touch with me.`}
                    target='_blank'
                  >
                    {button_info}
                  </a>
                </button>
              </div>
            ) : id === 2 ? (
              <div className='book__service__btn__container'>
                <button type='button' className='book__service__btn'>
                  <a
                    href={`https://wa.me/233550641351?text=Hello, I would like to make a hotel booking in Ghana. Kindly get in touch with me.`}
                    target='_blank'
                  >
                    {button_info}
                  </a>
                </button>
              </div>
            ) : (
              <div
                className='book__service__btn__container'
                onClick={handleOpenVisaAssistanceModal}
              >
                <button type='button' className='book__service__btn'>
                  {button_info}
                </button>
              </div>
            )}
          </div>
        );
      })}
      <QuickNavForm
        handleCloseModal={handleCloseModal}
        modalRef={modalRef}
        formName={formName}
      />
    </section>
  );
};

export default PreTravelSevices;
