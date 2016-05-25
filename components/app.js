import React from 'react'
import {Task} from './task'
import {InputTask} from './inputTask'
import {connect} from 'react-redux'


class App extends React.Component {
    constructor(props) {
        super(props);
        //this.tasks = store.store.getState();
        console.log(this.props);
        //console.log(tasks);
    }

// <InputTask store={store}/>
    render() {
     return (
         <div>

             <ol>
                 {this.tasks.map((task) => (
                     <li>
                         <Task task={task}/>
                     </li>
                 ))}
             </ol>
         </div>
     )
    }

}
const mapStateToProps = (store) => {
    console.log(store);
    return {tasks: store.getState()}
};

App = connect(mapStateToProps)(Task);

export default App