import React from 'react';
import './App.css';
import Navbar from './components/atoms/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" component={Navbar} exact />
        <Route path="/register" component={Navbar} exact />
      </Switch>
    </div>
  );
}

export default App;
