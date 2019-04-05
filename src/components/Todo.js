import React, { Component } from 'react'

// form to input todo
// button to submit todo
// button to delete todo

// make copy of state todo list
// add input todo to copy of state todo list
// handle the change of the input? or no bc we don't need to edit?
// delete that instance of the todo in the state

export default class Todo extends Component {

    render() {
        return (
            <div>
                <li>
                    <p>{this.props.singleTodo}</p>
                    <button onClick={() => this.props.handleDelete(this.props.index)}>delete</button>
                </li>
            </div>
        )
    }
}
