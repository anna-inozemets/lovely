import React, { useRef } from 'react';
import './HeartAnimation.scss';
import gsap, { Power2 } from 'gsap';
import mojs from '@mojs/core';

export const HeartAnimation: React.FC = () => {
  const heartRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonClick = () => {
    const heart = heartRef.current;

    if (heart && heart.classList.contains('active')) {
      heart.classList.remove('active');
    } else if (heart) {
      heart.classList.add('active');

      const tl = gsap.timeline();

      tl
        .to(heart, {
          duration: 0.15, scaleX: 0.4, scaleY: 0.2, ease: Power2.easeOut,
        })
        .to(heart, {
          duration: 0.25, scaleX: 1, scaleY: 1, ease: Power2.easeOut,
        });

      const burst = new mojs.Burst({
        parent: heart,
        count: 10,
        radius: { 0: 80 },
        duration: 1500,
        children: {
          radius: { 15: 0 },
          easing: 'cubic.out',
          degreeShift: 'rand(-50,50)',
        },
      });

      const burst2 = new mojs.Burst({
        parent: heart,
        count: 15,
        radius: { 0: 60 },
        children: {
          shape: 'line',
          stroke: 'white',
          fill: 'none',
          scale: 1,
          scaleX: { 1: 0 },
          easing: 'cubic.out',
          duration: 1000,
          degreeShift: 'rand(-50, 50)',
        },
      });

      const bubbles = new mojs.Burst({
        parent: heart,
        radius: 50,
        count: 5,
        timeline: { delay: 200 },
        children: {
          stroke: 'white',
          fill: 'none',
          scale: 1,
          strokeWidth: { 8: 0 },
          radius: { 0: 'rand(6, 10)' },
          degreeShift: 'rand(-50, 50)',
          duration: 400,
          delay: 'rand(0, 250)',
        },
      });

      const circ_opt = {
        parent: heart,
        radius: { 0: 50 },
        duration: 750,
        shape: 'circle',
        fill: 'none',
        stroke: '#E10B00',
        strokeWidth: 1,
        opacity: { 1: 0 },
      };

      const circ = new mojs.Shape({
        ...circ_opt,
      });

      const circ2 = new mojs.Shape({
        ...circ_opt,
        delay: 100,
      });

      const timeline = new mojs.Timeline();

      timeline.add(circ, circ2);
      tl.restart();
      burst.generate().replay();
      burst2.generate().replay();
      bubbles.generate().replay();
      timeline.replay();
    }
  };

  return (
    <button
      type="button"
      className="header__heart"
      ref={heartRef}
      onClick={handleButtonClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 241.59736 220.05746"
        version="1.0"
        width="100%"
        height="100%"
      >
        <g
          transform="translate(-175.32265,-1696.4765)"
        >
          <path
            className="shape-heart"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            fillRule="evenodd"
            stroke="#fff"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeDasharray="none"
            strokeDashoffset="0"
            d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z"
          />
        </g>
      </svg>

    </button>
  );
};
