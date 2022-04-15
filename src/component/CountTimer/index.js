import React from 'react';
import { useTimer } from '../../hooks/useHours';
import { Container } from './styles';
import Button from '../Button';

const CountTimer = () => {
    const { hour, minute, second,
      isActive } = useTimer();
  return (
    <Container>
        <h1>Contagem</h1>
      <div>
        { `${hour} : ${minute} : ${second}`}
      </div>
      <Button disabled={ false } name={ isActive ? "Pausar" : "Continuar" } />
      <Button name="Zerar" disabled={ false } />
    </Container>
  );
}

export default CountTimer;