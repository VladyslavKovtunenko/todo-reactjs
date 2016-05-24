import React from 'react'
import {Task} from './task'
import {InputTask} from './inputTask'

export let App = (store) => {
    let tasks = store.store.getState();

    return (
        <div>
            <InputTask store={store}/>
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