import React, { useState } from 'react';
import './MessageModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeCircleCheck, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import { Modal } from '../Modal';
import { handleScrollWithModal } from '../utils/helpers';

export const MessageModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRoot = document.getElementById('modal__root--message');

  const handleMessageButton = () => {
    setShowModal(true);
    handleScrollWithModal();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    handleScrollWithModal();
  };

  return (
    <>
      <button type="button" className="message__button" onClick={handleMessageButton}>
        <FontAwesomeIcon icon={faEnvelope} size="xl" className="message__icon" />
      </button>
      {showModal && modalRoot && (
        ReactDOM.createPortal(
          <Modal>
            <h2>
              С Днем Рождения, котенок!
            </h2>
            <p>
              Да-да, сегодня уже не твой день рождение. Но ты всегда говорил, что нам все по силу,
              по-этому давай представим, что сегодня твой праздник.
            </p>
            <p>
              И так котенок, принимай мои поздравления:
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHandPointRight} />
                <p>
                  Первое, и самое основное, я желаю тебе счастья и успехов. Ты такой талантливый,
                  умный и что самое главное солнечный. Ты всегда даешь мне такую супер сильную
                  поддержку, что у меня нет ни единого сомнения, что в тебе кроется супер сила.
                  По-этому, пусть щепотка счастья и доля успеха прокладывают тебе путь к твоей
                  желанной жизни!
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faHandPointRight} />
                <p>
                  Все почему то желают любви. наверное и мне стоит это сделать. Скажу кратко -
                  желаю тебе себя. Обещаю любить, кормить и бесить!
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faHandPointRight} />
                <p>
                  Да, да. Ты прочитал правильно - именно бесить. Я просто не могу иначе.
                  И как мы уже выяснили 10 см, 100 м или же 1000 км - не важно, я делаю это
                  качественно и быстро. Тому терпи, терпець тебе шліфує
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faHandPointRight} />
                <p>
                  Я - то, что делает тебя счастливым. И если ты подумал, что речь идет о той
                  блондиночке, которая приходит во снах, то нет. Это те зелененькие (и не только)
                  купюрки в твоем кошельке. Пусть в твоем кармане всегда будет слышен шелест купюр,
                  а не звон монет (хотя темщики и на них поднимались)
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faHandPointRight} />
                <p>
                  Самое банальное и глобальное, но такое важное - пусть все твои мечты исполняются
                  так быстро, что твоя корзинка (та самая - по мелочи), будет всегда пустой,
                  ибо все что там есть или должно быть - было уже у тебя в ручках!
                </p>
              </li>
            </ul>
            <h3>
              Люблю, целую, обнимаю. И пусть каждый твой день будет как праздник!
            </h3>
            <button onClick={handleCloseModal} type="button" className="close">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
            </button>
          </Modal>,
          modalRoot,
        )
      )}
      <div id="modal__root--message"></div>
    </>
  );
};
