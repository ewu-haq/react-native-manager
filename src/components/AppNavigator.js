import { StackNavigator } from "react-navigation";
import LoginForm from "./LoginForm";
import EmployeeList from "./EmployeeList";
import EmployeeCreate from "./EmployeeCreate";
import LogoScreen from "./LogoScreen";
import ListItem from "./ListItem";
import {
  LOGO_SCREEN,
  LOG_IN_SCREEN,
  EMPLOYEE_LIST_SCREEN,
  EMPLOYEE_ITEM_SCREEN,
  ADD_EMPLOYEE_SCREEN
} from "../values/screens";

export const AppNavigator = StackNavigator({
  LOGO_SCREEN: { screen: LogoScreen },
  LOG_IN_SCREEN: { screen: LoginForm },
  EMPLOYEE_LIST_SCREEN: { screen: EmployeeList },
  EMPLOYEE_ITEM_SCREEN: { screen: ListItem },
  ADD_EMPLOYEE_SCREEN: { screen: EmployeeCreate }
});
