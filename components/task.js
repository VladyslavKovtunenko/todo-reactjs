import React from 'react'

export class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol>
                {this.props.tasks.map((task) => (
                    <li style={{backgroundColor: task.priority === 'normal' ? 'green' : 'red'}}>
                        {task.title}
                    </li>
                ))}
            </ol>
        );
    }
}