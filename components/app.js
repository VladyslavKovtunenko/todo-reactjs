import React from 'react'
import {Task} from './task'
import {InputTask} from './inputTask'

export class App extends React.Component {
    constructor(props) {
        super(props);
        //this.tasks = store.store.getState();
        console.log(this.props);

    }


    /*render(){
     return (
     <div>
     <InputTask store={store}/>
     <ol>
     {this.tasks.map((task) => (
     <li>
     <Task task={task}/>
     </li>
     ))}
     </ol>
     </div>
     )
     }*/
    render() {
        return <div></div>
    }
}
const mapStateToProps = (store) => {
    console.log(store);
    tasks = store.getStore();
};

const App = connect(mapStateToProps)(Task);