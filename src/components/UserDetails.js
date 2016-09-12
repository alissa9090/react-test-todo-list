import React from 'react';
import Task from '../components/Task';
import { observer } from 'mobx-react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

@observer
class UserDetails extends React.Component {
  fieldGroup({ id, label, value }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl.Static>
        {value}
      </FormControl.Static>
    </FormGroup>
  )
}
  render(){
    if(userStore.isLoading.get()){
      console.log("loading")
      return null
    }
    const userId = parseInt(this.props.userId)
    const user = userStore.getById(userId)
    return (
      <div class="user-details">
        <img height="128" src={user.photoUrl.get()}/>
        <form>
          <this.fieldGroup id="name" label="Name:" value={user.name.get()}/>
          <this.fieldGroup id="username" label="Username:" value={user.username.get()}/>
          <this.fieldGroup id="email" label="Email:" value={user.email.get()}/>
          <this.fieldGroup id="address" label="Address:" value={`${user.address.street.get()} ${user.address.suite.get()}, ${user.address.zipcode.get()} ${user.address.city.get()}`}/>
          <this.fieldGroup id="phone" label="Phone:" value={user.phone.get()}/>
          <this.fieldGroup id="website" label="Website:" value={user.website.get()}/>
          <this.fieldGroup id="company" label="Company:" value={user.company.name.get()}/>
        </form>
      </div>
    )
  }
}

UserDetails.propTypes = {
  userId: React.PropTypes.number.isRequired
}

export default UserDetails
