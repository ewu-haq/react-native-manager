import {
    EMPLOYEE_UPDATE
} from '../values/types';

const initial_state= {
    name:'',
    phone: '',
    shift: ''
};

export default (state = initial_state, action) => {
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value}
        default:
        return state;
    }
};