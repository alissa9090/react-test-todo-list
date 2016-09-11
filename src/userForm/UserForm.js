import React from 'react';
import { observer } from 'mobx-react';
import UserAddress from './UserAddress';
import UserInfo from './UserInfo';
import UserAddressGeo from './UserAddressGeo';
import UserCompany from './UserCompany';
import { withRouter } from 'react-router';

class UserForm extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }
  onCancel(e){
    e.preventDefault()
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
    return (
      <form className="form-horizontal user-form">
        <fieldset>
          <legend>{user.id.get() > 0 ? "Edit user details" : "Create user"}</legend>
          <UserInfo user={user} form={form}/>
          <fieldset>
            <legend>Address</legend>
            <UserAddress address={user.address} form={form}/>
              <fieldset>
                <legend>Geo</legend>
                <UserAddressGeo geo={user.address.geo} form={form}/>
              </fieldset>
          </fieldset>
          <fieldset>
            <legend>Company</legend>
            <UserCompany company={user.company} form={form}/>
          </fieldset>
          <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
              <button class="btn btn-primary" onClick={this.onSubmit}>Save</button>
              <button class="btn btn-default" onClick={this.onCancel}>Cancel</button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}

UserForm.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default withRouter(UserForm)
