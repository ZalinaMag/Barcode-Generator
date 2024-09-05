import React from 'react';
import MenuIcon1 from '../../../assets/icon1.svg';
import MenuIcon2 from '../../../assets/icon2.svg';
import MenuIcon3 from '../../../assets/icon3.svg';
import MenuIcon4 from '../../../assets/icon4.svg';
import MenuIcon5 from '../../../assets/icon5.svg';
import MenuIcon6 from '../../../assets/icon6.svg';
import MenuIcon7 from '../../../assets/icon7.svg';
import MenuIcon8 from '../../../assets/icon8.svg';
import styles from './NavStack.module.css';

const iconList = [
  { src: MenuIcon1, alt: 'Icon1' },
  { src: MenuIcon2, alt: 'Icon2' },
  { src: MenuIcon3, alt: 'Icon3' },
  { src: MenuIcon4, alt: 'Icon4' },
  { src: MenuIcon5, alt: 'Icon5' },
  { src: MenuIcon6, alt: 'Icon6' },
  { src: MenuIcon7, alt: 'Icon7' },
  { src: MenuIcon8, alt: 'Icon8' }
];

const Navstack = () => {
  return (
    <div className={styles.navstack}>
      {iconList.map((icon, index) => (
        <div key={index} className={styles.navItem}>
          <div className={styles.icon}>
            <img src={icon.src} alt={icon.alt} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navstack;
