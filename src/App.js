import logo from './logo.svg';
import styled, {createGlobalStyle} from 'styled-components';
import Home from "./pages/home";

const GlobalStyle = createGlobalStyle`
    
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />


    </div>
  );
}

export default App;
