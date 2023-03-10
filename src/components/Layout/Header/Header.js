import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { Link } from 'react-router-dom';

import Filler from '../Filler/Filler';

import './Header.css';

// header component with two logos

const Header = () => {

  // destructurize config data

  const { Config } = useContext(GlobalContext);
  const { mainLogo, mainLogoAlt, additionalLogo, additionalLogoAlt } = Config;

  // link on whole header

  return (
    <Link
      to='/'
      className='header-link'
    >

      {/* header with two logos */}

      <header>
        <Filler
          size='small'
        />
        <img
          src={additionalLogo}
          alt={additionalLogoAlt}
          className='additional-logo'
        />
        <Filler />
        <img
          src={mainLogo}
          alt={mainLogoAlt}
          className='main-logo'
        />
        <Filler />
        <img
          src={additionalLogo}
          alt={additionalLogoAlt}
          className='additional-logo'
        />
        <Filler
          size='small'
        />
      </header>
    </Link>
  );
};

export default Header;
