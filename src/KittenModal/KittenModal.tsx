import React, { useState } from 'react';
import './KittenModal.scss';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import PhotoWrong1 from '../images/kitten--false-1.jpeg';
import PhotoWrong2 from '../images/kitten--false-2.jpeg';
import PhotoWrong3 from '../images/kitten--false-3.jpeg';
import PhotoWrong4 from '../images/kitten--false-4.jpeg';
import PhotoWrong5 from '../images/kitten--false-5.jpeg';
import PhotoWrong6 from '../images/kitten--false-6.jpeg';
import PhotoRight from '../images/kitten--right.jpg';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const KittenModal:React.FC = () => {
  const [isRightPhotoClicked, setIsRightPhotoClicked] = useState(false);
  const handleRightClick = () => {
    setIsRightPhotoClicked(true);
    toast.success(
      <div className="notification">
        <p className="notification__text">
          Как по мне других вариантов и быть не могло! Ты самый любимый и милый котеночек ❤️
          Ну разве что Милка смогла бы составить тебе конкуренцию😻
        </p>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
        autoClose: 5000,
      },
    );
  };

  const handleWrongClick = () => {
    toast.error(
      <div className="notification">
        <p className="notification__text">
          Даа, это точно милый котенок, но точно не самый лучший. Попробуй еще раз 😉
        </p>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
        autoClose: 5000,
      },
    );
  };

  const handleCurrentWrongClick = isRightPhotoClicked
    ? () => {}
    : handleWrongClick;

  return (
    <div className="kitten__modal">
      <h3> Найди тут лучшего котенка </h3>
      <div className="kitten__modal-buttons">
        <button type="button" onClick={handleCurrentWrongClick}>
          <img src={PhotoWrong1} alt="Cute kitten" />
        </button>
        <button type="button" onClick={handleCurrentWrongClick}>
          <img src={PhotoWrong2} alt="Cute kitten" />
        </button>
        <button type="button" onClick={handleCurrentWrongClick}>
          <img src={PhotoWrong3} alt="Cute kitten" />
        </button>
        <button type="button" onClick={handleCurrentWrongClick}>
          <img src={PhotoWrong4} alt="Cute kitten" />
        </button>
        <button type="button" onClick={handleCurrentWrongClick}>
          <img src={PhotoWrong5} alt="Cute kitten" />
        </button>
        <button type="button" onClick={handleCurrentWrongClick}>
          <img src={PhotoWrong6} alt="Cute kitten" />
        </button>
        <button
          type="button"
          onClick={handleRightClick}
          className={classNames({ found: isRightPhotoClicked })}
        >
          <img src={PhotoRight} alt="The cutest kitten" />
        </button>
      </div>
    </div>
  );
};
