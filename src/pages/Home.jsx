import { homeSlider } from '../utils/Utils';
import Hospital from '../components/hospitals/Hospital';
import Services from '../components/services/Services';
import QuickNavigation from '../components/quick_navigation/QuickNavigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Home = () => {

  return (
    <section className='home__container'>
      <div className='card__main'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
        >
          {homeSlider.map((item) => {
            const { id, title, info, image } = item;
            return (
              <SwiperSlide key={id}>
                <article className='card'>
                  <div className='card__body'>
                    <h2>{title}</h2>
                    <p>{info}</p>
                    <button type='button' className='call__us__btn'>
                      <a href='tel: +233308040040'>
                        <span>Call +233308040040</span>
                      </a>
                    </button>
                  </div>
                  <figure className='card__image'>
                    <img src={image} alt={title} />
                  </figure>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <QuickNavigation />
      </div>

      <article className='services'>
        <Services />
      </article>

      <section className='hospitals'>
        <Hospital />
      </section>

    </section>
  );
};

export default Home;
