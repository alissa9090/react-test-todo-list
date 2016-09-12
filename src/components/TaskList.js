import React from 'react';
import Task from '../components/Task';
import { observer } from 'mobx-react';
import { FormGroup, FormControl } from 'react-bootstrap';

@observer
class TaskList extends React.Component {
  createTask(e){
    e.preventDefault();
    if(e.keyCode === 13){
      taskStore.createTask(this.props.userId, e.target.value, false)
      e.target.value = ""
    }
  }
  removeTask(task, e){
    e.preventDefault();
    taskStore.removeTask(task)
  }
  render(){
    if(taskStore.isLoading.get()){
      console.log("loading")
      return null
    }
    const userId = this.props.userId
    taskStore.userIdFilter = userId
    return (
      <div class="task-list">
        <FormControl
          type="text"
          placeholder="What needs to be done?"
          className="create-task"
          onKeyUp={this.createTask.bind(this)}/>                 
        {taskStore.tasksFilteredByUser.map(task => <Task
          key={task.id.get()}
          onDelete={this.removeTask.bind(this, task)}
          task={task} /> )}
      </div>
    )
  }
}

TaskList.propTypes = {
  userId: React.PropTypes.number.isRequired
}

export default TaskList
