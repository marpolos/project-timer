import React from 'react';
import Button from '../../component/Button';
import CountTimer from '../../component/CountTimer';
import InputTimer from '../../component/InputTimer';
import { useTimer } from '../../hooks/useHours';
import { ContainerTimer, PrincipalPage } from './styles';

const Timer = () => {
  const { isActive  } = useTimer();
  return (
    <PrincipalPage>
      <h1> Timer </h1>
      <ContainerTimer>
      {
        isActive ?  <CountTimer /> : <InputTimer />
      }
      </ContainerTimer>
    </PrincipalPage>
  );
}

export default Timer;