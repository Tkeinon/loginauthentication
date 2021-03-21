import {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from "react-router-dom";

import {AuthContext} from "./context/authContext";
import React from "react";
import Layout from "./components/Layout";

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
        <AuthContext.Provider value={false}>
            <Router>
                <GlobalStyle />
                <Layout />
            </Router>
        </AuthContext.Provider>
    )


}

export default App;
