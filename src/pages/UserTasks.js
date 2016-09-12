import React from 'react';
import Task from '../components/Task';
import User from '../components/User';
import {Link, withRouter} from 'react-router';
import { observer } from 'mobx-react';

@observer
class UserTasks extends React.Component {
  createTask(e){
    if(e.keyCode === 13){
      taskStore.createTask(this.props.params.userId, e.target.value, false)
      e.target.value = ""
    }
  }
  removeTask(task, e){
    e.preventDefault();
    taskStore.removeTask(task)
  }
  render(){
    if(userStore.isLoading.get() || taskStore.isLoading.get()){
      console.log("loading")
      return null
    }
    const userId = parseInt(this.props.params.userId)
    const user = userStore.getById(userId)
    taskStore.userIdFilter = userId
    return(
      <div class="user-tasks">
        <div class="page-header">
          <h1>Tasks</h1>
        </div>
        <div className="main">
          <User key={user.id.get()}
            showDetails={true}
            editable={true}
            user={user}/>
          <input type="text"
            className="create-task"
            onKeyUp={this.createTask.bind(this)}></input>
          {taskStore.tasksFilteredByUser.map(task => <Task
            key={task.id.get()}
            onDelete={this.removeTask.bind(this, task)}
            task={task} /> )}
          <button class="btn btn-default" onClick={this.props.router.goBack}>Go back</button>
        </div>
      </div>     
    )
  }
}

export default withRouter(UserTasks)
