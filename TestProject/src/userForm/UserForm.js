import React from 'react';
import { observer } from 'mobx-react';
import UserAddress from './UserAddress';
import UserInfo from './UserInfo';
import UserAddressGeo from './UserAddressGeo';
import UserCompany from './UserCompany';
import InputField from '../components/InputField'
import { withRouter } from 'react-router';

class UserForm extends React.Component {
  render(){
    const {user, onSave} = this.props
    return (
      <form class="form-horizontal user-form">
        <fieldset>
          <legend>{user.id.get() > 0 ? "Edit user details" : "Create user"}</legend>
          <UserInfo user={user}/>
          <fieldset>
            <legend>Address</legend>
            <UserAddress address={user.address}/>
              <fieldset>
                <legend>Geo</legend>
                <UserAddressGeo geo={user.address.geo}/>
              </fieldset>
          </fieldset>
          <fieldset>
            <legend>Company</legend>
            <UserCompany company={user.company}/>
          </fieldset>
          <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
              <button class="btn btn-default" onClick={this.props.router.goBack}>Cancel</button>
              <button class="btn btn-primary" onClick={onSave}>Save</button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}

UserForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired
}


export default withRouter(UserForm)
