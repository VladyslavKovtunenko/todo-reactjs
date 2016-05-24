import React from 'react'
import {Task} from '../components/task'

export const TaskList = () => {
    console.log(this);
    return (
        <ol>
            {this.props.tasks.map((task) => (
                <li>
                    <Task task={task}/>
                </li>
            ))}
        </ol>
    )

};