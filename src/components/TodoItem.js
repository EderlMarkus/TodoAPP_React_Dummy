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
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

