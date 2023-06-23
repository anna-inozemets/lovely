import React, { useEffect } from 'react';
import './Header.scss';
import AOS from 'aos';
import Logo from '../images/logo.svg';
import { HeartAnimation } from '../HeartAnimation';
import 'aos/dist/aos.css';

export const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <header data-aos="fade-down" className="header">
      <div className="header__logo logo">
        <img src={Logo} alt="Brambllee & Burogozzz" />
      </div>
      <HeartAnimation />
    </header>
  );
};
