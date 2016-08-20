import React from 'react';

class Task extends React.Component {
  render(){
    return (
      <div className="checkbox">
        <input type="checkbox" checked={this.props.completed} readOnly={true}/>
        <label>{this.props.title}</label>
      </div>
    )
  }
}

Task.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
}

export default Task
