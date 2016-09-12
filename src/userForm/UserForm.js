import React from 'react';
import { observer } from 'mobx-react';
import UserAddress from './UserAddress';
import UserInfo from './UserInfo';
import UserAddressGeo from './UserAddressGeo';
import UserCompany from './UserCompany';
import { withRouter } from 'react-router';
import { Form } from 'react-bootstrap';

class UserForm extends React.Component {
  titles = {
    create: "Create new User",
    edit: "Edit User Details",
    view: "User Details"
  }
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }
  onCancel(e){
    e.preventDefault()
    if(this.props.user.id.get() > 0){
      userStore.loadUser(this.props.user.id.get())
    }
    this.props.router.goBack()
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.form.validate()
      .then(isValid => isValid
        ? this.onSuccess()
        : this.onError());
  }
  onSuccess(){
    if(this.props.user.id.get() <= 0){
     userStore.addUser(this.props.user)
    }
    this.props.router.goBack()
  }
  onError(){
    console.log('All form errors', this.props.form.errors());
    this.props.form.invalidate('This is a generic error message!');
  }
  render(){
    const {user, form} = this.props
    let {mode} = this.props
    if(user.id.get() <= 0){
      mode = "create"
    }
    return (
      <div>
      <Form horizontal className="user-form main">
        <fieldset>
          <legend>{this.titles[mode]}</legend>
          <UserInfo user={user} form={form} mode={mode}/>
          <fieldset>
            <legend>Address</legend>
            <UserAddress address={user.address} form={form} mode={mode}/>
              <fieldset>
                <legend>Geo</legend>
                <UserAddressGeo geo={user.address.geo} form={form} mode={mode}/>
              </fieldset>
          </fieldset>
          <fieldset>
            <legend>Company</legend>
            <UserCompany company={user.company} form={form} mode={mode}/>
          </fieldset>
        </fieldset>
      </Form>
      <button class={`btn btn-primary ${mode === "view" ? "hidden" : ""}`} onClick={this.onSubmit}>Save</button>
      <button class="btn btn-default" onClick={this.onCancel}>{mode === "view" ? "Go back" : "Cancel"}</button>        
    </div>
    )
  }
}

UserForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  form: React.PropTypes.object.isRequired,
  mode: React.PropTypes.oneOf(['create', 'edit', 'view']).isRequired
}

export default withRouter(UserForm)
