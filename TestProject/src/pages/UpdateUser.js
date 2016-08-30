import React from 'react';
import { withRouter } from 'react-router';
import {observer} from 'mobx-react';
import UserForm from '../userForm/UserForm';
import User from "../store/entities/User"
import Address from "../store/entities/Address"
import Geo from "../store/entities/Geo"
import Company from "../store/entities/Company"
import { observable, computed } from "mobx"

@observer
class UpdateUser extends React.Component {
  constructor () {
    super()
    this.onSave = this.onSave.bind(this)
  }
  componentWillMount(){
    this.user = userStore.getNewUser()
  }
  onSave(e) {
    e.preventDefault()
    if(this.user.id.get() <= 0){
      userStore.addUser(this.user)
    }
    this.props.router.goBack()
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
      <UserForm user={this.user} onSave={this.onSave}/>
    )
  }
}

export default withRouter(UpdateUser)
