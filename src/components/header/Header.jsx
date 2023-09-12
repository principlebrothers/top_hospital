import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import { BsSearch } from 'react-icons/bs';
import { ImMenu } from 'react-icons/im';
import { useMediaQuery } from '@mui/material';
import Logo from '../../assets/Logo.png';
import './Header.css';
import MobileMenu from '../mobile_menu/MobileMenu';
import amtcLogo from '../../assets/amtcLogo.png';

const Header = () => {
  const modalRef = useRef(null);
  const isWideScreen = useMediaQuery('(min-width: 1025px)');

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <header>
      <Link className='site__logo' to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      {/* <form className='search__bar'>
        <input
          type='text'
          placeholder='Search for anything'
          className='search__bar__input'
          aria-label='search'
        />
        <button type='submit' className='search__bar__submit '>
          <BsSearch className='search__icon' />
        </button>
      </form> */}
      <figure className='amtc__logo'>
        <img src={amtcLogo} alt='amtc' />
        <figcaption>Powered by Africa Medical Tourism Council</figcaption>
      </figure>
      <>
        {isWideScreen ? null : (
          <button
            type='button'
            className='menu__button'
            onClick={handleOpenModal}
          >
            <ImMenu className='menu__icon' />
          </button>
        )}
      </>
      <MobileMenu modalRef={modalRef} handleCloseModal={handleCloseModal} />
    </header>
  );
};

export default Header;
