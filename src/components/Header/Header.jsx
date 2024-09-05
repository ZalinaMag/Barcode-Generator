import React from 'react';
import styles from './Header.module.css'

const Header = ({ icon, text }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headline}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </header>
  );
};

export default Header;
