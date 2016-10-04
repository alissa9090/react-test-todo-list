import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { observer } from 'mobx-react';

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
    const {users} = this.props
    return (
      <div>
        {users.map(user => <div className="user-details" key={user.id}>
          <img height="128" src={user.photoUrl}/>
          <form>
            <this.fieldGroup id="name" label="Name:" value={user.name}/>
            <this.fieldGroup id="username" label="Username:" value={user.username}/>
            <this.fieldGroup id="email" label="Email:" value={user.email}/>
            <this.fieldGroup id="address" label="Address:" value={`${user.street} ${user.suite}, ${user.zipcode} ${user.city}`}/>
            <this.fieldGroup id="phone" label="Phone:" value={user.phone}/>
            <this.fieldGroup id="website" label="Website:" value={user.website}/>
            <this.fieldGroup id="company" label="Company:" value={user.companyName}/>
          </form>
        </div>
        )}
      </div>
    )
  }
}

UserDetails.propTypes = {
  users: React.PropTypes.object.isRequired
}

export default UserDetails
