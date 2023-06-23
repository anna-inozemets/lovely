import React from 'react';
import './Modal.scss';

type Props = {
  children: React.ReactNode,
};

export const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__content">{children}</div>
    </div>
  );
};
