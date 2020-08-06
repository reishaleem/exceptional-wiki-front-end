import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Navbar from './components/molecules/Navbar/Navbar'
import Container from '@material-ui/core'

function App() {
  return (
    <Container fixed>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={Navbar} exact />
      </Switch>
    </Container>
  );
}

export default App;
