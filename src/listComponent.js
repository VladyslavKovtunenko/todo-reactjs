import React from 'react'
import {Task} from './taskComponent'

export class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.list
        };
        for (let i = 0; i < this.state.tasks.length; i++) {
            this.state.tasks[i].id = i;
        }
        this.newTask = {};
    }

    addNewTask(e) {
        e.preventDefault();
        if (this.newTask.title !== '' && this.newTask.title !== undefined && this.newTask.priority !== undefined) {
            this.state.tasks.push({
                id: this.state.tasks.length,
                title: this.newTask.title,
                priority: this.newTask.priority
            });
            this.setState(this.state.tasks);
        }
    }

    deleteTask(e) {
        this.state.tasks.splice(e.target.id, 1);
        for (let i = e.target.id; i < this.state.tasks.length; i++) {
            this.state.tasks[i].id = this.state.tasks[i].id - 1;
        }
        this.setState(this.state.tasks);
    }

    render() {
        let handleTitleChange = (event) => {
            this.newTask.title = event.target.value;
        };
        let handlePriorityChange = (event) => {
            if (event.target.value === 'chose priority') {
                this.newTask.priority = undefined;
            } else this.newTask.priority = event.target.value;
        };
        return (
            <div>
                <form onSubmit={(e) => this.addNewTask(e)}>
                    <dl>
                        <dd>
                            <h4>Add task</h4>
                        </dd>
                        <dd>
                            <h5>Task title</h5>
                            <input type='text' placeholder="Title" onChange={handleTitleChange}/>
                        </dd>
                        <dd>
                            <select onChange={handlePriorityChange}>
                                <option>chose priority</option>
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
