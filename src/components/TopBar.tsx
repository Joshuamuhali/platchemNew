import React from 'react';
import { Phone, Mail } from 'lucide-react';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <Phone className="h-4 w-4" />
            <span>+260 767 771 006 / +260 969 999 222</span>
          </div>
          <div className={styles.contactItem}>
            <Mail className="h-4 w-4" />
            <span>platchem@platchemgroup.com</span>
          </div>
        </div>
        <div className={styles.location}>
          <span className={styles.locationText}>Lusaka:</span>
          <span>Plot No.10, Kawama Road, Woodlands</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
