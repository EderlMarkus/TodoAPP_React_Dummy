import React, { Component } from 'react'
import './App.css';
import Todos from './components/ToDos.js';
import Header from './components/layout/Header.js';
import AddTodo from './components/AddTodo.js';

class App extends Component {
  state = {
    todos: [
      {
      title: 'take out trash', 
      id: 1,
      completed: false
    },
    {
      title: 'dinner', 
      id: 2,
      completed: false
    },
    {
      title: 'Meeting', 
      id: 3,
      completed: false
    }
  
    ]
  }

  //Toogle Complete 
  checkboxClick = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  
  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render(){
  return (
    <div className = "App">
    <div className = "container">
    <Header />
    <AddTodo />
    <Todos delTodo = {this.delTodo} checkboxClick = {this.checkboxClick} todos = {this.state.todos}/>
    </div>
    </div>
  );
}
}

export default App;
