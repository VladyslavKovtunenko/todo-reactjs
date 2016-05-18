import React from 'react'
import ReactDOM from 'react-dom'
import {List} from './listComponent'
import {tasks} from './tasksData'

/**
 * TODO delete next line
 */
const newTask = document.getElementById('submit');

/**
 * TODO delete document.body.onload
 */
document.body.onload = () => ReactDOM.render(<List list={tasks}/>, document.getElementById('container'));

/**
 * TODO delete onclick
 */
newTask.onclick = () => List.addNewTask();
