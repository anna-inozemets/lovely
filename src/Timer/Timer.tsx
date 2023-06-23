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
      const startYear = startDate.getFullYear();
      const startMonth = startDate.getMonth();
      const startDay = startDate.getDate();

      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      const currentDay = now.getDate();

      let years = currentYear - startYear;
      let months = currentMonth - startMonth;
      let days = currentDay - startDay;

      if (months <= 0) {
        years -= 1;
        months += 12;
      }

      if (days <= 0) {
        const previousMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 0);

        days += previousMonthDate.getDate();
        months -= 1;
      }

      const hours = Math.floor((distance % millisecondsPerDay) / (1000 * 60 * 60));

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
