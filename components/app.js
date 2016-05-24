import React from 'react'
import {TaskList} from '../containers/taskList'
import {InputTask} from '../containers/inputTask'

export let App = () => {
    return (
        <div>
            <InputTask />
            <TaskList />
        </div>
    )
};