import React from 'react'
import ReactDOM from 'react-dom'
import {Task} from './taskComponent'
import {tasks} from './tasksData'

export let List = React.createClass({

    statics: {
        addNewTask: () => {
            tasks.push({
                title: document.getElementById('title').value,
                priority: document.getElementById('priority').value
            });
            /**
             * TODO delete next line
             */
            ReactDOM.render(<List list={tasks}/>, document.getElementById('container'));
            document.getElementById('title').value = '';
        }
    },

    render: function () {
        return <ol id='list'>{this.props.list.map((task, index) => (<Task task={task} index={index}/>))}</ol>;
    }

});