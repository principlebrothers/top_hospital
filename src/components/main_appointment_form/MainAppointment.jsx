import { useRef } from 'react';
import {
  useCreateAppointmentMutation,
  useGetTopHospitalsQuery,
  useGetServicesQuery,
} from '../api/apiSlice';
import { gender } from '../../utils/Utils';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import '../quick__nav_form/QuickNavForm.css';

const MainAppointment = ({ handleCloseModal, modalRef }) => {
  const { data: services = [] } = useGetServicesQuery();
  const { data: hospitals = [] } = useGetTopHospitalsQuery();
  const [createAppointment] = useCreateAppointmentMutation();
  const form = useRef();

  const allHospital = hospitals?.data; // The data contains all registered hospitals

  const handleAppointmentSubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    let formValues = {};

    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    const response = await createAppointment({ appointment: formValues })
      .unwrap()
      .catch(() =>
        toast.error('Something went wrong, please try again later!')
      );
    if (response) {
      toast.success('Appointment created successfully!');
      form.current.reset();
    }
  };
  return (
    <>
      <dialog
        ref={modalRef}
        className='modal animate__animated animate__fadeInLeft'
      >
        <article className='appointment__form'>
          <h3>In-person appointment Request</h3>
          <p className='instruction__paragraph'>
            Kindly fill the form below to submit an in-person consultation
            request at Top Hospitals
          </p>
          <form ref={form} onSubmit={handleAppointmentSubmission}>
            <p>Appointment Details</p>
            <div className='appointment__form__inputs'>
              <article className='appointment__form__inputs__left'>
                <div className='appointment__form__input'>
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
                <div className='appointment__form__input'>
                  <label htmlFor='doctor'>
                    Doctor&lsquo;s name (if you have any preference)
                  </label>
                  <input type='text' name='doctors' id='doctor' />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='date'>Preferred appointment date*</label>
                  <input type='date' name='end_time' id='date' required />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='time'>Preferred time*</label>
                  <input type='time' name='start_time' id='time' required />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='request'>
                    State your medical concern or request*
                  </label>
                  <input type='text' name='description' id='request' required />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='hospital_number'>
                    Preferred Hospital(if applicable)
                  </label>
                  <select name='hospital_id' id='hospital_number'>
                    {allHospital?.map((item) => {
                      const { id, name } = item.attributes;
                      return (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </article>
              <article className='appointment__form__inputs__right'>
                <div className='appointment__form__input'>
                  <label htmlFor='full_name'>Full Name*</label>
                  <input type='text' name='full_name' id='full_name' required />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='email'>Email*</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='example@gmail.com'
                    required
                  />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='phone_number'>Phone Number*</label>
                  <input
                    type='tel'
                    name='phone_number'
                    id='phone_number'
                    placeholder='+233500000000'
                    required
                  />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='country'>Nationality*</label>
                  <input type='text' name='nationality' id='country' required />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='date'>Date of Birth*</label>
                  <input type='date' name='dob' id='date' required />
                </div>
                <div className='appointment__form__input'>
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
              </article>
            </div>
            <div className='grouped__form__buttons'>
              <button type='submit'>Submit Request</button>
              <button type='button' onClick={handleCloseModal}>
                Close Form
              </button>
            </div>
          </form>
        </article>
      </dialog>
    </>
  );
};

MainAppointment.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default MainAppointment;
