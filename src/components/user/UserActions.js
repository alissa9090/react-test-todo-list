import React from 'react';
import { withRouter } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class UserActions extends React.Component {
  constructor(){
    super();
    this.goToUserTodosView = this.goToUserTodosView.bind(this)
    this.goToUserFormView = this.goToUserFormView.bind(this)
    this.goToUserFormEdit = this.goToUserFormEdit.bind(this)
  }
  goToUserTodosView(userId, e){
    e.preventDefault();
    this.props.router.push(`userTodos/${userId}`)
  }
  goToUserFormView(userId, e){
    e.preventDefault();
    this.props.router.push(`userForm/view/${userId}`)
  }
  goToUserFormEdit(userId, e){
    e.preventDefault();
    this.props.router.push(`userForm/edit/${userId}`)
  }
  render(){
    let {userId, handleUserRemove} = this.props
    return(
      <DropdownButton title="Actions" id="bg-vertical-dropdown-1" className="actions">
        <MenuItem eventKey={userId} onSelect={this.goToUserTodosView}>Todos</MenuItem>
        <MenuItem eventKey={userId} onSelect={this.goToUserFormEdit}>Edit</MenuItem>
        <MenuItem eventKey={userId} onSelect={this.goToUserFormView}>View</MenuItem>
        <MenuItem eventKey={userId} onSelect={handleUserRemove}>Delete</MenuItem>
      </DropdownButton>
    )
  }
}

UserActions.propTypes = {
  userId: React.PropTypes.number.isRequired,
  handleUserRemove: React.PropTypes.func.isRequired
}

export default withRouter(UserActions)
