import { Cloud, Container, Location, Pin } from './styles';

import { formatState } from '../../../utils/formatState';

import pin from '../../../assets/icons/pin.svg';
import cloud from '../../../assets/icons/weather.svg';

interface HeaderProps {
  city: string,
  state: string,
  weatherIcon: string,
}

export function Header({ city, state, weatherIcon }: HeaderProps) {
  return (
    <Container>
      <Cloud src={cloud} alt='cloud' />
      <Location>
        <Pin src={pin} alt='pin' />
        <div>{city}, {formatState(state)}</div>
      </Location>
    </Container>
  );
}
