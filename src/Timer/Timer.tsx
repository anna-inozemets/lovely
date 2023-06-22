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

      const millisecondsPerDay = 24 * 60 * 60 * 1000;
      const days = Math.floor(distance / millisecondsPerDay);
      const years = Math.floor(days / 365);
      const months = Math.floor((days % 365) / 30);
      const remainingDays = Math.floor((days % 365) % 30);
      const hours = Math.floor((distance % millisecondsPerDay) / (1000 * 60 * 60));

      setTimeElapsed(`${years}y ${months}m ${remainingDays}d ${hours}h`);
    }, 10);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="timer">
      <h3>{timeElapsed}</h3>
    </div>
  );
};
