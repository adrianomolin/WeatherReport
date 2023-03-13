import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import defaultTheme from './styles/themes/default';

import { WeatherProvider } from './hooks/useWeather';

import { Home } from './components/Home';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <WeatherProvider>
        <Home />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
