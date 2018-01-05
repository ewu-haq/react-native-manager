import { StackNavigator } from "react-navigation";
import LoginForm from "./LoginForm";
import EmployeeList from "./EmployeeList";
import EmployeeCreate from "./EmployeeCreate";
import LogoScreen from "./LogoScreen";
import {
  LOGO_SCREEN,
  LOG_IN_SCREEN,
  EMPLOYEE_LIST_SCREEN,
  ADD_EMPLOYEE_SCREEN
} from "../values/screens";

export const AppNavigator = StackNavigator({
  LOGO_SCREEN: { screen: LogoScreen },
  LOG_IN_SCREEN: { screen: LoginForm },
  EMPLOYEE_LIST_SCREEN: { screen: EmployeeList },
  ADD_EMPLOYEE_SCREEN: { screen: EmployeeCreate }
});
