import React, { Component } from 'react'
import Header from './component/head'
import TodoInput from './component/todoInput'
import TodoItems from './component/todoItems'
import './css/header.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], //設定todos是甚麼東西
      //所以todos是陣列,裡面有很多小物件
      nextId: 0 //id從多少開始
      //而id是物件裡面的屬性
    }

    this.addItems = this.addItems.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }
  addItems(todoText) {
    let todos = this.state.todos.slice();

    todos.push({ id: this.state.nextId, text: todoText })
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId, //先加後執行
    })
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
    console.log("id: " + id)
  }
  render() {
    // console.log(this.state.nextId);
    return (
      <div className="container">
        <Header />
        <TodoInput todoText="" addItems={this.addItems} />
        <ul>
          {
            this.state.todos.map((todo) => {
              return <TodoItems todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
            })
          }
        </ul>
      </div>
    )
  }
}

