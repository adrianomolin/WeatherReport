import { Container, TemperatureContainer, Content } from './styles';

import { TemperatureNow } from '../TemperatureNow';
import { Informations } from '../Informations';

export function Home() {
  return (
    <Container>
      <Content>
        <TemperatureContainer>
          <TemperatureNow />
        </TemperatureContainer>

        <Informations />
      </Content>
    </Container>
  );
}
