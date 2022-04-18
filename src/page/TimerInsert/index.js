import React, { useState } from 'react';
import MyTimer from '../Timer';
import { Container, InputNumber } from './styles';

const TimerInsert = () => {
  const [haveTimer, setHaveTimer] = useState(false);
  const [time, setTime] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const handleSetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    setHaveTimer(true);

  };
    return (
      <Container>
        {
        haveTimer
        ? <MyTimer expiryTimestamp={time} />
      : (
      <form>
          <label htmlFor="setHour">
            <InputNumber 
              type="number" name="hour" id="hour"
              onChange={ ({target}) => setHour(target.value) }
              value={ hour }
              min="0"
          />
          </label>
          <label htmlFor="setMinute">
              <InputNumber type="number" name="minute" id="hour"
              onChange={ ({target}) => setMinute(target.value) }
              value={ minute }
              min="0"
          />
          </label>
          <label htmlFor="setSecond">
              <InputNumber type="number" name="second" id="hour"
              onChange={ ({target}) => setSecond(target.value) }
              value={ second }
              min="0"
            />
          </label>
      </form>
      )}
    </Container>
    );
}

export default TimerInsert.js;