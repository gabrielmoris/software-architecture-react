import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import styled from "styled-components";
import { CounterButton } from "./pages/CounterButton";
import { CounterProvider } from "./CounterProvider";

const BigRedHeading = styled.h1`
    color: red;
    font-size: 50px;
`;

const App = () => {
    return (
        <CounterProvider>
            <BigRedHeading>App state managing with context</BigRedHeading>
            <CounterButton />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/articles">
                    <Articles />
                </Route>
            </Switch>
        </CounterProvider>
    );
};

export default App;

// npx nodemon --exec npx babel-node server.js
