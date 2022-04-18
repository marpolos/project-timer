import React from 'react';
import { Container, imageEnd } from './styles';

const ExpireTimer = () => {
  return (
    <Container>
      <imageEnd>
        <iframe title="expire timer" allow="fullscreen" frameBorder="0" height="361" src="https://giphy.com/embed/ocrF5ysjq1cs9VthAi/video" width="480">
        </iframe>
      </imageEnd>
      <audio controls autoplay>
      <source src="" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </Container>
  );
}

export default ExpireTimer;