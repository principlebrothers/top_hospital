import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useCreateEnquiryMutation } from '../api/apiSlice';
import { gender } from '../../utils/Utils';

const GeneralEnquiry = () => {
  const form = useRef();
  const [createEnquiry] = useCreateEnquiryMutation();

  const handleEnquirySubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    let formValues = {};

    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    const response = await createEnquiry({ 'enquiry': formValues })
      .unwrap()
      .catch((error) =>
        toast.error(`Error: ${error.data.error}! Please try again later`)
    );

    if (response.data) {
      toast.success('Enquiry created successfully!');
      form.current.reset();
    }
  };

  return (
    <>
      <div className='services__info__left'>
        <h3>Make an Enquiry</h3>
        <div className='appointment_type'>
          <p>
            Kindly fill the form to make an inquiry at any of the top hospitals
            in Ghana
          </p>
          <form
            className='estimate__form'
            ref={form}
            onSubmit={handleEnquirySubmission}
          >
            <div className='estimate__form__input'>
              <label htmlFor='full_name'>Full Name*</label>
              <input type='text' name='name' id='full_name' required />
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
                name='number'
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
              <select name='address' id='gender'>
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
              <label htmlFor='description'>
                State your medical concern or request*
              </label>
              <textarea
                type='text'
                name='concern'
                id='description'
                placeholder='Write description here'
                required
              ></textarea>
            </div>
            <div className='estimate__submit__button'>
              <button type='submit'>{'Submit Request'}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GeneralEnquiry;
