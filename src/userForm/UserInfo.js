import React from 'react'
import {observer} from 'mobx-react'
import asForm from '../components/asForm'
import InputField from '../components/InputField'

@observer
class UserInfo extends React.Component {
  render () {
    const {user, updateProperty} = this.props
    return (
      <div>
        <InputField id="user-name" label="Name" name="name" value={user.name.get()} onChange={updateProperty}/>
        <InputField id="user-username" label="Username" name="username" value={user.username.get()} onChange={updateProperty}/>
        <InputField id="user-email" label="Email" name="email" value={user.email.get()} onChange={updateProperty}/>
        <InputField id="user-phone" label="Phone" name="phone" value={user.phone.get()} onChange={updateProperty}/>
        <InputField id="user-website" label="Website" name="website" value={user.website.get()} onChange={updateProperty}/>
      </div>
    )
  }
}

UserInfo.propTypes = {
  user: React.PropTypes.object.isRequired,
  updateProperty: React.PropTypes.func.isRequired
}

export default asForm(UserInfo, 'user')
