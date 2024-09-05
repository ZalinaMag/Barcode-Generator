import React from 'react';
import styles from './Title.module.css'

const Title = ({ text }) => {
  return (
    <header className={styles.header}>
      {text}
    </header>
  );
};

export default Title;