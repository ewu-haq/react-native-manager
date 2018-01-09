import { EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_ITEM_CLICK } from "../values/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
    case EMPLOYEE_ITEM_CLICK:
      return state;
    default:
      return state;
  }
};
