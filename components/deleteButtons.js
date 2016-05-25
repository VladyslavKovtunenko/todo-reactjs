import React from 'react'
import {deleteTask} from '../actions/actions'
import {connect} from 'react-redux'

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.delTask = this.delTask.bind(this);
    }

    delTask(e) {
        e.preventDefault();
        this.props.del(this.props.title);
    };

    render() {
        return <button onClick={this.delTask}>Delete</button>
    }
}


const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        del: (value) => {
            dispatch(deleteTask(value))
        }
    }
};

DeleteButton = connect(mapStateToProps, mapDispatchToProps)(DeleteButton);


export default DeleteButton