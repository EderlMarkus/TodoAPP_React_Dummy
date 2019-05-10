import React, { Component } from 'react'
import './App.css';
import Todos from './components/ToDos.js';

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

  checkboxClick = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  } 
  render(){
  return (
    <div className="App">
    <h1>APP</h1>
    <Todos checkboxClick = {this.checkboxClick} todos = {this.state.todos}/>
    </div>
  );
}
}

export default App;
