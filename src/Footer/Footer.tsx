import React, { useState } from 'react';
import './Footer.scss';
import ReactDOM from 'react-dom';
import Logo from '../images/logo.svg';
import { Timer } from '../Timer';
import { Modal } from '../Modal';
import ModalPhoto from '../images/kill-you.jpg';

export const Footer: React.FC = () => {
  const startDate = new Date('2021-06-28');
  const [showModal, setShowModal] = useState(false);
  const modalRoot = document.getElementById('modal__root');

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="footer">
      <div className="footer__timer-wrapper">
        <Timer startDate={startDate} />
        <button
          type="button"
          className="footer__timer-wrapper-button"
          onClick={handleClick}
        >
          Остановить таймер
        </button>
        {showModal && modalRoot && (
          ReactDOM.createPortal(
            <Modal>
              <button onClick={handleCloseModal} type="button">Close Modal</button>
              <img src={ModalPhoto} alt="We will kill you!" />
              <h3>Мы вас убьем &#128524;</h3>
            </Modal>,
            modalRoot,
          )
        )}
        <div id="modal__root"></div>
      </div>
      <div className="footer__logo logo">
        <img src={Logo} alt="Brambllee & Burogozzz" />
      </div>
    </footer>
  );
};
