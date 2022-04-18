import React from 'react';
import CountTimer from '../../component/CountTimer';
import InputTimer from '../../component/InputTimer';
import ExpireTimer from '../../component/ExpireTimer';
// import { useTimer } from '../../hooks/useHours';
import { ContainerTimer, PrincipalPage } from './styles';
import { useTimer } from 'react-timer-hook';

/* const Timer = () => {
  const { isActive, count  } = useTimer();
  return (
    <PrincipalPage>
      <h1> Timer </h1>
      <ContainerTimer>
      {
        count <= 0
        ? <ExpireTimer />
        : isActive ?  <CountTimer /> : <InputTimer />
      }
      </ContainerTimer>
    </PrincipalPage>
  );
}

export default Timer; */

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}



export default MyTimer;