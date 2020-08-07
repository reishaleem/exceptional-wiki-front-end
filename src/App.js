import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Navbar from './components/molecules/Navbar/Navbar'
import AppHome from './components/pages/AppHome/AppHome'
import {Container, Grid} from '@material-ui/core'
import UniversesHome from './components/pages/UniversesHome/UniversesHome';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={Navbar} exact />
      <Route path="/app" component={AppHome} exact />
      <Route path="/universes" component={UniversesHome} exact />
    </Switch>
  );
}

export default App;
