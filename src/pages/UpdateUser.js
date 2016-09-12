import React from 'react';
import {observer} from 'mobx-react';
import UserForm from '../userForm/UserForm';
import { observable } from "mobx"
import ajv from 'ajv';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';
import ActionsPanel from '../components/ActionsPanel';
import { withRouter } from 'react-router';

@observer
class UpdateUser extends React.Component {
  constructor(){
    super();
    this.removeUser = this.removeUser.bind(this);
  }
  removeUser(e){
    e.preventDefault();
    if(confirm("Are you sure?")){
      if(this.user.id.get()>0){
        userStore.removeUser(this.user)
      }
      this.props.router.push("/")
    }
  }
  componentWillMount(){
    this.user = userStore.getNewUser()
  }
  render(){
    if(userStore.isLoading.get()){
      console.log("loading")
      return null
    }
    let userId = 0
    if(this.props.params.userId){
      userId = parseInt(this.props.params.userId)
      this.user = userStore.getById(userId)
      if(!this.user){
        return null
      }
    }
    const plugins = {
      dvr: {
        package: validatorjs
      },
      svk: {
        package: ajv
      }
    }
    const schema = {
      type: 'object',
      properties: {
        email: { type: 'string', format: 'email', minLength: 5, maxLength: 20 }
      }
    }
    const fields = this.user.getFields()
    const form = new Form({ plugins, schema, fields })
    return(
      <div class="update-user">
        <div class="page-header">
          <h1>User form</h1>
          <ActionsPanel userId={userId} onDeleteClick={this.removeUser}></ActionsPanel>
        </div>
        <UserForm user={this.user} form={form} mode={this.props.params.mode}/>
      </div>
    )
  }
}

export default withRouter(UpdateUser)
