import React from 'react'
import ReactDOM from 'react-dom'
import {addTask} from '../actions/actions'
import App from '../components/app'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {todo} from '../redusers/reducer'

const store = createStore(todo);

const tasks = [{title: 'First task', priority: 'normal'},
    {title: 'Second task', priority: 'critical'}];

store.dispatch(addTask(tasks[0].title));
store.dispatch(addTask(tasks[1].title));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);
