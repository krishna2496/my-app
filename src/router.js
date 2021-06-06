import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import ContactUs from "./components/ContactUsComponent";
import AboutUs from "./components/AboutUsComponent";
import Home from "./components/HomeComponent";
import Menu from "./components/Menu";
import { DISHES } from "./shared/dish";
import DishDetailComponent from "./components/DishDetailComponent";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const DishDetail = ({ match }) => {
  const selectedDish = DISHES.filter(
    (dish) => dish.id === parseInt(match.params.dishId)
  );
  console.log(selectedDish);
  return <DishDetailComponent dish={selectedDish[0]} />;
};
class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/menu" component={() => <Menu dish={DISHES} />} />
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
          <Route path="/dish-detail/:dishId" component={DishDetail}></Route>
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapState)(Router));
