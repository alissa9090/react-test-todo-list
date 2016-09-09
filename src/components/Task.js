import React from 'react';

class Task extends React.Component {
  toogleComplete(e){
    this.props.task.completed.set(!this.props.task.completed.get())
  }
  render(){
    const task = this.props.task
    return (
      <div className="task">
        <input className="completed"
          type="checkbox"
          defaultChecked={task.completed.get()}
          value={task.completed.get()}
          onChange={this.toogleComplete.bind(this)}/>
        <label className="title">{task.title.get()}</label>
        <img className="remove"
          src="http://findicons.com/files/icons/2139/uidesign/16/delete.png"
          onClick={this.props.onDelete} />
      </div>
    )
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired
}

export default Task
