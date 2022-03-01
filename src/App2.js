import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { CounterButton2 } from "./pages/CounterButton2";
const BigRedHeading = styled.h1`
    color: blue;
    font-size: 50px;
`;

const App2 = () => {
    return (
        <RecoilRoot>
            <BigRedHeading>App2 with Recoil</BigRedHeading>
            <CounterButton2 />
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
        </RecoilRoot>
    );
};

export default App2;
