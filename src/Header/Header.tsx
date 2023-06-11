import React from 'react';
import './Header.scss';
import Logo from '../images/logo.svg';
import { HeartAnimation } from '../HeartAnimation';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Brambllee & Burogozzz" />
      </div>
      <HeartAnimation />
    </header>
  );
};
