import React from 'react'

export class Task extends React.Component {
    constructor(prors) {
        super(prors);
        this.task = this.props.task;
    }

    render() {
        return (
            <div style={{backgroundColor: this.task.priority === 'normal' ? 'green' : 'red'}}>
                {this.task.title}
            </div>
        );
    }
}
