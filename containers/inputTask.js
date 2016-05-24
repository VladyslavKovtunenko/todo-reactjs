import React from 'react'
import {addTask} from '../actions/actions'


export let InputTask = (store) => {
    store = store.store.store;
    console.log(store);
    let input;
    return (
        <form onSubmit={
            e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                store.dispatch(addTask(input.value));
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
