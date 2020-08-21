import React from 'react';
import './App.css';
import Navbar from './components/atoms/Navbar/Navbar'
import SignUp from './components/pages/SignUp/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" component={Navbar} exact />
        <Route path="/register" component={SignUp} exact />
      </Switch>
    </div>
  );
}

export default App;
