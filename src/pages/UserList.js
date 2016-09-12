import React from 'react';
import { Link, withRouter } from 'react-router';
import User from '../components/User';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { observer } from 'mobx-react';

@observer
class UserList extends React.Component {
  constructor(){
    super();
    this.goToTasks = this.goToTasks.bind(this)
    this.removeUser = this.removeUser.bind(this);
    this.goToUserViewForm = this.goToUserViewForm.bind(this)
    this.goToUserEditForm = this.goToUserEditForm.bind(this);
  }
  removeUser(user, e){
    e.preventDefault();
    userStore.removeUser(user)
  }
  goToTasks(userId, e){
    e.preventDefault();
    this.props.router.push(`userTasks/${userId}`)
  }
  goToUserViewForm(userId, e){
    e.preventDefault();
    this.props.router.push(`updateUser/view/${userId}`)
  }
  goToUserEditForm(userId, e){
    e.preventDefault();
    this.props.router.push(`updateUser/edit/${userId}`)
  }
  render(){
    if(userStore.isLoading.get()){
      console.log("loading")
      return null
    }
    return (
      <div>
        <div class="page-header">
          <h1>Users</h1>
        </div>
        <Link to="updateUser/create" className="btn btn-primary new-user">New User</Link>
        <div className="main user-list">
          <table class="table  table-hover">
            <tbody>
            {userStore.users.map(user => <tr key={user.id.get()}>
                <td><img height="80" src={user.photoUrl.get()}/></td>
                <td><h3>{user.name.get()}</h3></td>
                <td>
                  <DropdownButton title="Actions" id="bg-vertical-dropdown-1" className="actions">
                    <MenuItem eventKey={user.id.get()} onSelect={this.goToTasks}>Tasks</MenuItem>
                    <MenuItem eventKey={user.id.get()} onSelect={this.goToUserEditForm}>Edit</MenuItem>
                    <MenuItem eventKey={user.id.get()} onSelect={this.goToUserViewForm}>View</MenuItem>
                    <MenuItem eventKey={user} onSelect={this.removeUser}>Delete</MenuItem>
                  </DropdownButton>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

// <User
// key={user.id.get()}
// user={user}
// onDelete={this.removeUser.bind(this, user)}
// onClick={this.goToTasks.bind(this, user.id.get())}/>

export default withRouter(UserList)
