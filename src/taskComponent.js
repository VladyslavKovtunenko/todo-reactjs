import React from 'react'

export let Task = React.createClass({
    render: function () {
        return (
            <li style={{backgroundColor: this.props.task.priority=== 'normal' ? 'green' : 'red'}}>
                {this.props.task.title}
                <button type='button' data-action='delete' id={this.props.index}>Delete</button>
            </li>);
    }
});