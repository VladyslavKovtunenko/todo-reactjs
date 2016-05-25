import React from 'react'

export class Task extends React.Component {
    constructor(props) {
        super(props);
        this.task = this.props.task;
        console.log(this.props);
        console.log(tasks);
    }

    render() {
        return <div></div>;
        /*(
            <div style={{backgroundColor: this.task.priority === 'normal' ? 'green' : 'red'}}>
                {this.task.title}
            </div>
         );*/
    }
}
