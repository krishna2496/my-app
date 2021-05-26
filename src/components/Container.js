import Menu from "./Menu";
import { DISHES } from "../shared/dish";
import Header from "../components/Layout/HeaderComponent";
import { Component } from "react";
import DishDetail from "./DishDetail";
import Footer from "../components/Layout/FooterComponent";

import Home from "./HomeComponent";
import Router from "./../router";

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }
  changeSelectedDish(dishId) {
    let selectedDish = DISHES.filter((dish) => dish.id == dishId);
    this.setState({
      selectedDish: selectedDish[0],
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Router />
      </div>
    );
  }
}

export default Container;
