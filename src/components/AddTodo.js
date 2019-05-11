import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class AddTodo extends Component {

state = {
    title: '',
    subtitle: ''
}

onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({title: ''})
}
onChange = (e) =>{
this.setState({[e.target.name]: e.target.value});
}

  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit} style={{display: 'flex'}}>  
          <input value={this.state.title} onChange={this.onChange} style={{flex: '10', padding: '5px'}} type="text" name="title" placeholder="Add todo ..." />
          <input value={this.state.subtitle} onChange={this.onChange} style={{flex: '10', padding: '5px'}} type="text" name="subtitle" placeholder="Add todo ..." />
          <input type="submit" value="Submit" className='btn' style={{flex: '1'}} />
        </form>
      </div>
    );
  }
}


//PropTypes
AddTodo.propTypes = {
  AddTodo: PropTypes.func.isRequired,
}
