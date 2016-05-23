import {createStore} from 'redux'
import {todo} from '../redusers/reducer'


export const store = createStore(todo);

export const dispatch = (action) => {
    console.log(action);
    store.dispatch(action);
    console.log(store.getState());
};