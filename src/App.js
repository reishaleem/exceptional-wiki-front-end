import React from "react";
import "./App.css";
import SignUp from "./components/pages/SignUp/SignUp";
import SignIn from "./components/pages/SignIn/SignIn";
import MainHome from "./components/pages/MainHome/MainHome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import UserProfilePage from "./components/pages/UserProfilePage/UserProfilePage";
import UserSecurityPage from "./components/pages/UserProfilePage/UserSecurityPage";
import About from "./components/pages/About/About";
import Navbar from "./components/atoms/Navbar/Navbar";
import Features from "./components/pages/Features/Features";
import AppHome from "./components/pages/AppHome/AppHome";

function App() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Switch>
          <Route path="/" component={MainHome} exact />
          <Route path="/app" component={AppHome} exact />
          <Route path="/about" component={About} exact />
          <Route path="/features" component={Features} exact />
          <Route path="/register" component={SignUp} exact />
          <Route path="/login" component={SignIn} exact />
          <Route
            path="/app/account/profile"
            component={UserProfilePage}
            exact
          />
          <Route
            path="/app/account/security"
            component={UserSecurityPage}
            exact
          />
        </Switch>
      </Container>
    </>
  );
}

export default App;
