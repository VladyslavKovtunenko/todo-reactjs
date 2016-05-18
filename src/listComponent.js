import React from 'react'
import {Task} from './taskComponent'

export let List = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentWillMount: function () {
        this.state.tasks = this.props.list;
        for (let i = 0; i < this.state.tasks.length; i++) {
            this.state.tasks[i].id = i;
        }
    },

    addNewTask: function (e) {
        e.preventDefault();

        if (this.taskTitle.value !== '') {
            this.state.tasks.push({
                id: this.state.tasks.length,
                title: this.taskTitle.value,
                priority: this.taskPriority.value
            });
            this.setState(this.state.tasks);
            this.taskTitle.value = '';
        }
    },

    deleteTask: function (e) {
        this.state.tasks.splice(e.target.id, 1);
        for (let i = e.target.id; i < this.state.tasks.length; i++) {
            this.state.tasks[i].id = this.state.tasks[i].id - 1;
        }
        this.setState(this.state.tasks);
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.addNewTask.bind(this)}>
                    <dl>
                        <dd>
                            <h4>Add task</h4>
                        </dd>
                        <dd>
                            <h5>Task title</h5>
                            <input type='text' placeholder='Title' ref={(ref) => this.taskTitle = ref}/>
                        </dd>
                        <dd>
                            <h5>Priority</h5>
                            <select ref={(ref) => this.taskPriority = ref}>
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
                            <button type='button' id={index} onClick={this.deleteTask.bind(this)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>);
    }
});
