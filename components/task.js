import React from 'react'

export const Task = (task) => {
    
    return (
        <div style={{backgroundColor: task.priority === 'normal' ? 'green' : 'red'}}>
            {task.title}
        </div>
    )
};