import React from 'react';
import { useTimer } from '../../hooks/useHours';
import { Container, InputNumber } from './styles';

const InputTimer = () => {
  const { hour, minute, second,
    setUserHour, setUserMinute, setUserSecond } = useTimer();
  const handleHour = ({name, value}) => {
    switch (name) {
      case 'hour':
        setUserHour(value);
      break;
      case 'minute':
        setUserMinute(value);
      break;
      case 'second':
        setUserSecond(value);
      break;
      default:
      break;
      }
  };
  return (
    <Container>
      <form>
          <label htmlFor="setHour">
            <InputNumber 
              type="number" name="hour" id="hour"
              onChange={ ({target}) => handleHour(target) }
              value={ hour }
              min="0"
          />
          </label>
          <label htmlFor="setMinute">
              <InputNumber type="number" name="minute" id="hour"
              onChange={ ({target}) => handleHour(target) }
              value={ minute }
              min="0"
          />
          </label>
          <label htmlFor="setSecond">
              <InputNumber type="number" name="second" id="hour"
              onChange={ ({target}) => handleHour(target) }
              value={ second }
              min="0"
            />
          </label>
      </form>
    </Container>
  );
}

export default InputTimer;