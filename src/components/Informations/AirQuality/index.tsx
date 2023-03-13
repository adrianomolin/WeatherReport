import { Card as Container, Content, Header, Icon } from '../styles';

import leaf from '../../../assets/icons/leaf.svg';
import { Information, Rating, Quality, Rate, Number, Label } from './styles';

const Informations = [
  {
    label: 'PM2.5',
    value: 12.9
  },
  {
    label: 'PM10',
    value: 12.9
  },
  {
    label: 'SO₂',
    value: 2.1
  },
  {
    label: 'NO₂',
    value: 1.4
  },
  {
    label: 'O₃',
    value: 21.2
  },
  {
    label: 'CO',
    value: 0.7
  },

];

export function AirQuality() {
  return (
    <Container>
      <Header>
        <Icon src={leaf} alt='leaft' />
        <p>Qualidade do ar</p>
      </Header>
      <Content>
        <Quality>
          <Rate>Boa</Rate>
          <Rating>21</Rating>
        </Quality>
        <Information>
          {
            Informations.map((info) => (
              <div key={info.label}>
                <Number>
                  {info.value}
                </Number>
                <Label>
                  {info.label}
                </Label>
              </div>
            ))
          }
        </Information>
      </Content>
    </Container>
  );
}
