import React from 'react'
import ReactDOM from 'react-dom'

const tasks = [{title: 'First task', priority: 'normal'}, {title: 'Second task', priority: 'critical'}];
var container = document.getElementById('container');
var App = React.createClass({
    render: function () {
        console.log(this.props.list);
        console.log(this.props.list.length);

        var string = [];

        for (let i = 0; i < this.props.list.length; i++) {
            if (this.props.list[i].priority === 'normal') {
                string[i] = <li style={{backgroundColor: 'green'}}>{this.props.list[i].title}</li>;
            } else {
                string[i] = <li style={{backgroundColor: 'red'}}>{this.props.list[i].title}</li>;
            }
        }

        var tmp = <ol>{string}</ol>;
        return React.DOM.p(null, tmp);
    }
});

ReactDOM.render(<App list={tasks}/>, document.getElementById('container'));
