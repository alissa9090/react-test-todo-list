import React from 'react'
import {observer} from 'mobx-react'
import asForm from '../components/asForm'
import InputField from '../components/InputField'

@observer
class UserAddressGeo extends React.Component {
  render () {
    const {geo, updateProperty} = this.props
    return (
      <div>
        <InputField id="address-geo-lat" label="Lat" name="lat" value={geo.lat.get()} onChange={updateProperty}/>
        <InputField id="address-geo-lng" label="Lng" name="lng" value={geo.lng.get()} onChange={updateProperty}/>
      </div>
    )
  }
}

UserAddressGeo.propTypes = {
  geo: React.PropTypes.object.isRequired
}

export default asForm(UserAddressGeo, 'geo')
