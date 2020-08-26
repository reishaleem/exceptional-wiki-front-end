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
import UserDeletePage from "./components/pages/UserProfilePage/UserDeletePage";
import About from "./components/pages/About/About";
import Features from "./components/pages/Features/Features";
import AppHome from "./components/pages/AppFrontPage/AppHome";
import UniversesHome from "./components/pages/AppFrontPage/UniversesHome";
import NewUniverse from "./components/pages/UniversePage/NewUniverse";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainHome} exact />
        <Route path="/app" component={AppHome} exact />
        <Route path="/app/universes" component={UniversesHome} exact />
        <Route path="/app/universes/new" component={NewUniverse} exact />
        <Route path="/about" component={About} exact />
        <Route path="/features" component={Features} exact />
        <Route path="/register" component={SignUp} exact />
        <Route path="/login" component={SignIn} exact />
        <Route path="/app/account/profile" component={UserProfilePage} exact />
        <Route
          path="/app/account/security"
          component={UserSecurityPage}
          exact
        />
        <Route path="/app/account/delete" component={UserDeletePage} exact />
      </Switch>
    </>
  );
}

export default App;
