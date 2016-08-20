import React from 'react';
import {Link} from 'react-router';
import User from '../components/User';
import userStore from '../store/UserStore';
import { observer } from 'mobx-react';

@observer
class UserList extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     users: []
  //   }
  // }
  // componentDidMount() {
  //   let sorce = "https://jsonplaceholder.typicode.com/users";
  //   this.serverRequest = $.get(sorce, function (result) {
  //     this.setState({
  //       users: result
  //     });
  //   }.bind(this));
  // }
  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }
  render(){
    return (
      <div className="user-list">
        <h2>Choose a user</h2>
        {userStore.users.map(user=> (
          <Link to={`userTasks/${user.id}`} key={user.id}>
            <User user={user} />
          </Link>))}
      </div>
    )
  }
}

export default UserList
