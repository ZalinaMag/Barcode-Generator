import React from 'react';
import SandwichMenu from './SandwichMenu/SandwichMenu';
import Profile from './Profile/Profile';
import NavStack from './NavStack/NavStack';
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SandwichMenu />
      <Profile />
      <NavStack />
    </div>
  );
};

export default Sidebar;
