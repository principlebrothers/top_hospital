import React, { useRef } from 'react';
import { useGetAllSpecialtiesQuery } from '../../api/apiSlice';
import { useCreateAppointmentMutation } from '../../api/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Appointment.css';

const Appointment = ({ handleCloseModal, modalRef }) => {
  const { data = [], isFetching } = useGetAllSpecialtiesQuery();
  const [createAppointment, isLoading] = useCreateAppointmentMutation()


  const form = useRef()

  const handleAppointmentSubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    let formValues = {};

    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    const response = await createAppointment(formValues)
      .unwrap()
      .catch((error) =>
        toast.error('Something went wrong, please try again later!')
    )
    console.log(response)
    if (response) {
      toast.success('Appointment created successfully!');
      form.current.reset();
    }
  };

  return (
    <>
      <dialog ref={modalRef} className='modal'>
        <div className='modal__content'>
          <article className='appointment__form'>
            <h3>Top Hospital In-person appointment Request</h3>
            <p className='instruction__paragraph'>
              Kindly fill the form below to submit an in-person consultation
              request at Top Hospitals
            </p>
            <form ref={form} onSubmit={handleAppointmentSubmission}>
              <p>Appointment Details</p>
              <div className='appointment__form__inputs'>
                <div className='appointment__form__input'>
                  <label htmlFor='specialty'>Specialty*</label>
                  <select name='speciality_id' id='specialty'>
                    {data?.map((item) => {
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
                    Doctor's name (if you have any preference)
                  </label>
                  <input type='text' name='doctors' id='doctor' />
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='date'>Preferred appointment date*</label>
                  <input type='date' name='end_time' id='date' required/>
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='time'>Preferred time*</label>
                  <input type='time' name='start_time' id='time' required/>
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='request'>
                    State your medical concern or request*
                  </label>
                  <input type='text' name='description' id='request' required/>
                </div>
                <div className='appointment__form__input'>
                  <label htmlFor='hospital_number'>
                    Preferred Hospital(if applicable)
                  </label>
                  <input
                    type='text'
                    name='hospital_id'
                    id='hospital_number'
                  />
                </div>
              </div>
              <button
                type='submit'
                className='general__button'
              >
                {'Created'}
              </button>
            </form>
          </article>
          <article className='service__level__container'>
            <div className='services__info__levels'>
              <p>
                <span className='position__number first_place'>1</span>
                <span>Appointment type</span>
              </p>
              <p>
                <span className='position__number second_place'>2</span>
                <span>Appointment Details</span>
              </p>
              <p>
                <span className='position__number third_place'>3</span>
                <span>Patient Details</span>
              </p>
            </div>
            <div className='service__level__buttons'>
              <button
                type='button'
                className='service__level__button'
                onClick={handleCloseModal}
              >
                <span>Back</span>
              </button>
              <button
                type='button'
                className='service__level__button continue__btn'
              >
                <span>Continue</span>
              </button>
            </div>
          </article>
        </div>
      </dialog>
      <ToastContainer />
    </>
  );
};

export default Appointment;
