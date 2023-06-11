import React, { useEffect, useState } from 'react';
import './Timer.scss';

type Props = {
  startDate: Date,
};

export const Timer: React.FC<Props> = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = now.getTime() - startDate.getTime();

      const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((distance / (1000 * 60 * 60 * 24 * 30)) % 12);
      const days = Math.floor((distance / (1000 * 60 * 60 * 24)) % 30);
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);

      setTimeElapsed(`${years}y ${months}m ${days}d ${hours}h`);
    }, 10);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="timer">
      <h3>{timeElapsed}</h3>
    </div>
  );
};
