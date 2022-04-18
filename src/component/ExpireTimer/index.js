import React from 'react';
import { Container, ImageEnd } from './styles';

const ExpireTimer = () => {
  return (
    <Container>
      <ImageEnd>
        <iframe title="expire timer" allow="fullscreen" frameBorder="0" height="361" src="https://giphy.com/embed/ocrF5ysjq1cs9VthAi/video" width="480">
        </iframe>
      </ImageEnd>
      <audio autoplay>
      <source src="" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </Container>
  );
}

export default ExpireTimer;