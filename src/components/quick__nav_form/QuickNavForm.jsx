import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import './QuickNavForm.css';
import { gender } from '../../utils/Utils';
import { selectedService } from '../../utils/Utils';
import {
  useGetTopHospitalsQuery,
  useGetServicesQuery,
  useCreateAppointmentMutation,
  useRequestSecondOpinionMutation,
} from '../api/apiSlice';

const QuickNavForm = ({ handleCloseModal, modalRef, formName }) => {
  const [createAppointment] = useCreateAppointmentMutation();
  const [requestSecondOpinion] = useRequestSecondOpinionMutation();
  const { data: services = [] } = useGetServicesQuery();
  const { data = [] } = useGetTopHospitalsQuery();
  const form = useRef();

  const hostpitallist = data?.data; // The data contains all registered hospitals

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    let formValues = {};

    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    if (formName === 'in-person') {
      const response = await createAppointment({ appointment: formValues })
        .unwrap()
        .catch(() =>
          toast.error('Something went wrong, please try again later!')
        );
      if (response) {
        toast.success('Appointment created successfully!');
        form.current.reset();
      }
    }

    response = await requestSecondOpinion({ second_opinion: formValues })
      .unwrap()
      .catch((error) =>
        toast.error(`Something went wrong. ERROR: ${error.data.error}. Please try again later!`)
      );

    if (response.data) {
      toast.success('Treatment cost request submitted successfully!');
      form.current.reset();
    }
  };

  return (
    <>
      <dialog ref={modalRef} className='modal'>
        <div className='services__info__left'>
          {formName === 'in-person' ? (
            <h3>In-person Consultation Form</h3>
          ) : (
            <h3>Second Medical Opinion Form</h3>
          )}
          <div className='appointment_type'>
            <p>
              Kindly fill the form below to{' '}
              {formName === 'in-person'
                ? 'book in-person appointment with'
                : 'get a second opinion from'}{' '}
              your preferred top hospital or specialist.
            </p>
            <form
              className='estimate__form'
              ref={form}
              onSubmit={handleFormSubmission}
            >
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
                <label htmlFor='speciality'>Speciality*</label>
                <select name='speciality_id' id='speciality'>
                  {services?.map((item) => {
                    const { id, name } = item;
                    return (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    );
                  })}
                </select>
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
                <label htmlFor='preferred_hospital'>Preferred Hospital*</label>
                <select name='hospital_id' id='preferred_hospital'>
                  {hostpitallist?.map((item) => {
                    const { id, name } = item.attributes;
                    return (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='estimate__form__input'>
                <label htmlFor='purpose'>Choose Service*</label>
                <select name='purpose' id='purpose' required>
                  {selectedService?.map((item) => {
                    const { id, title } = item;
                    return (
                      <option key={id} value={title}>
                        {title}
                      </option>
                    );
                  })}
                </select>
              </div>
              {formName === 'in-person' ? (
                <>
                  <div className='estimate__form__input'>
                    <label htmlFor='date'>Preferred appointment date*</label>
                    <input type='date' name='end_time' id='date' required />
                  </div>
                  <div className='estimate__form__input'>
                    <label htmlFor='time'>Preferred time*</label>
                    <input type='time' name='start_time' id='time' required />
                  </div>
                  <div className='estimate__form__input'>
                    <label htmlFor='date'>Date of Birth*</label>
                    <input type='date' name='dob' id='date' required />
                  </div>
                </>
              ) : (
                <>
                  <div className='estimate__form__input'>
                    <label htmlFor='uploaded_file'>
                      Recent medical reports(if any)
                    </label>
                    <input
                      type='file'
                      name='uploaded__file'
                      id='uploaded_file'
                    />
                  </div>
                </>
              )}
              <div className='estimate__form__input'>
                <label htmlFor='description'>
                  Provide request details (if applicable)*
                </label>
                <textarea
                  type='text'
                  name='description'
                  id='description'
                  placeholder='Write details of the chosen service here'
                  required
                ></textarea>
              </div>
              <div className='grouped__form__buttons'>
                <button type='submit'>Submit Request</button>
                <button type='button' onClick={handleCloseModal}>
                  Close Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

QuickNavForm.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default QuickNavForm;
