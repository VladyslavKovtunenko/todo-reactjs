import React from 'react'
import ReactDOM from 'react-dom'
console.log(document.getElementById('container'));

var container = document.getElementById('container');
var App = React.createClass({
    render: function () {
        return <h1>Hello, world!</h1>;
    }
});

ReactDOM.render(<App />, document.getElementById('container'));
