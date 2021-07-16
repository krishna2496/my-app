import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import ContactUs from "./components/ContactUsComponent";
import AboutUs from "./components/AboutUsComponent";
import Home from "./components/HomeComponent";
import Menu from "./components/Menu";
import DishDetailComponent from "./components/DishDetailComponent";
import { connect } from "react-redux";
import SignUp from "./components/SignUpComponent";

import { addComment, fetchDishes, postComment } from "./redux/ActionCreator";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapState = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comment,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatch = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  postComment: (dishId, rating, author, comment) => {
    dispatch(postComment(dishId, rating, author, comment));
  },
});

class Router extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchDishes();
    console.log(this.props.dishes.dishes);
  }
  render() {
    const DishDetail = ({ match }) => {
      const selectedDish = this.props.dishes.dishes.filter(
        (dish) => dish.id === parseInt(match.params.dishId)
      );
      return (
        <DishDetailComponent
          dish={selectedDish[0]}
          comment={this.props.comments}
          addComment={this.props.addComment}
          postComment={this.props.postComment}
        />
      );
    };
    return (
      <TransitionGroup>
        <React.Fragment>
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              exact
              path="/menu"
              component={() => (
                <Menu
                  dish={this.props.dishes.dishes}
                  isLoading={this.props.dishes.isLoading}
                  errMess={this.props.dishes.errMess}
                />
              )}
            />
            <Route path="/about-us" component={AboutUs}></Route>
            <Route path="/contact-us" component={() => <ContactUs />}></Route>
            <Route path="/dish-detail/:dishId" component={DishDetail}></Route>
            <Route
              path="/sing-up"
              component={() => (
                <SignUp resetFeedbackForm={this.props.resetFeedbackForm()} />
              )}
            ></Route>
            <Redirect to="/home" />
          </Switch>
        </React.Fragment>
      </TransitionGroup>
    );
  }
}

export default withRouter(connect(mapState, mapDispatch)(Router));
