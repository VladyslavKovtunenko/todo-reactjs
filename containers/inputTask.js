import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions/actions'


export let InputTask = ({dispatch}) => {
    let input;
    return (
        <form onSubmit={
            e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTask(input.value));
                input.value = '';
            }
        }>
            <dl>
                <dd>
                    <h4>Add task</h4>
                </dd>
                <dd>
                    <h5>Task title</h5>
                    <input ref={node => {input = node}}/>
                </dd>
                <dd>
                    <select>
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
};

InputTask = connect()(InputTask);
