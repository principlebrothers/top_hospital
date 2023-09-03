import { useRef, useState } from 'react';
import './MedicalService.css';
import { medicalServices } from '../../utils/Utils';
import { FaPeopleArrows, FaShuttleVan } from 'react-icons/fa';
import { GiHealing } from 'react-icons/gi';
import QuickNavForm from '../quick__nav_form/QuickNavForm';

const MedicalService = () => {
  const modalRef = useRef(null);
  const [formName, setFormName] = useState('');
  const serviceIcons = [FaPeopleArrows, GiHealing, FaShuttleVan];

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
    setFormName('in-person');
  };

  const handleOpenSecondOpinionModal = () => {
    if (modalRef.current) modalRef.current.showModal();
    setFormName('second-opinion');
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <section className='medical__services__container'>
      {medicalServices?.map((service) => {
        const { id, title, description, button_info } = service;
        const IconComponent = serviceIcons[id - 1];
        return (
          <div key={id} className='medical__services__card'>
            <div className='medical__services__container__header'>
              <div className='icon__container'>
                <IconComponent />
              </div>
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            {id === 3 ? (
              <div className='book__service__btn__container'>
                <button type='button' className='book__service__btn'>
                  <a href={`tel: ${button_info}`}>Call {button_info}</a>
                </button>
              </div>
            ) : id === 2 ? (
              <div
                className='book__service__btn__container'
                onClick={handleOpenSecondOpinionModal}
              >
                <button type='button' className='book__service__btn'>
                  {button_info}
                </button>
              </div>
            ) : (
              <div
                className='book__service__btn__container'
                onClick={handleOpenModal}
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

export default MedicalService;
