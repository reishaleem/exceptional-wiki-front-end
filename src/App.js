import React from "react";
import "./App.css";
import SignUp from "./components/pages/NonAppPages/SignUp/SignUp";
import SignIn from "./components/pages/NonAppPages/SignIn/SignIn";
import MainHome from "./components/pages/NonAppPages/MainHome/MainHome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import UserProfilePage from "./components/pages/AppPages/UserProfilePage/UserProfilePage";
import UserSecurityPage from "./components/pages/AppPages/UserProfilePage/UserSecurityPage";
import UserDeletePage from "./components/pages/AppPages/UserProfilePage/UserDeletePage";
import About from "./components/pages/NonAppPages/About/About";
import Features from "./components/pages/NonAppPages/Features/Features";
import AppHome from "./components/pages/AppPages/AppFrontPage/AppHome";
import UniversesHome from "./components/pages/AppPages/AppFrontPage/UniversesHome";
import NewUniverse from "./components/pages/AppPages/UniversePage/NewUniverse";
import UniverseHomePage from "./components/pages/AppPages/UniversePage/UniverseHomePage";
import NewWiki from "./components/pages/AppPages/WikiPage/NewWiki";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainHome} exact />
        <Route path="/app" component={AppHome} exact />
        <Route path="/app/universes" component={UniversesHome} exact />
        <Route path="/app/universes/new" component={NewUniverse} exact />
        <Route
          path="/app/universes/:universeId"
          component={UniverseHomePage}
          exact
        />
        <Route
          path="/app/universes/:universeId/wikis/new"
          component={NewWiki}
          exact
        />
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
