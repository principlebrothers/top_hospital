import { useRef } from 'react';
import './TreatmentCost.css';
import { useRequestTreatmentCostMutation } from '../api/apiSlice';
import { toast } from 'react-toastify';
import { gender } from '../../utils/Utils';

const TreatmentCost = () => {
  const form = useRef();
  const [requestTreatmentCost] = useRequestTreatmentCostMutation();

  const handleTreatmentCostSubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    let formValues = {};

    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    const response = await requestTreatmentCost({ 'treatment_cost': formValues })
      .unwrap()
      .catch(() =>
        toast.error('Something went wrong, please try again later!')
    );

    if (response) {
      toast.success('Treatment cost request submitted successfully!');
      form.current.reset();
    }
  };

  return (
    <>
      <div className='services__info__left'>
        <h3>Get A Free Estimated Cost</h3>
        <div className='appointment_type'>
          <p>
            Kindly fill the form below to get a cost estimate & medical opinion
            at Top Hospitals
          </p>
          <form className='estimate__form' ref={form} onSubmit={handleTreatmentCostSubmission}>
            <div className='estimate__form__input'>
              <label htmlFor='full_name'>Full Name*</label>
              <input type='text' name='full_name' id='full_name' required />
            </div>
            <div className='estimate__form__input'>
              <label htmlFor='email'>Email*</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='example@gmail.com'
                required
              />
            </div>
            <div className='estimate__form__input'>
              <label htmlFor='phone_number'>Phone Number*</label>
              <input
                type='tel'
                name='phone_number'
                id='phone_number'
                placeholder='+233500000000'
                required
              />
            </div>
            <div className='estimate__form__input'>
              <label htmlFor='country'>Nationality*</label>
              <input type='text' name='nationality' id='country' required />
            </div>
            <div className='estimate__form__input'>
              <label htmlFor='gender'>Gender*</label>
              <select name='gender' id='gender'>
                {gender?.map((item) => {
                  const { id, gender } = item;
                  return (
                    <option key={id} value={id}>
                      {gender}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='estimate__form__input'>
              <label htmlFor='medical_concern'>medical concern*</label>
              <input
                type='text'
                name='medical_concern'
                id='medical_concern'
                placeholder='medical concern'
                required
              />
            </div>
            <div className='estimate__form__input'>
              <label htmlFor='uploaded_file'>
                Recent medical reports(if any)
              </label>
              <input type='file' name='uploaded__file' id='uploaded_file' />
            </div>
            <div className='estimate__form__input'>
              <label htmlFor='description'>
                State your medical concern or request*
              </label>
              <textarea
                type='text'
                name='description'
                id='description'
                placeholder='Write description here'
                required
              ></textarea>
            </div>
            <div className='estimate__submit__button'>
              <button type='submit'>
                {'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='services__info__levels treatment__levels'>
        <p>
          <span className='position__number first_place'>1</span>
          <span>Cost Estimate Details</span>
        </p>
        {/* <p>
          <span className='position__number third_place'>2</span>
          <span>Patient Details</span>
        </p> */}
      </div>
    </>
  );
};

export default TreatmentCost;
