import React, { useState } from 'react';
import MyTimer from '../Timer';
import { Container } from './styles';

const TimerInsert = () => {
  const [timer, setTimer] = useState(false);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    return (
      <div>
      { timer && <MyTimer expiryTimestamp={time} /> }
      </div>
    );
}

export default TimerInsert.js;