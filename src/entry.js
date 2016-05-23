import React from 'react'
import ReactDOM from 'react-dom'
import {addTask} from '../actions/actions'
import {createStore} from 'redux'
import {todo} from '../redusers/reducer'
import {List} from '../components/list'

const tasks = [{title: 'First task', priority: 'normal'},
    {title: 'Second task', priority: 'critical'}];

const store = createStore(todo);

console.log(store.getState());
store.dispatch(addTask(tasks[0].title));
console.log(store.getState());
store.dispatch(addTask(tasks[1].title));
console.log(store.getState());

ReactDOM.render(
    <List list={store.getState()}/>,
    document.getElementById('container')
);

