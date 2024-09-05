import React from 'react';
import SandwichMenuIcon from '../../../assets/label.svg';
import styles from './SandwichMenu.module.css'

const SandwichMenu = () => {
  return (
    <div className={styles.sandwich}>
      <div className={styles.navItem}>
        <img src={SandwichMenuIcon} alt="SandwichMenuIcon" className={styles.sandwichMenuIcon} />
      </div>
    </div>
  );
};

export default SandwichMenu;