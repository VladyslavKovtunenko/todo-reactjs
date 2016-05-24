import React from 'react'
import {TaskList} from '../containers/taskList'
import {InputTask} from '../containers/inputTask'

export let App = (store) => {
    return (
        <div>
            <InputTask store={store}/>
            <TaskList tasks={store.store.getState()}/>
        </div>
    )
};