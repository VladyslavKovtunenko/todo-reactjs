import React from 'react'
import ReactDOM from 'react-dom'

let tasks = [{title: 'First task', priority: 'normal'},
    {title: 'Second task', priority: 'critical'}];

let addNewTask = document.getElementById('submit');

let Task = React.createClass({
    render: function () {
        return <li
            style={{backgroundColor: this.props.task.priority=== 'normal' ? 'green' : 'red'}}>{this.props.task.title}</li>;
    }
});

let List = React.createClass({
    render: function () {
        return <ol>{this.props.list.map((task, index) => (<Task task={task} index={index}/>))}</ol>;
    }

});

document.body.onload = () => ReactDOM.render(<List list={tasks}/>, document.getElementById('container'));
addNewTask.onclick = () => {
    let obj = {};
    obj.title = document.getElementById('title').value;
    obj.priority = document.getElementById('priority').value;
    tasks.push(obj);
    ReactDOM.render(<List list={tasks}/>, document.getElementById('container'));
};
