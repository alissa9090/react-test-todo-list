import React from 'react'
import {observer} from 'mobx-react'
import asForm from '../components/asForm'
import InputField from '../components/InputField'

@observer
class UserAddress extends React.Component {
  render () {
    const {address, updateProperty} = this.props
    return (
      <div>
        <InputField id="address-street" label="Street" name="street" value={address.street.get()} onChange={updateProperty}/>
        <InputField id="address-suite" label="Suite" name="suite" value={address.suite.get()} onChange={updateProperty}/>
        <InputField id="address-city" label="City" name="city" value={address.city.get()} onChange={updateProperty}/>
        <InputField id="address-zipcode" label="Zipcode" name="zipcode" value={address.zipcode.get()} onChange={updateProperty}/>
      </div>
    )
  }
}

UserAddress.propTypes = {
  address: React.PropTypes.object.isRequired
}

export default asForm(UserAddress, 'address')
