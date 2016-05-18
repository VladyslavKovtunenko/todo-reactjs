import React from 'react'

export let Task = React.createClass({
    render: function () {
        return (
            <div style={{backgroundColor: this.props.task.priority=== 'normal' ? 'green' : 'red'}}>
                {this.props.task.title}
            </div>);
    }
});