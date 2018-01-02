import { EMPLOYEE_UPDATE } from '../values/types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        Etype: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};