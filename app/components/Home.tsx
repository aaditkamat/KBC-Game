import React from 'react';
import { Container } from 'react-bootstrap';

import Audio from './Audio';
import StartQuizButton from './StartQuizButton';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <Container className={styles.container} data-tid="container">
      <Audio />
      <StartQuizButton />
    </Container>
  );
}
