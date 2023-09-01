import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { RiTranslate2 } from 'react-icons/ri';
import { ImMenu } from 'react-icons/im';
import { useMediaQuery } from '@mui/material';
import Logo from '../../assets/Logo.png';

import './Header.css';

const Header = () => {
  const isWideScreen = useMediaQuery('(min-width: 1025px)')

  return (
    <header>
      <Link className='site__logo' to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      <form className='search__bar'>
        <input
          type='text'
          placeholder='Search for anything'
          className='search__bar__input'
          aria-label='search'
        />
        <button type='submit' className='search__bar__submit '>
          <BsSearch className='search__icon' />
        </button>
      </form>
      <form className='language__selector'>
        <RiTranslate2 className='language__selector__icon' />
        <select className='language__selector__select'>
          <option value='en'>English</option>
          <option value='fr'>Français</option>
          <option value='es'>Español</option>
        </select>
      </form>
      <>
        {isWideScreen ? null : (
          <button type='button' className='menu__button'>
            <ImMenu className='menu__icon' />
          </button>
        )}
      </>
    </header>
  );
}

export default Header