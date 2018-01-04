import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from "../values/types";

const initial_state = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = initial_state, action) => {
  console.log(state);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return { ...state };
    default:
      return state;
  }
};
