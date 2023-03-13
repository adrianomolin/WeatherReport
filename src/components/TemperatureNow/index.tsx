import { useWeather } from '../../hooks/useWeather';

import { Footer } from './Footer';
import { Content } from './Content';
import { Loader } from '../Loader';
import { Header } from './Header';

export function TemperatureNow() {
  const { currentWeather } = useWeather();
  const { location, weather } = currentWeather;

  return (
    <>
      {
        location && weather ? (
          <>
            <Header
              city={location.city}
              state={location.state}
              weatherIcon={weather.icon}
            />
            <Content
              temperature={weather.temperature}
              min={weather.max}
              max={weather.min}
            />
            <Footer
              windSpeed={weather.wind}
              humidity={weather.humidity}
            />
          </>
        ) : (
          <Loader />
        )
      }
    </>
  );
}
