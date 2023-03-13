import { Card, Container, Icon, Temperature, Title } from './styles';

import cloud from '../../../assets/icons/cloud.svg';
import cloudy from '../../../assets/icons/cloudy.svg';
import sunny from '../../../assets/icons/sunny.svg';
import rainy from '../../../assets/icons/rainy.svg';
import storm from '../../../assets/icons/storm.svg';

const weatherData = [
  {
    day: 'Amanhã',
    weather: cloud,
    tempMax: '21°',
    tempMin: '16°',
  },
  {
    day: 'Sexta-Feira',
    weather: sunny,
    tempMax: '28°',
    tempMin: '20°',
  },
  {
    day: 'Sábado',
    weather: rainy,
    tempMax: '25°',
    tempMin: '21°',
  },
  {
    day: 'Domingo',
    weather: storm,
    tempMax: '20°',
    tempMin: '14°',
  },
  {
    day: 'Segunda-Feira',
    weather: cloudy,
    tempMax: '24°',
    tempMin: '18°',
  },
];

export function Forecast() {
  return (
    <Container>
      {
        weatherData.map(weather => (
          <Card key={weather.day}>
            <Title>{weather.day}</Title>
            <Icon src={weather.weather} alt='cloudy' />
            <Temperature>
              <div className='max'>{weather.tempMax}</div>
              <div className='min'>{weather.tempMin}</div>
            </Temperature>
          </Card>
        ))
      }
    </Container>
  );
}
