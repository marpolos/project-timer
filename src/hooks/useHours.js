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
  const ONE_TIMER = 1_000;
  const ONE = 1;
  let intervalIdSecond;

  useEffect(() => {
    if (+hour > 0 || +minute > 0 || +second > 0) setIsDisabled(false);
  }, [hour, minute, second]);

  const setUserHour = (value) => setHour(value);
  const setUserMinute = (value) => setMinute(value);
  const setUserSecond = (value) => setSecond(value);

  useEffect(() => {
    if(isActive) {
        const intervalIdSecond = setInterval(() => {
        if (+second >= 0) setSecond((prev) => +prev - ONE);
        else {
          setSecond('00');
          clearInterval(intervalIdSecond);
        }
      }, ONE_TIMER);
    }
    if(!isActive) clearInterval(intervalIdSecond);
  }, [second, intervalIdSecond, isActive]);

  const handleChangeTimer = () => {
    setIsActive(!isActive);
}

  const handleZero = () => {
      setHour('00');
      setMinute('00');
      setSecond('00');
      setIsActive(false);
  };

  const calculateTimeLeft = () => {

  };
  return (
    <TimerContext.Provider
      value={ {
        hour,
        minute,
        second,
        setUserHour,
        setUserMinute,
        setUserSecond,
        handleChangeTimer,
        handleZero,
        isDisabled,
        calculateTimeLeft,
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