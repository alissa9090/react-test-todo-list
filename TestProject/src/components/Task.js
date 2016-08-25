import React from 'react';

class Task extends React.Component {
  render(){
    return (
      <div className="task">
        <input type="checkbox" defaultChecked={this.props.completed}
          value={this.props.completed}
          onChange={this.props.onComplete}/>
        <label>{this.props.title}</label>
        <img className="remove"
          src="http://findicons.com/files/icons/2139/uidesign/16/delete.png"
          onClick={this.props.onDelete} />
      </div>
    )
  }
}

Task.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onComplete: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired
}

export default Task
