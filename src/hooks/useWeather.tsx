import { useContext, createContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../utils/api';

interface WeatherContextProps {
  currentWeather: {
    location?: {
      latitude: number,
      longitude: number,
      city: string,
      state: string,
    },
    weather?: {
      wind: number,
      humidity: number,
      temperature: number,
      max: number,
      min: number,
      icon: string,
    },
  },
}

interface WeatherProviderProps {
  children: ReactNode
}

const WeatherContext = createContext({} as WeatherContextProps);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      await api.get('/current.json', {
        params: {
          q: `${coords.latitude}, ${coords.longitude}`
        }
      })
        .then(({ data }) => {
          const weatherData = {
            location: {
              latitude: coords.latitude,
              longitude: coords.longitude,
              city: data.location.name,
              state: data.location.region
            },
            weather: {
              wind: parseInt(data.current.wind_kph),
              humidity: parseInt(data.current.humidity),
              temperature: parseInt(data.current.temp_c),
              max: 30,
              min: 10,
              icon: data.current.condition.icon
            },
          };

          setCurrentWeather(weatherData);

        })
        .catch(err => {
          console.error(err);
        });
    });
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);

  return context;
}
