import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" } //狀態初始化

        this.handleChange = this.handleChange.bind(this);
        this.addItems = this.addItems.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    addItems(todo) {
        if (todo.length > 0) {
            this.props.addItems(todo);
            this.setState({ value: "" }) //回歸原始狀態
        }

    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="btn" onClick={() => this.addItems(this.state.value)} >Submit</button>
            </div>
        )
    }
}
