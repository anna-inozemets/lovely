import React, { useEffect, useState } from 'react';
import './PuzzleModal.scss';

import { toast } from 'react-toastify';
import classNames from 'classnames';
import PuzzlePhoto1 from '../images/puzzle-part-1.jpg';
import PuzzlePhoto2 from '../images/puzzle-part-2.jpg';
import PuzzlePhoto3 from '../images/puzzle-part-3.jpg';
import PuzzlePhoto4 from '../images/puzzle-part-4.jpg';
import PuzzlePhoto5 from '../images/puzzle-part-5.jpg';
import PuzzlePhoto6 from '../images/puzzle-part-6.jpg';
import PuzzlePhoto7 from '../images/puzzle-part-7.jpg';
import PuzzlePhoto8 from '../images/puzzle-part-8.jpg';
import PuzzlePhoto9 from '../images/puzzle-part-9.jpg';
import PuzzlePhoto10 from '../images/puzzle-part-10.jpg';
import PuzzlePhoto11 from '../images/puzzle-part-11.jpg';
import PuzzlePhoto12 from '../images/puzzle-part-12.jpg';
import PuzzlePhotoHidden from '../images/puzzle-part-hidden.jpg';

toast.configure();

export const PuzzleModal: React.FC = () => {
  const [winningBoard] = useState([
    {
      source: PuzzlePhoto1,
      index: 1,
    },
    {
      source: PuzzlePhoto2,
      index: 2,
    },
    {
      source: PuzzlePhoto3,
      index: 3,
    },
    {
      source: PuzzlePhoto4,
      index: 4,
    },
    {
      source: PuzzlePhoto5,
      index: 5,
    },
    {
      source: PuzzlePhoto6,
      index: 6,
    },
    {
      source: PuzzlePhoto7,
      index: 7,
    },
    {
      source: PuzzlePhoto8,
      index: 8,
    },
    {
      source: PuzzlePhoto9,
      index: 9,
    },
    {
      source: PuzzlePhoto10,
      index: 10,
    },
    {
      source: PuzzlePhoto11,
      index: 11,
    },
    {
      source: null,
      index: null,
    },
  ]);
  const [currentBoard, setCurrentBoard] = useState([
    {
      source: PuzzlePhoto6,
      index: 6,
    },
    {
      source: PuzzlePhoto2,
      index: 2,
    },
    {
      source: PuzzlePhoto3,
      index: 3,
    },
    {
      source: PuzzlePhoto4,
      index: 4,
    },
    {
      source: PuzzlePhoto1,
      index: 1,
    },
    {
      source: PuzzlePhoto10,
      index: 10,
    },
    {
      source: PuzzlePhoto7,
      index: 7,
    },
    {
      source: PuzzlePhoto5,
      index: 5,
    },
    {
      source: PuzzlePhoto9,
      index: 9,
    },
    {
      source: PuzzlePhoto8,
      index: 8,
    },
    {
      source: PuzzlePhoto11,
      index: 11,
    },
    {
      source: null,
      index: null,
    },
  ]);
  const [isVictory, setIsVictory] = useState(false);
  const [lastPart, setLastPart] = useState(PuzzlePhotoHidden);

  const checkVictory = () => {
    let currentStatusOfVictory = true;

    for (let i = 0; i < currentBoard.length; i += 1) {
      if (currentBoard[i].index !== winningBoard[i].index) {
        currentStatusOfVictory = false;
        break;
      }
    }

    setIsVictory(currentStatusOfVictory);
  };

  const handleCellClick = (index: number) => {
    const nullIndex = currentBoard.map(item => item.index).indexOf(null);
    const rowDiff = Math.abs(Math.floor(nullIndex / 3) - Math.floor(index / 3));
    const colDiff = Math.abs((nullIndex % 3) - (index % 3));

    if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
      const newBoard = [...currentBoard];

      [newBoard[nullIndex], newBoard[index]] = [newBoard[index], newBoard[nullIndex]];
      setCurrentBoard(newBoard);
    }
  };

  useEffect(() => {
    checkVictory();
  }, [currentBoard]);

  useEffect(() => {
    if (isVictory) {
      setLastPart(PuzzlePhoto12);
      toast(
        <div className="notification">
          <p className="notification__text">
            Вот ты и собрал наш поцелучик,
            предлагаю дополнить нашу небольшую колекцию фото прям сейчас 💋
          </p>
        </div>,
        {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
          autoClose: 7000,
        },
      );
    }
  }, [isVictory]);

  return (
    <div className="puzzle__modal">
      <h3> Что там? </h3>
      <div className={classNames('puzzle__modal-grid', { completed: isVictory })}>
        {currentBoard.map((cell, index) => (
          <button type="button" key={`cell-${cell || 12}`} onClick={() => handleCellClick(index)}>
            <img src={cell.source || lastPart} alt="Part" className={classNames({ completed: isVictory })} />
            <p className={classNames({ invisible: isVictory })}>{cell.index}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
