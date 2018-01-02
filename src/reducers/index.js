import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavigationReducer from './NavigationReducer';
import EmployeeFormCreate from './EmployeeFormCreate';

export default combineReducers({
    nav: NavigationReducer,
    auth: AuthReducer,
    employeeForm: EmployeeFormCreate 
})