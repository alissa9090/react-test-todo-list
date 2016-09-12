import React from 'react';
import { Checkbox } from 'react-bootstrap';

class Task extends React.Component {
  toogleComplete(e){
    this.props.task.completed.set(!this.props.task.completed.get())
  }
  render(){
    const task = this.props.task
    return (
      <div className="task">
        <Checkbox
          defaultChecked={task.completed.get()}
          onChange={this.toogleComplete.bind(this)}
          class="task-check-box">
          {task.title.get()}
        </Checkbox>
        <span title="Delete" class="glyphicon glyphicon-trash remove-task" onClick={this.props.onDelete}></span>
      </div>
    )
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired
}

export default Task
