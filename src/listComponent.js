import React from 'react'
import ReactDOM from 'react-dom'
import {Task} from './taskComponent'
import {tasks} from './tasksData'

export let List = React.createClass({
    getInitialState: function () {
        return {};
    },

    addNewTask: function (e) {
        e.preventDefault();

        if (this.taskTitle.value !== '') {
            this.setState({
                title: this.taskTitle.value,
                priority: this.taskPriority.value
            });
            /**
             * TODO delete next line
             */
            // ReactDOM.render(<List list={tasks}/>, document.getElementById('container'));
            this.taskTitle.value = '';
        }
    },

    render: function () {
        this.state.tasks = this.props.list;
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
                    {this.state.tasks.map((task, index) => (<Task task={task} index={index}/>))}
                </ol>
            </div>);
    }
});
