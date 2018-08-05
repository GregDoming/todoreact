import React, {Component} from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {list:[] }
        this.addToDo = this.addToDo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    addToDo (value) {
        const list = this.state.list; //const (list) = this.list   Same thing with destructoring.
        list.push(value);
        this.setState({list: list})

    }
    deleteTodo(id) {
        const list = this.state.list;
        const results = [...list.slice(0, id), ...list.slice(id + 1)];
        this.setState({list: results});
    }

    render() {
        return <div>
            <AddToDo addToDo={this.addToDo}/>
            <ToDoList list={this.state.list} deleteTodo={this.deleteTodo}/>
        </div>;
    }
}


export default App;