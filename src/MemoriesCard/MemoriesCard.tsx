import React, { useState } from 'react';
import './MemoriesCard.scss';
import classNames from 'classnames';

type Props = {
  phrase: string,
};

export const MemoriesCard: React.FC<Props> = ({ phrase }) => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const toggleFlippedCard = () => {
    setIsCardFlipped(previousState => !previousState);
  };

  return (
    <button
      type="button"
      className={classNames('memories__part-card', { flipped: isCardFlipped })}
      onClick={toggleFlippedCard}
    >
      <div className="memories__part-card-inner">
        <div className="memories__part-card-front">
        </div>
        <div className="memories__part-card-back">
          <p>
            {phrase}
          </p>
        </div>
      </div>
    </button>
  );
};
