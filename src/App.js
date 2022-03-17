import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import GlobalNav from './components/GlobalNav';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalNav />
      </ThemeProvider>
    </div>
  );
}

export default App;
