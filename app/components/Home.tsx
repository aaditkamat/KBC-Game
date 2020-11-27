import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Audio from './Audio';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <Audio />
    </div>
  );
}
