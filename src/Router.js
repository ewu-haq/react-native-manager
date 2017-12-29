import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router SceneStyle={{ paddingTop: 65 }}>
            <Scene
                key='login'
                component={LoginForm}
                title='Please Login'
            />
            <Scene
                key='employee_list'
                component={EmployeeList}
                title='Employees'
            />
        </Router>
    );
};

export default RouterComponent;