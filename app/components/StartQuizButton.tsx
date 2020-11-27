/* eslint-disable no-console */
import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './StartQuizButton.css';

export default function StartQuizButton(): JSX.Element {
  return (
    <Button className={styles.button} variant="primary" size="lg">
      {' '}
      Start Quiz{' '}
    </Button>
  );
}
