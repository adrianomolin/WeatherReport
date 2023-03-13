import { AirQuality } from './AirQuality';
import { Forecast } from './Forecast';
import { SunTime } from './SunTime';
import { Container, InformationCards } from './styles';

export function Informations() {
  return (
    <Container>
      <InformationCards>
        <AirQuality />
        <SunTime />
      </InformationCards>

      <Forecast />
    </Container>
  );
}
