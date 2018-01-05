import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import NavigationReducer from "./NavigationReducer";
import EmployeeFormCreateReducer from "./EmployeeFormCreateReducer";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
  nav: NavigationReducer,
  auth: AuthReducer,
  employeeForm: EmployeeFormCreateReducer,
  employees: EmployeeReducer
});
