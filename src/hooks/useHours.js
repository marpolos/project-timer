import React, { createContext, useContext, useEffect, useState } from 'react';
/* import { useTimer } from 'react-timer-hook'; */
import PropTypes from 'prop-types';

export const TimerContext = createContext({});

export function TimerProvider({ children }) {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [counter, setCounter] = useState(0);
  /* const ONE_SECOND = 1_000;
  const ONE = 1;
  const ZERO = 0; */
  let intervalId;

  useEffect(() => {
    if (+hour > 0 || +minute > 0 || +second > 0) setIsDisabled(false);
  }, [hour, minute, second]);

  const setUserHour = (value) => setHour(value);
  const setUserMinute = (value) => setMinute(value);
  const setUserSecond = (value) => setSecond(value);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = +secondCounter>10 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter])

  const handleZero = () => {
      setHour('00');
      setMinute('00');
      setSecond('00');
      setIsActive(false);
      clearInterval(intervalId);
  };
  const handleInitTimer = () => {
    setIsActive(true);
  };
  const handleStopTimer = () => {
    clearInterval(intervalId);
  }

  
  return (
    <TimerContext.Provider
      value={ {
        hour,
        minute,
        second,
        setUserHour,
        setUserMinute,
        setUserSecond,
        handleZero,
        isDisabled,
        handleInitTimer,
        handleStopTimer,
        isActive,
      } }
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  return context;
}

TimerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};