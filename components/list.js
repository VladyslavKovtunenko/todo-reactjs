import React from 'react'
import {Task} from './task'
import {InputTask} from '../containers/inputTask'

export class List extends React.Component {

    constructor(props) {
        super(props);
        for (let i = 0; i < this.props.list.length; i++) {
            this.props.list[i].id = i;
        }

        this.state = {
            tasks: this.props.list
        };
    }

    render() {
        return (
            <div>
                <InputTask />
                <ol>
                    {this.state.tasks.map((task, index) => (
                        <li>
                            <Task task={task}/>
                        </li>
                    ))}
                </ol>
            </div>);
    }
}