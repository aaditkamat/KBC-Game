/* eslint-disable no-console */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Audio.css';

function onClick(event: React.MouseEvent<SVGSVGElement, MouseEvent>): void {
  console.log(event.target);
}

export default function Audio(): JSX.Element {
  return (
    <div className={styles.audio}>
      <FontAwesomeIcon size="3x" icon={faVolumeUp} onClick={onClick} />
      <audio controls src="../resources/sounds/KBC_Intro.mp3">
        <track kind="captions" />
      </audio>
    </div>
  );
}
