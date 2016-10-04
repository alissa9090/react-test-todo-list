import React from 'react';
import { FormControl } from 'react-bootstrap';

class TodoNewForm extends React.Component {
  constructor(){
    super()
    this.createTodo = this.createTodo.bind(this)
  }
  createTodo(e){
    e.preventDefault();
    if(e.keyCode === 13){
      this.props.handleTodoCreate(e.target.value)
      e.target.value = ""
    }
  }
  render(){
    return (
      <FormControl
        type="text"
        placeholder="What needs to be done?"
        className="create-todo"
        onKeyUp={this.createTodo}/>
    )
  }
}

TodoNewForm.propTypes = {
  handleTodoCreate: React.PropTypes.func.isRequired
}

export default TodoNewForm
