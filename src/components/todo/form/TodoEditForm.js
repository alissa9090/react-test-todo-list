import React from 'react';
import { Checkbox } from 'react-bootstrap';
import { observer } from 'mobx-react';

@observer
class TodoEditForm extends React.Component {
  constructor(){
    super()
    this.toogleComplete = this.toogleComplete.bind(this)
  }
  toogleComplete(e){
    this.props.todo.completed = !this.props.todo.completed
    this.props.todo.save()
  }
  render(){
    const {todo} = this.props
    return (
      <div className="todo">
        <Checkbox
          checked={todo.completed}
          onChange={this.toogleComplete}
          className="todo-check-box">
          {todo.title}
        </Checkbox>
        <span title="Delete" className="glyphicon glyphicon-trash remove-todo" onClick={todo.delete.bind(todo)}></span>
      </div>
    )
  }
}

TodoEditForm.propTypes = {
  todo: React.PropTypes.object.isRequired
}

export default TodoEditForm
