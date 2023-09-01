import './TreatmentCost.css';

const TreatmentCost = () => {
  return (
    <>
      <div className='services__info__left'>
        <h3>Get A Free Estimated Cost</h3>
        <div className='appointment_type'>
          <p>
            Kindly fill the form below to get a cost estimate & medical opinion
            at Top Hospitals
          </p>
          <form className='estimate__form'>
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
          </form>
        </div>
      </div>
      <div className='services__info__levels treatment__levels'>
        <p>
          <span className='position__number first_place'>1</span>
          <span>Cost Estimate Details</span>
        </p>
        <p>
          <span className='position__number third_place'>2</span>
          <span>Patient Details</span>
        </p>
      </div>
    </>
  );
}

export default TreatmentCost