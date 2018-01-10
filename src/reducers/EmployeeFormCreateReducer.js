import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_USER_CREATING
} from "../values/types";

const initial_state = {
  name: "",
  phone: "",
  shift: "",
  create_loading: false
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case EMPLOYEE_USER_CREATING:
      return { ...state, create_loading: true };
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return { ...state, ...initial_state };
    default:
      return state;
  }
};
