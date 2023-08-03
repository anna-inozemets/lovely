import React, { useEffect } from 'react';
import './Memories.scss';
import AOS from 'aos';
import Chuchundryk from '../images/chuchundryk.jpeg';
import Chibupelya from '../images/chibupelya.jpeg';
import { MemoriesCards } from '../MemoriesCards';
import 'aos/dist/aos.css';

const chuchudrykMemories = [
  {
    id: 'chuchundryk1',
    phrase: '. . . как первый раз тебя увидел, подумал какая красивая',
  },
  {
    id: 'chuchundryk2',
    phrase: '. . . как первый раз танцевали медляк на дискотеке,это было ахуенно',
  },
  {
    id: 'chuchundryk3',
    phrase: '. . . как в итоге пошли гулять в двоем, начали встречаться и поцеловались первый раз',
  },
  {
    id: 'chuchundryk4',
    phrase: '. . . как мы смотрели ужастики и я тебя постоянно пугал - так нравится это делать',
  },
  {
    id: 'chuchundryk5',
    phrase: '. . . какой вкусный вишневый пирог ты мне приготовила',
  },
  {
    id: 'chuchundryk6',
    phrase: '. . . наше общение в дискорде, и кривляние друг-другу на камеру',
  },
];

const chibupelyaMemories = [
  {
    id: 'chibupelya1',
    phrase: '. . . как гуляли до утра и ты обнимал меня, чтобы мне было теплей и накрывал меня своей кофтой',
  },
  {
    id: 'chibupelya2',
    phrase: '. . . как мы делали масочки, дурачились и наслаждались временем с друг другом',
  },
  {
    id: 'chibupelya3',
    phrase: '. . . как ты уснул у меня в комнате и сквозь сон говорил, что никуда идти не хочешь',
  },
  {
    id: 'chibupelya4',
    phrase: '. . . как праздновали твое первое день рождения в отношениях и наши поцелуи тогда',
  },
  {
    id: 'chibupelya5',
    phrase: '. . . как объедались вкусностями и смотрели фильмы, каждый раз - неповторимо',
  },
  {
    id: 'chibupelya6',
    phrase: '. . . как ты мило будил меня поцелуем в носик с цветочками',
  },
];

export const Memories:React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <section className="section memories">
      <h2 className="memories__title">
        Помню . . .
      </h2>
      <div className="memories__part">
        <div className="memories__part-photo">
          <img src={Chuchundryk} alt="Chuchundryk's" />
        </div>
        <MemoriesCards memories={chuchudrykMemories} />
      </div>
      <div className="memories__part">
        <div className="memories__part-photo">
          <img src={Chibupelya} alt="Chuchundryk's" />
        </div>
        <MemoriesCards memories={chibupelyaMemories} />
      </div>
    </section>
  );
};
