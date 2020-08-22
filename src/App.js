import React from "react";
import "./App.css";
import SignUp from "./components/pages/SignUp/SignUp";
import MainHome from "./components/pages/MainHome/MainHome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import UserProfilePage from "./components/pages/UserProfilePage/UserProfilePage";

function App() {
    return (
        <Container fluid>
            
            <Switch>
                <Route path="/" component={MainHome} exact />
                <Route path="/register" component={SignUp} exact />
                <Route path="/profile" component={UserProfilePage} exact />
            </Switch>
        </Container>
    );
}

export default App;
