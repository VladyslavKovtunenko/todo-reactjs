import React from 'react'
import {Task} from './task'

export class List extends React.Component {

    constructor(props) {
        super(props);
        for (let i = 0; i < this.props.list.length; i++) {
            this.props.list[i].id = i;
        }

        this.state = {
            tasks: this.props.list,
            inputTitle: '',
            inputPriority: 'normal'
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
    }

    addNewTask(e) {
        e.preventDefault();
        if (this.state.inputTitle !== '') {
            this.setState(this.state.tasks[this.state.tasks.length] = {
                id: this.state.tasks.length,
                title: this.state.inputTitle,
                priority: this.state.inputPriority
            });
        }
    }

    deleteTask(e) {
        let newTaskArray = [].concat(this.state.tasks);
        newTaskArray.splice(e.target.id, 1);
        for (let i = e.target.id; i < newTaskArray.length; i++) {
            newTaskArray[i].id = newTaskArray[i].id - 1;
        }
        console.log(newTaskArray);
        this.setState({tasks: newTaskArray});
    }

    handlePriorityChange(event) {
        this.setState({inputPriority: event.target.value});
    }

    handleTitleChange(event) {
        this.setState({inputTitle: event.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.addNewTask(e)}>
                    <dl>
                        <dd>
                            <h4>Add task</h4>
                        </dd>
                        <dd>
                            <h5>Task title</h5>
                            <input type='text' value={this.state.inputTitle} onChange={this.handleTitleChange}/>
                        </dd>
                        <dd>
                            <select value={this.state.inputPriority} onChange={this.handlePriorityChange}>
                                <option>normal</option>
                                <option>critical</option>
                            </select>
                        </dd>
                        <dd>
                            <input type='submit' value="Submit"/>
                        </dd>
                    </dl>
                </form>
                <ol>
                    {this.state.tasks.map((task, index) => (
                        <li>
                            <Task task={task}/>
                            <button type='button' id={index} onClick={(e) => this.deleteTask(e)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>);
    }
}