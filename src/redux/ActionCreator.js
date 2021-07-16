import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dish";
import { baseUrl } from "../shared/baseUrl";
import { post } from "jquery";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishLoading(true));
  return fetch(baseUrl + "dishes")
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let error = new Error("Error in loading");
        error.response = response;
        throw error;
      }
    })
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errorMsg) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errorMsg,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const postComment = (dishId, rating, comment, author) => (dispatch) => {
  alert("in");
  debugger;
  const newComment = {
    dishId: dishId,
    rating: rating,
    comment: comment,
    author: author,
  };

  newComment.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let error = new Error("error in post");
        throw error;
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      dispatch(
        addComment(
          response.dishId,
          response.rating,
          response.author,
          response.comment
        )
      );
    });
};
