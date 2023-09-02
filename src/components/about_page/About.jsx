import africanMedicalLogo from '../../assets/africanMedicalLogo.png';
import './About.css'

const About = () => {
  return (
    <section className='about__page'>
      <h2>About Us</h2>
      <p>
        The Africa Medical Tourism Council (AMTC) welcome you to the forefront
        of healthcare excellence in Ghana, where compassionate care and
        cutting-edge medical expertise converge. Ghana's top hospitals stand as
        beacons of exceptional healthcare, offering a blend of world- class
        facilities, skilled medical professionals, and a commitment to
        delivering unparalleled patient- centric services. Ghana's top hospitals
        stand as beacons of exceptional healthcare, offering a blend of
        world-class facilities, skilled medical professionals, and a commitment
        to delivering unparalleled patient-centric services. This paradigm shift
        heralds a new era where distance is no longer a barrier to world-class
        medical expertise. As these hospitals stand as living examples of what
        can be achieved through the synergy of technology and human compassion,
        they empower Africans to take charge of their health and well-being like
        never before. The journey to optimal healthcare has now been shortened,
        making it truly possible to find <em>"Your Hospital Next Door,"</em>{' '}
        where exceptional care is as close as a click or a call away.
      </p>
        <figure className='poweredby__image__container'>
          <img src={africanMedicalLogo} alt='Africa Medical Tourism Council' />
        <figcaption><span>Powered by:</span>Africa Medical Tourism Council</figcaption>
        </figure>
    </section>
  );
}

export default About