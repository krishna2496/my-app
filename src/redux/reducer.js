import { DISHES } from "../shared/dish";
import { COMMENTS } from "../shared/comment";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotion";

export const initialState = {
  dishes: DISHES,
  comment: COMMENTS,
  leaders: LEADERS,
  promotion: PROMOTIONS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
