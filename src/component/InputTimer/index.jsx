import React from 'react';
import { useTimer } from '../../hooks/useHours';
import { Container } from './styles';

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
              <input type="number" name="hour" id="hour"
                onChange={ ({target}) => handleHour(target) }
                value={ hour }
                min="0" max="24"
          />
          </label>
          <label htmlFor="setMinute">
              <input type="number" name="minute" id="hour"
              onChange={ ({target}) => handleHour(target) }
              value={ minute }
              min="0" max="60"
          />
          </label>
          <label htmlFor="setSecond">
              <input type="number" name="second" id="hour"
              onChange={ ({target}) => handleHour(target) }
              value={ second }
              min="0" max="60"
            />
          </label>
      </form>
    </Container>
  );
}

export default InputTimer;