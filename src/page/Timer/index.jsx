import React from 'react';
import Button from '../../component/Button';
import InputTimer from '../../component/InputTimer';
import { useTimer } from '../../hooks/useHours';
import { ContainerTimer, PrincipalPage, TimeNumber } from './styles';

const Timer = () => {
  const { hour, minute, second, isActive, isDisabled } = useTimer();

  return (
    <PrincipalPage>
      <h1> Timer </h1>
      <ContainerTimer>
      <TimeNumber>{ hour }</TimeNumber>
      <TimeNumber>{ minute }</TimeNumber>
      <TimeNumber>{ second }</TimeNumber>
      </ContainerTimer>
      <InputTimer />
      <Button disabled={ isDisabled } name={ isActive ? "Pausar" : "Iniciar" }></Button>
      <Button name="Zerar"></Button>
    </PrincipalPage>
  );
}

export default Timer;