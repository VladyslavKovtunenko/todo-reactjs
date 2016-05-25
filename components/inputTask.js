import React from 'react'
import {addTask} from '../actions/actions'
import {connect} from 'react-redux'

class InputTask extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.input = '';
        this.submit = this.submit.bind(this);
        console.log(this.props);
    }

    submit(e) {
        e.preventDefault();
        console.log(this.input.value);
        if (this.input.value !== '') {

            this.props.add(this.input.value);
        }
        this.input.value = '';
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <dl>
                    <dd>
                        <h4>Add task</h4>
                    </dd>
                    <dd>
                        <h5>Task title</h5>
                        <input ref={node => {this.input = node}}/>
                    </dd>
                    <dd>
                        <input type='submit' value="Submit"/>
                    </dd>
                </dl>
            </form>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => {
            dispatch(addTask(value))
        }
    }
};

InputTask = connect(mapStateToProps, mapDispatchToProps)(InputTask);

export default InputTask