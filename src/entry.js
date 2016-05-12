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
            string[i] = React.createElement('li', null, this.props.list[i].title);
        }
        var tmp = React.createElement('ol', null, string);
        // console.log(React.DOM.p(null, tmp));
        return React.DOM.p(null, tmp);
    }
});

ReactDOM.render(<App list={tasks}/>, document.getElementById('container'));
