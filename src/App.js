import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/ToDos.js';
import Header from './components/layout/Header.js';
import AddTodo from './components/AddTodo.js';
import About from './components/page/About';

//import uuid from 'uuid';
import Axios from 'axios';

class App extends Component {

  state = {
    todos: [

  
    ]
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
    .then(res => this.setState({todos: res.data}))
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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  addtodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos/',{title: title, completed: false})
    .then(res =>  this.setState({todos: [...this.state.todos, res.data]})
    )
  }

  render(){
  return (
    <Router>
    <div className = "App">
    <div className = "container">
    <Header />
    <Route exact path='/' render={props => (
      <React.Fragment>
        <AddTodo AddTodo ={this.addtodo}/>
        <Todos delTodo = {this.delTodo} checkboxClick = {this.checkboxClick} todos = {this.state.todos}/>
      </React.Fragment>
    )} />
    <Route path ="/about" component={About}/>
    </div>
    </div>
    </Router>
  );
}
}

export default App;
