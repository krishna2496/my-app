import { combineReducers, createStore, applyMiddleware } from "redux";
// import { Reducer, initialState } from "./reducer";
import { Comment } from "./comments";
import { Dishes } from "./dish";
import { promotion } from "./Promotion";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comment: Comment,
      promotion: promotion,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
