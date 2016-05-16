import React from 'react'
import ReactDOM from 'react-dom'

const tasks = [{title: 'First task', priority: 'normal'}, {title: 'Second task', priority: 'critical'}];
var container = document.getElementById('container');
var App = React.createClass({
    render: function () {
        var string = this.props.list.map((task, i) => (
            <li style={{backgroundColor: task.priority === 'normal' ? 'green' : 'red'}}>{this.props.list[i].title}</li>
        ));

        return React.DOM.p(null, <ol>{string}</ol>);
    }
});

ReactDOM.render(<App list={tasks}/>, document.getElementById('container'));
