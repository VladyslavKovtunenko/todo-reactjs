import React from 'react'
import {addTask} from '../actions/actions'
import {dispatch} from '../store/store'


export class InputTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputTitle: '',
            inputPriority: 'normal'
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
    }

    handlePriorityChange(event) {
        this.setState({inputPriority: event.target.value});
    }

    handleTitleChange(event) {
        this.setState({inputTitle: event.target.value});
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(addTask(this.state.inputTitle));
            }}>
                <dl>
                    <dd>
                        <h4>Add task</h4>
                    </dd>
                    <dd>
                        <h5>Task title</h5>
                        <input type='text' value={this.state.inputTitle} onChange={this.handleTitleChange}/>
                    </dd>
                    <dd>
                        <select value={this.state.inputPriority} onChange={this.handlePriorityChange}>
                            <option>normal</option>
                            <option>critical</option>
                        </select>
                    </dd>
                    <dd>
                        <input type='submit' value="Submit"/>
                    </dd>
                </dl>
            </form>
        );
    }
}
