import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Stats from "./Stats";
import About from "./About";
import Navigation from "./Navigation";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/statistics">
            <Stats />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}
