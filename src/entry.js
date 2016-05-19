import React from 'react'
import ReactDOM from 'react-dom'
import {List} from './listComponent'

ReactDOM.render(
    <List list={[{
    title: 'First task', priority: 'normal'
    },{
    title: 'Second task', priority: 'critical'
    }]}/>,
    document.getElementById('container')
);
