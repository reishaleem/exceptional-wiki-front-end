import React from "react";
import "./App.css";
import Navbar from "./components/atoms/Navbar/Navbar";
import SignUp from "./components/pages/SignUp/SignUp";
import Home from "./components/pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";

function App() {
    return (
        <Container fluid>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={SignUp} exact />
                <Route path="/profile" component={ProfilePage} exact />
            </Switch>
        </Container>
    );
}

export default App;
