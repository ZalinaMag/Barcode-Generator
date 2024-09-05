import React from 'react';
import ProfileIcon from '../../../assets/profile.svg';
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.navItem}>
        <img src={ProfileIcon} alt="Profile" />
      </div>
    </div>
  );
};

export default Profile;