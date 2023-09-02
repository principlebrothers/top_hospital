import './Error.css'

const Error = () => {
  return (
    <>
      <section className='page-wrapper'>
        <div className='circles-layer'>
          <div className='circle -white'></div>
          <div className='circle -red'></div>
          <div className='circle -white'></div>
          <div className='circle -red'></div>
        </div>
        <div className='numbers-layer'>
          <div className='number'>4</div>
          <div className='number'>4</div>
          <div className='number'>4</div>
          <div className='number'>4</div>
          <div className='number'>4</div>
          <div className='number'>4</div>
          <div className='number'>4</div>
          <div className='number'>4</div>
          <div className='number -with-shadow'>0</div>
          <div className='number -with-shadow'>0</div>
          <div className='number -with-shadow'>0</div>
          <div className='number -with-shadow'>0</div>
        </div>
        <div className='oops-message'>
          <div className='test'>Unknown URL</div>
          <div>
            <span className='test'>Invalid Route/Link</span>
          </div>
          <a className='button' href='/'>
            Go to Home Page
          </a>
        </div>
      </section>
    </>
  );
}

export default Error