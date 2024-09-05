import React from 'react';
import Title from './Title/Title.jsx';
import Inputs from '../Inputs/Inputs.jsx';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.settings}>
          <div className={styles.inputs}>
            <Title text="Поля" />
            <Inputs />
          </div>
          <div className={styles.list}></div>
        </div>
        <div className={styles.previewBlock}>
          <Title text="Предпросмотр" />
          <div className={styles.preview}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
