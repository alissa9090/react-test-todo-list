import React from 'react';
import NewUserButton from '../user/NewUserButton';
import UserTable from '../user/UserTable';
import UserStore from '../../stores/UserStore';
import UserApi from '../../api/UserApi';
import RestClient from '../../api/RestClient';

class UsersView extends React.Component {
  userStore
  constructor(){
    super();
    let restClient = new RestClient("https://jsonplaceholder.typicode.com")
    let userApi = new UserApi(restClient)

    this.userStore = new UserStore(userApi)
  }
  componentDidMount(){
    this.userStore.loadUsers()
  }
  render(){
    return (
      <div>
        <div className="page-header">
          <h1>Users</h1>
        </div>
        <NewUserButton/>
          <div className="main user-list">
            <UserTable users={this.userStore.users}></UserTable>
          </div>
      </div>
    )
  }
}

export default UsersView
