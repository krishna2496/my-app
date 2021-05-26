import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContactUs from "./components/ContactUsComponent";
import AboutUs from "./components/AboutUsComponent";
import Home from "./components/HomeComponent";
import Menu from "./components/Menu";
import { DISHES } from "./shared/dish";

class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/menu" component={() => <Menu dish={DISHES} />} />
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Router;
