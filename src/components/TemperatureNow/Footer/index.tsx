import { Card, Container, Icon, Info, Label, Title, Content } from './styles';

import wind from '../../../assets/icons/wind.svg';
import humidityIcon from '../../../assets/icons/humidity.svg';
import rain from '../../../assets/icons/rain.svg';

interface FooterProps {
  windSpeed: number,
  humidity: number,
}

export function Footer({ windSpeed, humidity }: FooterProps) {

  return (
    <Container>
      <Card>
        <Icon src={wind} alt='wind' />
        <Content>
          <Title>
            Vento
          </Title>
          <Info>
            {Math.floor(windSpeed)} <Label>km/h</Label>
          </Info>
        </Content>
      </Card>
      <Card>
        <Icon src={humidityIcon} alt='umidity' />
        <Content>
          <Title>
            Umidade
          </Title>
          <Info>
            {humidity} <Label>%</Label>
          </Info>
        </Content>
      </Card>
      <Card>
        <Icon src={rain} alt='rain' />
        <Content>
          <Title>
            Chuva
          </Title>
          <Info>
            10 <Label>%</Label>
          </Info>
        </Content>
      </Card>
    </Container>
  );
}
