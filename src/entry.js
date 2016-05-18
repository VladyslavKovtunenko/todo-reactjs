import React from 'react'
import ReactDOM from 'react-dom'
import {List} from './listComponent'

/**
 * TODO delete document.body.onload
 */
document.body.onload = () => ReactDOM.render(<List list={[{
                            title: 'First task', priority: 'normal'},{
                            title: 'Second task', priority: 'critical'}]}/>,
    document.getElementById('container'));
