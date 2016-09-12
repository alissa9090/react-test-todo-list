import React from 'react'
import {observer} from 'mobx-react'
import asForm from '../components/asForm'
import InputField from '../components/InputField'

@observer
class UserAddressGeo extends React.Component {
  render () {
    const {form, updateProperty, mode} = this.props
    return (
      <div>
        <InputField id="address-geo-lat" label={form.$('lat').label} name="lat" value={form.$('lat').value} onChange={updateProperty} error={form.$('lat').error} mode={mode}/>
        <InputField id="address-geo-lng" label={form.$('lng').label} name="lng" value={form.$('lng').value} onChange={updateProperty} error={form.$('lng').error} mode={mode}/>
      </div>
    )
  }
}

UserAddressGeo.propTypes = {
  form: React.PropTypes.object.isRequired,
  geo: React.PropTypes.object.isRequired,
  mode: React.PropTypes.oneOf(['create', 'edit', 'view']).isRequired
}

export default asForm(UserAddressGeo, 'geo')
