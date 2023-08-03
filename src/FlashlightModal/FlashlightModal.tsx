/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef, useState } from 'react';
import './FlashlightModal.scss';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import PrincessPhoto from '../images/princess__photo.jpg';

export const FlashlightModal: React.FC = () => {
  const highlightElement = document.querySelector('.overlay') as HTMLElement;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWin, setIsWin] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: MouseEvent | TouchEvent,
  ) => {
    e.preventDefault();

    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      let x;
      let y;

      if (e.type === 'mousemove') {
        const event = e as MouseEvent;

        x = event.clientX - containerRect.left;
        y = event.clientY - containerRect.top;
      } else if (e.type === 'touchmove') {
        const event = e as TouchEvent;

        if (event.touches.length > 0) {
          const touch = event.touches[0];

          x = touch.clientX - containerRect.left;
          y = touch.clientY - containerRect.top;
        }
      }

      if (x !== undefined && y !== undefined) {
        setMousePosition({
          x,
          y,
        });
      }
    }
  };

  const handleWin = () => {
    setIsWin(true);
    toast.success(
      <div className="notification">
        <p className="notification__text">
          Поздравляю, котенок! Ты нашел свою принцесску❤️
          Надеюсь, что ни смотря ни на что, твое сердечко всегда будет подсказывать, где я нахожусь😏
        </p>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
        autoClose: 5000,
      },
    );
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchmove', handleMouseMove);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    if (highlightElement) {
      highlightElement.style.background = `radial-gradient(circle 5vmax at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 1) 100%)`;
    }
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="flashlight__modal">
      <h3>
        А теперь время найти свою принцесску!
      </h3>
      <div
        className="flashlight__modal-content"
        ref={containerRef}
      >
        <div className={classNames('overlay', { hidden: isWin })}></div>
        <img src={PrincessPhoto} alt="The best princesses" />
        <button type="button" onClick={handleWin}></button>
      </div>
    </div>
  );
};
