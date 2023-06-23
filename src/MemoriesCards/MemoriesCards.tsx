import React from 'react';
import './MemoriesCards.scss';
import { MemoriesCard } from '../MemoriesCard';

type Props = {
  memories: {id: string, phrase: string}[]
};

export const MemoriesCards: React.FC<Props> = ({ memories }) => {
  return (
    <div className="memories__part-cards">
      {memories.map(memory => (
        <MemoriesCard key={memory.id} phrase={memory.phrase} />
      ))}
    </div>
  );
};
