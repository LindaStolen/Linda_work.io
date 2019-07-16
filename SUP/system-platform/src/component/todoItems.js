import React, { Component } from 'react'

export default class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
    }
    removeTodo(id) {
        this.props.removeTodo(id)
    }
    render() {
        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>remove</button> {this.props.todo.text}
            </div>
        )
    }
}
