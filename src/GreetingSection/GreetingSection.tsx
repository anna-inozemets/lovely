import React, { useEffect, useRef, useState } from 'react';
import './GreetingSection.scss';
import classNames from 'classnames';
import { Cloud } from '../Cloud';
import { KittenModal } from '../KittenModal';
import { PuzzleModal } from '../PuzzleModal';
import { FlashlightModal } from '../FlashlightModal';

export const GreetingSection: React.FC = () => {
  const [showBlock, setShowBlock] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBlock(true);
    }, 2500);

    if (blockRef.current) {
      const blockHeight = blockRef.current?.scrollHeight;

      blockRef.current.style.height = `${blockHeight}px`;
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="section greeting">
      <div className={classNames('greeting__title', { 'is-visible': showBlock })} ref={blockRef}>
        <h1 className="greeting__title-text">
          Я очень дорожу тобой, и где бы мы не находились ты самый близкий человек!
        </h1>
      </div>
      <Cloud classNamePart="kitten"><KittenModal /></Cloud>
      <Cloud classNamePart="puzzle"><PuzzleModal /></Cloud>
      <Cloud classNamePart="flashlight"><FlashlightModal /></Cloud>
    </section>
  );
};
