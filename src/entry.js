import React from 'react'
import ReactDOM from 'react-dom'
import {List} from './listComponent'
import {tasks} from './tasksData'

/**
 * TODO delete document.body.onload
 */
document.body.onload = () => ReactDOM.render(<List list={tasks}/>, document.getElementById('container'));
