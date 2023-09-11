import './PostTreatmentServices.css';
import { postTreatmentServices, postTreatmentIcons } from '../../utils/Utils';

function PostTreatmentServices() {
  return (
    <section className='medical__services__container'>
      {postTreatmentServices?.map((service) => {
        const { id, title, description, button_info, help_link } = service;
        const IconComponent = postTreatmentIcons[id - 1];
        return (
          <div key={id} className='medical__services__card'>
            <div className='medical__services__container__header'>
              <div className='icon__container'>
                <IconComponent />
              </div>
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            <div className='book__service__btn__container'>
              <button type='button' className='book__service__btn'>
                <a href={help_link} target='_blank'> {button_info}</a>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default PostTreatmentServices;
