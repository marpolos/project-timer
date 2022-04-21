import React from 'react';
import { Container, ImageEnd } from './styles';
import audio from '../../audio/square_theme.ogg';

const ExpireTimer = () => {
  return (
    <Container>
      <ImageEnd>
        <iframe title="expire timer" allow="fullscreen" autoplay="true" frameBorder="0" height="361" src="https://giphy.com/embed/ocrF5ysjq1cs9VthAi/video" width="480">
        </iframe>
      </ImageEnd>
      <audio autoplay="true" controls loop>
      <source src={ audio } type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      {/* <audio id="player" src={ audio } loop autoplay="true" type="audio/ogg"></audio>
      <div> 
      <button onclick={ () => document.getElementById('player').play() }>Play</button> 
      <button onclick={ () => document.getElementById('player').pause() }>Pause</button>  
      </div> */}

    </Container>
  );
}

export default ExpireTimer;