import React from 'react';
import InputsItem from './InputsItem/InputsItem';
import DotsSixVertical from '../../assets/DotsSixVertical.svg';
import Plus from '../../assets/plus.svg';
import styles from './Inputs.module.css';

const inputItems = [
  "Баркод",
  "Сборщик",
  "Артикул",
  "Цвет",
  "Размер",
  "Название",
  "Название поставщика",
  "Срок годности",
  "Страна производства",
  "Бренд",
  "Состав",
  "Производитель",
  "Свободная надпись",
  "ID сборщика",
  "Значки по уходу за одеждой и коды переработки",
];

const Inputs = () => {
  return (
    <div className={styles.inputsList}>
      {inputItems.map((text, index) => (
        <InputsItem key={index} text={text} iconLeft={DotsSixVertical} iconRight={Plus} />
      ))}
    </div>
  );
};

export default Inputs;
