import React from 'react'

export class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.task.priority=== 'normal' ? 'green' : 'red'}}>
                {this.props.task.title}
            </div>
        );
    }
}