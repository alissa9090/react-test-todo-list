import React from 'react';
import {observer} from 'mobx-react';
import UserForm from '../userForm/UserForm';
import { observable } from "mobx"
//import form from '../userForm/Form';
import ajv from 'ajv';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';

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
    const plugins = {
      dvr: {
        package: validatorjs
      },
      svk: {
        package: ajv
      }
    }
    const fields = this.user.getFields()
    const form = new Form({ plugins, fields })
    return(
      <UserForm user={this.user} form={form}/>
    )
  }
}

export default UpdateUser
