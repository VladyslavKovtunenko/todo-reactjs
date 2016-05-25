import React from 'react'
import Task from './task'
import InputTask from './inputTask'
import {connect} from 'react-redux'


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <InputTask/>
                <Task/>
            </div>
        )
    }

}
/*const mapStateToProps = (store) => {
    return {
        tasks: store
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => {
            dispatch(value)
        }
    }
};



App = connect(mapStateToProps)(Task);
 App = connect(mapStateToProps, mapDispatchToProps)(Task)(InputTask);*/

export default App;