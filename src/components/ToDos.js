import React, { Component } from 'react'
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';

 class ToDos extends Component {
    
  render() {
    return this.props.todos.map((todo) =>(
         <TodoItem delTodo = {this.props.delTodo} checkboxClick = {this.props.checkboxClick} key={todo.id} todo={todo}/>
      ));
  }
}

//PropTypes
ToDos.propTypes = {
    todos: PropTypes.array.isRequired,
    checkboxClick: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,

}

export default ToDos;