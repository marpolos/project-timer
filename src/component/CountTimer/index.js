import React from 'react';
import { useTimer } from '../../hooks/useHours';
import { Container, TimerDisplay } from './styles';
import Button from '../Button';

const CountTimer = () => {
    const { hour, minute, second,
      isActive } = useTimer();
  return (
    <Container>
        <h1>Contagem</h1>
        <TimerDisplay>{hour}</TimerDisplay>
        {':'}
        <TimerDisplay>{minute}</TimerDisplay>
        {':'}
        <TimerDisplay>{second}</TimerDisplay>
      <Button disabled={ false } name={ isActive ? "Pausar" : "Continuar" } />
      <Button name="Zerar" disabled={ false } />
    </Container>
  );
}

export default CountTimer;