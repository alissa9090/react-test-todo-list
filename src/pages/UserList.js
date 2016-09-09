import React from 'react';
import { Link, withRouter } from 'react-router';
import User from '../components/User';

import { observer } from 'mobx-react';

@observer
class UserList extends React.Component {
  removeUser(user, e){
    e.preventDefault();
    userStore.removeUser(user)
  }
  goToTasks(userId, e){
    e.preventDefault();
    this.props.router.push(`userTasks/${userId}`)
  }
  render(){
    if(userStore.isLoading.get()){
      console.log("loading")
      return null
    }
    return (
      <div className="user-list">
        <h2>Choose a user</h2>
        <Link to="updateUser" className="btn btn-primary">Create new User</Link>
          {userStore.users.map(user => <User
            key={user.id.get()}
            user={user}
            onDelete={this.removeUser.bind(this, user)}
            onClick={this.goToTasks.bind(this, user.id.get())}/> )}
      </div>
    )
  }
}

export default withRouter(UserList)
