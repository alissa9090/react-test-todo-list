import React from 'react'
import {observer} from 'mobx-react'
import asForm from '../components/asForm'
import InputField from '../components/InputField'

@observer
class UserInfo extends React.Component {
  render () {
    const {updateProperty, form, mode} = this.props
    return (
      <div>
        <InputField id="user-name" label={form.$('name').label} name="name" value={form.$('name').value} onChange={updateProperty} error={form.$('name').error} mode={mode}/>
        <InputField id="user-username" label={form.$('username').label} name="username" value={form.$('username').value} onChange={updateProperty} error={form.$('username').error} mode={mode}/>
        <InputField id="user-email" label={form.$('email').label} name="email" value={form.$('email').value} onChange={updateProperty} error={form.$('email').error} mode={mode}/>
        <InputField id="user-phone" label={form.$('phone').label} name="phone" value={form.$('phone').value} onChange={updateProperty} error={form.$('phone').error} mode={mode}/>
        <InputField id="user-website" label={form.$('website').label} name="website" value={form.$('website').value} onChange={updateProperty} error={form.$('website').error} mode={mode}/>
        <InputField id="user-photo-url" label={form.$('photoUrl').label} name="photoUrl" value={form.$('photoUrl').value} onChange={updateProperty} error={form.$('photoUrl').error} mode={mode}/>
      </div>
    )
  }
}

UserInfo.propTypes = {
  user: React.PropTypes.object.isRequired,
  form: React.PropTypes.object.isRequired,
  updateProperty: React.PropTypes.func.isRequired,
  mode: React.PropTypes.oneOf(['create', 'edit', 'view']).isRequired
}

export default asForm(UserInfo, 'user')
