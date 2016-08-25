import React from 'react';
import Task from '../components/Task';
import User from '../components/User';
import {Link} from 'react-router';
import userStore from '../store/UserStore';
import taskStore from '../store/TaskStore';
import { observer } from 'mobx-react';

@observer
class UserTasks extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     user: getUserById,
  //     tasks: []
  //   }
  // }
  // componentDidMount() {
  //   const { userId } = this.props.params;
  //   const userSource = `https://jsonplaceholder.typicode.com/users?id=${userId}`
  //   this.userServerRequest = $.get(userSource, function (result) {
  //     this.setState({
  //       user: result
  //     });
  //   }.bind(this));
  //
  //   const tasksSource = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  //   this.tasksServerRequest = $.get(tasksSource, function (result) {
  //     this.setState({
  //       tasks: result
  //     });
  //   }.bind(this));
  // }
  // componentWillUnmount() {
  //   this.userServerRequest.abort();
  //   this.tasksServerRequest.abort();
  // }
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
  toogleComplete(task){
    task.completed = !task.completed
  }
  render(){
    const userId = parseInt(this.props.params.userId)
    const user = userStore.getUserById(userId)
    taskStore.userId = userId
    const filteredTasks = taskStore.tasksFilteredByUser
    const userRendered = user ? <User key={user.id} showDetails={true} user={user} /> : ""
    return(
      <div className="user-tasks">
        <Link to="/" className="btn btn-primary">Choose a new user</Link>
        {userRendered}
        <input type="text" className="create-task" onKeyUp={this.createTask.bind(this)}></input>
        {filteredTasks.map(task => <Task
          key={task.id}
          onComplete={this.toogleComplete.bind(this, task)}
          onDelete={this.removeTask.bind(this, task)}
          completed={task.completed}
          {...task} /> )}
      </div>
    )
  }
}

export default UserTasks
