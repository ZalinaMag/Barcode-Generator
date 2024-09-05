import React from 'react';
import styles from './InputsItem.module.css';

const InputsItem = ({ text, iconLeft, iconRight }) => {
  return (
    <div className={styles.fieldsItem}>
      <span className={styles.icon}>
        <img src={iconLeft} alt="iconLeft" />
      </span>
      <span className={styles.text}>{text}</span>
      <span className={styles.iconPlus}>
        <img src={iconRight} alt="iconRight" />
      </span>
    </div>
  );
};

export default InputsItem;