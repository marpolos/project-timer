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
      <Button disabled={ isDisabled } name={ isActive ? "Pausar" : "Iniciar" } />
      <Button name="Zerar" disabled="false"/>
    </PrincipalPage>
  );
}

export default Timer;