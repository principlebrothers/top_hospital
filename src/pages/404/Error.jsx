import './Error.css'

const Error = () => {
  return (
    <>
      <section class='page-wrapper'>
        <div class='circles-layer'>
          <div class='circle -white'></div>
          <div class='circle -red'></div>
          <div class='circle -white'></div>
          <div class='circle -red'></div>
        </div>
        <div class='numbers-layer'>
          <div class='number'>4</div>
          <div class='number'>4</div>
          <div class='number'>4</div>
          <div class='number'>4</div>
          <div class='number'>4</div>
          <div class='number'>4</div>
          <div class='number'>4</div>
          <div class='number'>4</div>
          <div class='number -with-shadow'>0</div>
          <div class='number -with-shadow'>0</div>
          <div class='number -with-shadow'>0</div>
          <div class='number -with-shadow'>0</div>
        </div>
        <div class='oops-message'>
          <div class='test'>Unknown URL</div>
          <div>
            <span class='test'>Invalid Route/Link</span>
          </div>
          <a class='button' href='/'>
            Go to Home Page
          </a>
        </div>
      </section>
    </>
  );
}

export default Error