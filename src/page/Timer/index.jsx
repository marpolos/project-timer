import React, { useState } from 'react';
import ExpireTimer from '../../component/ExpireTimer';
// import { useTimer } from '../../hooks/useHours';
import { ContainerTimer, PrincipalPage } from './styles';
import { useTimer } from 'react-timer-hook';
import Button from '../../component/Button';

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
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{hours < 10
        ? `0${hours}`
        : hours}</span>:<span>{minutes < 10
        ? `0${minutes}`
        : minutes}</span>:<span>{seconds < 10
        ? `0${seconds}`
        : seconds}</span>
      </div>
      <p>{isRunning ? 'Contando' : 'Pause'}</p>
      <Button name="Start" onClick={start} />
      <Button name="Pause" onClick={pause} />
      <Button name="Restart" onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + +resetTimer);
        restart(time);
      }} />
    </div>
    )
  }
    </ContainerTimer>
  );
}



export default MyTimer;