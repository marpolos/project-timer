import React, { useState } from 'react';
import Button from '../../component/Button';
import MyTimer from '../Timer';
import { Container, InputNumber, FormInputs } from './styles';

const TimerInsert = () => {
  const [haveTimer, setHaveTimer] = useState(false);
  const [time, setTime] = useState(0);
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');

  const handleSetTimer = () => {
    const time = new Date();
    const newSeconds = +second + +minute * 60 + +hour * 60 * 60;
    const finallySecond = time.setSeconds(time.getSeconds() + newSeconds); // 10 minutes timer
    setTime(finallySecond);
    setHaveTimer(true);
  };

    return (
      <Container>
      {
        haveTimer
        ? (
          <>
            <Button name="Novo tempo" onClick={ () => setHaveTimer(false)} />
            <MyTimer expiryTimestamp={time} resetTimer={+second + +minute * 60 + +hour * 60 * 60} />
          </>
        )
        : (
          <>
        <FormInputs>
          <label htmlFor="setHour">
            <p>Horas</p>
            <InputNumber 
              type="number" name="hour" id="hour"
              onChange={ ({target}) => setHour(target.value) }
              value={ hour }
              autofocus
              min="0"
            />
          </label>
          <label htmlFor="setMinute">
            <p>Minutos</p>
            <InputNumber type="number" name="minute" id="hour"
              onChange={ ({target}) => setMinute(target.value) }
              value={ minute }
              min="0"
            />
          </label>
          <label htmlFor="setSecond">
            <p>Segundos</p>
            <InputNumber type="number" name="second" id="hour"
              onChange={ ({target}) => setSecond(target.value) }
              value={ second }
              min="0"
            />
          </label>
        </FormInputs>
        <Button name="Iniciar" onClick={ handleSetTimer } />
        </>
        )}
    </Container>
    );
}

export default TimerInsert;