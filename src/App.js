import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Brand from './components/atoms/Brand/Brand'
import Navbar from './components/molecules/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Brand} exact />
        <Route path="/about" component={Navbar} exact />
      </Switch>
    </div>
  );
}

export default App;
