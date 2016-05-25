import React from 'react'
import ReactDOM from 'react-dom'
import {addTask} from '../actions/actions'
import App from '../components/app'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {todo} from '../redusers/reducer'

const store = createStore(todo);

const tasks = [{title: 'First task'},
    {title: 'Second task'},
    {title: 2}];

store.dispatch(addTask(tasks[0].title));
store.dispatch(addTask(tasks[1].title));
store.dispatch(addTask(tasks[2].title));

let tmp = store.getState();

console.log(tmp);
let a;
a = tmp.filter((title)=> {
    if (title.title != 2) return title
});
console.log(a);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);

