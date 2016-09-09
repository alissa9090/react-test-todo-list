import React from 'react';
import {observer} from 'mobx-react';
import UserForm from '../userForm/UserForm';
import { observable } from "mobx"

@observer
class UpdateUser extends React.Component {
  componentWillMount(){
    this.user = userStore.getNewUser()
  }
  render(){
    if(userStore.isLoading.get()){
      console.log("loading")
      return null
    }
    if(this.props.params.userId){
      const userId = parseInt(this.props.params.userId)
      this.user = userStore.getById(userId)
    }
    return(
      <UserForm user={this.user}/>
    )
  }
}

export default UpdateUser
