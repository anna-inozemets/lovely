import React, { useState } from 'react';
import './Footer.scss';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../images/logo.svg';
import { Timer } from '../Timer';
import { Modal } from '../Modal';
import ModalPhoto from '../images/kill-you.jpg';
import 'react-toastify/dist/ReactToastify.css';
import NotificationPhoto from '../images/notification.jpg';

toast.configure();

export const Footer: React.FC = () => {
  const startDate = new Date('2021-06-28');
  const [showModal, setShowModal] = useState(false);
  const modalRoot = document.getElementById('modal__root');

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    toast(
      <div className="notification">
        <img
          className="notification__image"
          src={NotificationPhoto}
          alt="You stay alive!"
        />
        <p className="notification__text">Вы этого избежали ↑</p>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
        autoClose: 7000,
      },
    );
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
        <ToastContainer />
        {showModal && modalRoot && (
          ReactDOM.createPortal(
            <Modal>
              <img src={ModalPhoto} alt="We will kill you!" />
              <h3>Ваша заявка принята, мы вас убьем &#128524;</h3>
              <button
                onClick={handleCloseModal}
                type="button"
              >
                Отменить заявку
              </button>
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
