import React, { useEffect, useRef, useState } from 'react';
import './FlashlightModal.scss';
import PrincessPhoto from '../images/princess.jpg';

export const FlashlightModal: React.FC = () => {
  const highlightElement = document.querySelector('.overlay') as HTMLElement;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (e.type === 'mousemove') {
      const event = e as React.MouseEvent<HTMLDivElement, MouseEvent>;
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (containerRect) {
        setMousePosition({
          x: event.clientX - containerRect.left,
          y: event.clientY - containerRect.top,
        });
      }
    } else if (e.type === 'touchmove') {
      const event = e as React.TouchEvent<HTMLDivElement>;
      const touch = event.touches[0];
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (containerRect) {
        setMousePosition({
          x: touch.clientX - containerRect.left,
          y: touch.clientY - containerRect.top,
        });
      }
    }
  };

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
        onMouseMove={(event) => handleMouseMove(event)}
        ref={containerRef}
      >
        <div className="overlay"></div>
        <img src={PrincessPhoto} alt="" />
      </div>
    </div>
  );
};
