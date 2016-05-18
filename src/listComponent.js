import React from 'react'
import ReactDOM from 'react-dom'
import {Task} from './taskComponent'
import {tasks} from './tasksData'

export let List = React.createClass({


    addNewTask: function () {
        /*tasks.push({
         title: document.getElementById('title').value,
         priority: document.getElementById('priority').value
         });*/
        console.log(tasks);
        /**
         * TODO delete next line
         */
        //ReactDOM.render(<List list={tasks}/>, document.getElementById('container'));
        //document.getElementById('title').value = '';
    },

    render: function () {
        return (
            <div>
                <form onsubmit={this.addNewTask()}>
                    <dl>
                        <dd>
                            <h4>Add task</h4>
                        </dd>
                        <dd>
                            <h5>Task title</h5>
                            <input type='text' id='title' placeholder='Title'/>
                        </dd>
                        <dd>
                            <h5>Priority</h5>
                            <select id='priority'>
                                <option>normal</option>
                                <option>critical</option>
                            </select>
                        </dd>
                        <dd>
                            <input type='submit' id='submit'/>
                        </dd>
                    </dl>
                </form>
                <ol id='list'>
                    {this.props.list.map((task, index) => (<Task task={task} index={index}/>))}
                </ol>
            </div>);
    }

});