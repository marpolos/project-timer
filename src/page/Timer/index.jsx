import React from 'react';
import Button from '../../component/Button';
import InputTimer from '../../component/InputTimer';
import { useTimer } from '../../hooks/useHours';
import { ContainerTimer, PrincipalPage } from './styles';

const Timer = () => {
  const { isActive, isDisabled } = useTimer();

  return (
    <PrincipalPage>
      <h1> Timer </h1>
      <ContainerTimer>
      <InputTimer />
      </ContainerTimer>
      <Button disabled={ isDisabled } name={ isActive ? "Pausar" : "Iniciar" } />
      <Button name="Zerar" disabled="false"/>
    </PrincipalPage>
  );
}

export default Timer;