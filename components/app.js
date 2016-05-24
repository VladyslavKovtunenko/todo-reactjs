import React from 'react'
import {addTask} from '../actions/actions'
import {Task} from './task'

export let App = (store) => {
    let input;
    let state = store.store;
    let tasks = state.getState();

    return (
        <div>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    state.dispatch(addTask(input.value));
                    input.value = '';
                }
            }>
                <dl>
                    <dd>
                        <h4>Add task</h4>
                    </dd>
                    <dd>
                        <h5>Task title</h5>
                        <input ref={node => {input = node}}/>
                    </dd>
                    <dd>
                        <select>
                            <option>normal</option>
                            <option>critical</option>
                        </select>
                    </dd>
                    <dd>
                        <input type='submit' value="Submit"/>
                    </dd>
                </dl>
            </form>
            <ol>
                {tasks.map((task) => (
                    <li>
                        <Task task={task}/>
                    </li>
                ))}
            </ol>
        </div>
    )
};