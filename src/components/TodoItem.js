import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TodoItem extends Component {
    getStyle = () => {
       return {
           textDecoration: this.props.todo.completed ? 'line-through' : 'none',
           background: '#f4f4f4',
           borderBottom: '1px #ccc dotted',
           padding: '10px'
       }
    }

    
  render() {
    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
        <input onChange={this.props.checkboxClick.bind(this, id)} type='checkbox' />{' '}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    checkboxClick: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}



const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}