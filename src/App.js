import React, { Component } from 'react';
import Todo from './components/Todo.js'

// const TodoListData = () => {
//     return <Todo project={state.todoList} />
// }

class App extends Component {
    state = {
        todoList: []
    }

    handleChange = (e) => {
        this.setState({value: e.target.value });
    }


    addTodoToList = () => {
        let copyTodoList = [...this.state.todoList]
        copyTodoList.push(this.state.value);
        this.setState({todoList: copyTodoList})
        // console.log(this.state.copyTodoList)
        // e.preventDefault()
    }

    handleDelete = (i) => {
        let copyTodoList = [...this.state.todoList]
        copyTodoList.splice(i, 1)
        this.setState({todoList: copyTodoList})
    }

    render() {
        return (
            <div>
                    <label >add todo: </label>
                    <input type="text" name="todo" onChange={this.handleChange}/>
                    <button onClick={this.addTodoToList} >submit</button>
                {
                    this.state.todoList.map((todo, i) => {
                        return (
                            <Todo
                                singleTodo={todo}
                                handleDelete={this.handleDelete}
                                key={i}
                                index={i}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
