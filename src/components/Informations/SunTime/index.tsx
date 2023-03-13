import { Card as Container, Content, Header, Icon } from '../styles';

import time from '../../../assets/icons/time.svg';
import { SunClock } from './SunClock';

export function SunTime() {
  return (
    <Container>
      <Header>
        <Icon src={time} alt='time' />
        <p>Horário do sol</p>
      </Header>
      <Content>
        <SunClock />
      </Content>
    </Container>
  );
}
