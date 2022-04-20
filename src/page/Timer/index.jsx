import React, { useState } from 'react';
import ExpireTimer from '../../component/ExpireTimer';
// import { useTimer } from '../../hooks/useHours';
import { ButtonsSection, ContainerTimer, SpanTime, DisplayTimer } from './styles';
import { useTimer } from 'react-timer-hook';
import Button from '../../component/Button';
import audio from '../../audio/spongeBob_songs.ogg';

function MyTimer({ expiryTimestamp, resetTimer }) {
  const [expire, setExpire] = useState(false);
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => setExpire(true) });

  return (
    <ContainerTimer>
      {
        expire
        ? <ExpireTimer />
        : (
    <div>
      <DisplayTimer>
        <SpanTime>{hours < 10
        ? `0${hours}`
        : hours}</SpanTime>
        <SpanTime>:</SpanTime>
        <SpanTime>{minutes < 10
        ? `0${minutes}`
        : minutes}</SpanTime>
        <SpanTime>:</SpanTime>
        <SpanTime>{seconds < 10
        ? `0${seconds}`
        : seconds}</SpanTime>
      </DisplayTimer>

      <audio controls autoplay="true" loop>
      <source src={ audio } type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      
      <p>{isRunning ? 'Contando' : 'Pause'}</p>
      <ButtonsSection>
      <Button name="Start" onClick={start} />
      <Button name="Pause" onClick={pause} />
      <Button name="Restart" onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + +resetTimer);
        restart(time);
      }} />
      </ButtonsSection>
    </div>
    )
  }
    </ContainerTimer>
  );
}



export default MyTimer;