import React from 'react'
import {Task} from '../components/task'

export const TaskList = (tasks) => {
    tasks = tasks.tasks;
    return (
        <ol>
            {tasks.map((task) => (
                <li>
                    <Task task={task}/>
                </li>
            ))}
        </ol>
    )
};