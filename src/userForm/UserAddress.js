import React from 'react'
import {observer} from 'mobx-react'
import asForm from '../components/asForm'
import InputField from '../components/InputField'

@observer
class UserAddress extends React.Component {
  render () {
    const {form, updateProperty} = this.props
    return (
      <div>
        <InputField id="address-street" label={form.$('street').label} name="street" value={form.$('street').value} onChange={updateProperty} error={form.$('street').error}/>
        <InputField id="address-suite" label={form.$('suite').label} name="suite" value={form.$('suite').value} onChange={updateProperty} error={form.$('suite').error}/>
        <InputField id="address-city" label={form.$('city').label} name="city" value={form.$('city').value} onChange={updateProperty} error={form.$('city').error}/>
        <InputField id="address-zipcode" label={form.$('zipcode').label} name="zipcode" value={form.$('zipcode').value} onChange={updateProperty} error={form.$('zipcode').error}/>
      </div>
    )
  }
}

UserAddress.propTypes = {
  form: React.PropTypes.object.isRequired,
  address: React.PropTypes.object.isRequired
}

export default asForm(UserAddress, 'address')
