import React from 'react'
import {connect} from 'react-redux'
import DeleteButton from './deleteButtons'


class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol>
                {this.props.tasks.map((task) => (
                    <li>
                        {task.title} <DeleteButton title={task.title}/>
                    </li>
                ))}
            </ol>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

Task = connect(mapStateToProps)(Task);

export default Task