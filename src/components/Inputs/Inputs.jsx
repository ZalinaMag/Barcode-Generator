import React from 'react';
import InputsItem from './InputsItem/InputsItem';
import DotsSixVertical from '../../assets/DotsSixVertical.svg';
import Plus from '../../assets/plus.svg';
import styles from './Inputs.module.css';

const Inputs = () => {
  return (
    <div className={styles.inputsList}>
      <InputsItem
        text="Баркод"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Сборщик"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Артикул"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Цвет"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Размер"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Название"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Название поставщика"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Срок годности"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Страна производства"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Бренд"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Состав"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Производитель"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Свободная надпись"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="ID сборщика"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
      <InputsItem
        text="Значки по уходу за одеждой и коды переработки"
        iconLeft={DotsSixVertical}
        iconRight={Plus}
      />
    </div>
  );
};

export default Inputs;
