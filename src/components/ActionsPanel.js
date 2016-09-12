import React from 'react';
import { Link } from 'react-router';

class ActionsPanel extends React.Component {
  render() {
    return (
      <div class="actions-panel">
        <Link title="Edit" to={`updateUser/edit/${this.props.userId}`} className="glyphicon glyphicon-edit"></Link>
        <Link title="View" to={`updateUser/view/${this.props.userId}`} className="glyphicon glyphicon-eye-open"></Link>
        <span title="Delete" class="glyphicon glyphicon-trash" onClick={this.props.onDeleteClick}></span>
      </div>
    )
  }
}

ActionsPanel.propTypes = {
  userId: React.PropTypes.number.isRequired,
  onDeleteClick: React.PropTypes.func.isRequired
}

export default ActionsPanel
