import React from 'react'
import ReactDOM from 'react-dom'
import {addTask} from '../actions/actions'
import {List} from '../components/list'
import {store} from '../store/store'

const tasks = [{title: 'First task', priority: 'normal'},
    {title: 'Second task', priority: 'critical'}];

const render = () => {
    ReactDOM.render(<List list={store.getState()}/>, document.getElementById('container'))
};

console.log(store.getState());

store.subscribe(render);
render();

setTimeout(()=> {
    store.dispatch(addTask(tasks[0].title));
    console.log(store.getState());
}, 2000);
setTimeout(()=> {
    store.dispatch(addTask(tasks[1].title));
    console.log(store.getState());
}, 6000);
