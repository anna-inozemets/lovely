import React, { useState } from 'react';
import './Cloud.scss';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../Modal';
import { handleScrollWithModal } from '../utils/helpers';

type Props = {
  classNamePart: string,
};

export const Cloud:React.FC<Props> = ({ classNamePart, children }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRoot = document.getElementById(`modal__root--${classNamePart}`);

  const handleClick = () => {
    setShowModal(true);
    handleScrollWithModal();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    handleScrollWithModal();
  };

  return (
    <>
      <button type="button" className={`cloud__button cloud__button--${classNamePart}`} onClick={handleClick}>
        <FontAwesomeIcon
          icon={faCloud}
          size="2xl"
          className={`cloud__button__icon cloud__button__icon--${classNamePart}`}
        />
      </button>
      {showModal && modalRoot && (
        ReactDOM.createPortal(
          <Modal>
            {children}
            <button onClick={handleCloseModal} type="button" className="close">
              Я все сделаль!
            </button>
          </Modal>,
          modalRoot,
        )
      )}
      <div id={`modal__root--${classNamePart}`}></div>
    </>
  );
};
