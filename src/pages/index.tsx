import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Lab from "./Lab";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Router:FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/portfolio" render={() => <Portfolio />} />
          <Route exact path="/lab" render={() => <Lab />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};


export default Router;